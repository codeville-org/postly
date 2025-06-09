"use client";
import Link from "next/link";
import { useCallback, useId } from "react";
import { CiFacebook } from "react-icons/ci";

import { Button } from "@repo/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@repo/ui/components/card";
import { Input } from "@repo/ui/components/input";
import { useAppForm } from "@repo/ui/components/tanstack-form";
import { cn } from "@repo/ui/lib/utils";

import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { type SignupSchema, signupSchema } from "../schemas";

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const toastId = useId();

  const form = useAppForm({
    validators: { onChange: signupSchema },
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: ""
    },
    onSubmit: ({ value }) => handleSignupWithEmail(value)
  });

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      e.stopPropagation();
      form.handleSubmit();
    },
    [form]
  );

  const handleSignupWithEmail = async (values: SignupSchema) => {
    await authClient.signUp.email({
      name: "",
      email: values.email,
      password: values.password,
      fetchOptions: {
        onRequest: () => {
          toast.loading("Signing up...", { id: toastId });
        },
        onSuccess: () => {
          toast.success("Signed up successfully!", { id: toastId });
        },
        onError: (ctx) => {
          console.log(ctx);
          toast.error(`Failed: ${ctx.error.message}`, {
            id: toastId
          });
        }
      }
    });
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl font-heading font-bold">
            Get Started
          </CardTitle>
          <CardDescription>
            Signup with your Email or Facebook account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form.AppForm>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-6">
                <div className="flex flex-col gap-4">
                  <Button variant="outline" className="w-full">
                    <CiFacebook className="size-5" />
                    Signup with Facebook
                  </Button>
                </div>
                <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                  <span className="bg-card text-muted-foreground relative z-10 px-2">
                    Or continue with
                  </span>
                </div>

                {/* -------- */}

                <form.AppField
                  name="email"
                  children={(field) => (
                    <field.FormItem>
                      <field.FormLabel>Email</field.FormLabel>
                      <field.FormControl>
                        <Input
                          placeholder="john@example.com"
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                          onBlur={field.handleBlur}
                        />
                      </field.FormControl>
                      <field.FormMessage />
                    </field.FormItem>
                  )}
                />

                <form.AppField
                  name="password"
                  children={(field) => (
                    <field.FormItem>
                      <field.FormLabel>Password</field.FormLabel>
                      <field.FormControl>
                        <Input
                          placeholder=""
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                          onBlur={field.handleBlur}
                        />
                      </field.FormControl>
                      <field.FormMessage />
                    </field.FormItem>
                  )}
                />

                <form.AppField
                  name="confirmPassword"
                  children={(field) => (
                    <field.FormItem>
                      <field.FormLabel>Confirm Password</field.FormLabel>
                      <field.FormControl>
                        <Input
                          placeholder=""
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                          onBlur={field.handleBlur}
                        />
                      </field.FormControl>
                      <field.FormMessage />
                    </field.FormItem>
                  )}
                />

                {/* -------- */}

                <div className="grid gap-6">
                  <Button
                    type="submit"
                    className="w-full"
                    loading={form.state.isSubmitting}
                    disabled={form.state.isSubmitting}
                  >
                    Sign Up
                  </Button>
                </div>
                <div className="text-center text-sm">
                  {`Aleady have an account? `}
                  <Link href="/signin" className="underline underline-offset-4">
                    Sign In
                  </Link>
                </div>
              </div>
            </form>
          </form.AppForm>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
