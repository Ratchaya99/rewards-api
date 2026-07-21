# Rewards API

Backend API for a Loyalty Rewards Platform built with NestJS, Prisma, and PostgreSQL.

## Tech Stack

- NestJS
- TypeScript
- Prisma ORM
- PostgreSQL
- JWT Authentication
- Passport
- Bcrypt
- PNPM

---

## Features

### Authentication

- Register
- Login
- JWT Authentication
- Refresh Token Rotation
- Logout
- Get Current User Profile

### API Architecture

- Global Response Interceptor
- Global Exception Filter
- Response Message Decorator
- Validation Pipe

---

## Prerequisites

- Node.js 20+
- PostgreSQL
- PNPM

---

## Installation

Install dependencies.

```bash
pnpm install
```

Create your environment file.

```bash
cp .env.example .env
```

Update the values in `.env`.

Run database migrations.

```bash
pnpm prisma migrate dev
```

Start the development server.

```bash
pnpm start:dev
```

Application runs at:

```text
http://localhost:3000
```

---

## Build

```bash
pnpm build
```

---

## API

| Method | Endpoint | Description |
| ------- | -------- | ----------- |
| POST | /auth/register | Register user |
| POST | /auth/login | Login |
| POST | /auth/refresh | Refresh access token |
| POST | /auth/logout | Logout |
| GET | /auth/profile | Current user profile |

---