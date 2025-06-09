import { OpenAPIHono } from "@hono/zod-openapi";
import { cors } from "hono/cors";
import { notFound, onError, serveEmojiFavicon } from "stoker/middlewares";
import { defaultHook } from "stoker/openapi";

import type { AppBindings, AppOpenAPI } from "@/types";

import env from "@/env";
import { BASE_PATH } from "@/lib/constants";
import { logger } from "@/middlewares/pino-logger";
import { auth } from "./auth";

export const createRouter = function (): OpenAPIHono<AppBindings> {
  return new OpenAPIHono<AppBindings>({
    strict: false,
    defaultHook
  });
};

export default function createApp(): OpenAPIHono<AppBindings> {
  const app = createRouter().basePath(BASE_PATH) as AppOpenAPI;

  // Middleware
  app.use(serveEmojiFavicon("🚀"));
  app.use(logger());

  // ------ CORS Handler ------
  app.use(
    "*", // or replace with "*" to enable cors for all routes
    cors({
      origin: env.CLIENT_URL, // replace with your origin
      allowHeaders: ["Content-Type", "Authorization", "Accept-Encoding"],
      allowMethods: ["POST", "GET", "PATCH", "DELETE", "PUT", "OPTIONS"],
      exposeHeaders: ["Content-Length"],
      maxAge: 600,
      credentials: true
    })
  );

  // -------------------------------------------------
  // Better auth Authentication Middleware
  app.use("*", async (c, next) => {
    const session = await auth.api.getSession({ headers: c.req.raw.headers });

    if (!session) {
      c.set("user", null);
      c.set("session", null);
      return next();
    }

    c.set("user", session.user);
    c.set("session", session.session);
    return next();
  });

  app.on(["POST", "GET"], "/auth/*", (c) => {
    return auth.handler(c.req.raw);
  });
  // -------------------------------------------------

  // Error Handelling Middleware
  app.onError(onError);

  // Not Found Handelling Middleware
  app.notFound(notFound);

  return app;
}
