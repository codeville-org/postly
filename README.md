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

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
