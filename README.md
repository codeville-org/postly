# Shareville

**Shareville** is a third-party web application tool designed to simplify social media post management, starting with seamless integration for scheduling and instant posting to Facebook pages. It offers an embeddable widget that can be integrated into websites (e.g., AI image generation platforms) to enable users to connect their Facebook accounts, share media, and schedule posts with ease. Shareville prioritizes a user-friendly experience for linking accounts and managing posts, backed by a robust infrastructure for data and scheduling tasks.

## Features

- **Seamless Facebook Integration**: Users can securely connect their Facebook accounts and pages through a straightforward OAuth flow.
- **Post Scheduling & Instant Sharing**: Share images or media to Facebook pages instantly or schedule posts via an intuitive widget.
- **Reusable Widget**: Easily embeddable in any website (e.g., NextJS-based platforms) to manage social media posting without code duplication.
- **Real-Time Status Updates**: Webhooks deliver live updates on post statuses, viewable on the host website.
- **Scalable Design**: Built to support integration with multiple websites and future social media platforms.

## Tech Stack

- **Frontend Widget**: NextJS, React, TypeScript, Tailwind CSS, Shadcn UI
- **Backend API**: BunJS, HonoJS Framework, Drizzle ORM
- **Database**: PostgreSQL, Redis
- **Queue**: BullMQ with Redis
- **Authentication**: Better-Auth
- **Hosting**: Self-managed VPS Server

## Purpose

Shareville eliminates the need for repetitive social media integration by providing a standalone, reusable tool that simplifies connecting and posting to Facebook pages. It’s designed for scalability, enabling seamless integration with various websites while offering an effortless post management experience.

## Getting Started

1. Clone the repository: `git clone https://github.com/[your-username]/shareville.git`
2. Install dependencies: `bun install` (backend) and `npm install` (frontend)
3. Configure environment variables for PostgreSQL, Redis, and Facebook API credentials.
4. Run the backend: `bun run start`
5. Run the frontend widget: `npm run dev`
6. Integrate the Shareville widget into your NextJS website and start sharing!

## Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) for details on how to submit pull requests, report issues, or suggest features.

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

### Remote Caching

> [!TIP]
> Vercel Remote Cache is free for all plans. Get started today at [vercel.com](https://vercel.com/signup?/signup?utm_source=remote-cache-sdk&utm_campaign=free_remote_cache).

Turborepo can use a technique known as [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup?utm_source=turborepo-examples), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turborepo.com/docs/crafting-your-repository/running-tasks)
- [Caching](https://turborepo.com/docs/crafting-your-repository/caching)
- [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching)
- [Filtering](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters)
- [Configuration Options](https://turborepo.com/docs/reference/configuration)
- [CLI Usage](https://turborepo.com/docs/reference/command-line-reference)

---
