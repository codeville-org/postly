Postly
Postly is a third-party web application tool designed to streamline social media post management, starting with seamless integration for scheduling and instant posting to Facebook pages. It provides a reusable, embeddable widget that can be integrated into websites (e.g., AI image generation platforms) to allow users to connect their Facebook accounts, share media, and schedule posts effortlessly. The tool prioritizes an intuitive user experience for linking accounts and managing posts, with a robust backend to handle data and scheduling tasks.
Features

Easy Facebook Integration: Users can securely connect their Facebook accounts and pages via a simple OAuth flow.
Post Scheduling & Instant Posting: Share images or media to Facebook pages instantly or schedule posts through an intuitive widget interface.
Reusable Widget: Embeddable in any website (e.g., NextJS-based platforms) to manage social media posting without code duplication.
Status Tracking: Webhooks provide real-time updates on post statuses, viewable on the host website.
Scalable Architecture: Built to support integration with multiple websites and future social media platforms.

Tech Stack

Frontend Widget: NextJS, React, TypeScript, Tailwind CSS, Shadcn UI
Backend API: BunJS, HonoJS Framework, Drizzle ORM
Database: PostgreSQL, Redis
Queue: BullMQ with Redis
Authentication: Better-Auth
Hosting: Self-managed VPS Server

Purpose
Postly solves the problem of repetitive social media integration by offering a standalone, reusable tool that simplifies connecting and posting to Facebook pages. It’s designed for scalability, enabling seamless integration with various websites while providing a user-friendly experience for post management.
Getting Started

Clone the repository: git clone https://github.com/[your-username]/postly.git
Install dependencies: bun install (backend) and npm install (frontend)
Configure environment variables for PostgreSQL, Redis, and Facebook API credentials.
Run the backend: bun run start
Run the frontend widget: npm run dev
Integrate the Postly widget into your NextJS website and start posting!

Contributing
Contributions are welcome! Please read our Contributing Guidelines for details on how to submit pull requests, report issues, or suggest features.
License
This project is licensed under the MIT License - see the LICENSE file for details.
