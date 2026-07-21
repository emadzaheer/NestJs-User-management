# User Management API

A REST API for managing users and handling credential-based login, built with
[NestJS](https://nestjs.com/), TypeScript, and PostgreSQL via TypeORM. It
demonstrates a clean module boundary between user persistence and authentication,
request validation with DTOs, and configuration driven entirely by environment
variables.

## Features

- User CRUD over a PostgreSQL table (create, read, update, delete)
- Credential login that validates against stored users and returns the user
  record without exposing the password
- Request validation with `class-validator` DTOs and a global whitelisting
  `ValidationPipe`, so unknown fields are stripped from request bodies
- Environment-driven database and server configuration (no secrets in source)
- A liveness endpoint for health checks

## Tech stack

| Concern    | Choice                              |
| ---------- | ----------------------------------- |
| Framework  | NestJS 10                           |
| Language   | TypeScript                          |
| ORM        | TypeORM 0.3                         |
| Database   | PostgreSQL                          |
| Validation | class-validator / class-transformer |
| Testing    | Jest + Supertest                    |

## Architecture

The application is split into feature modules wired together by the root
`AppModule`.

```
src/
  app.module.ts        Root module: config + TypeORM + feature modules
  main.ts              Bootstrap, global ValidationPipe
  app.controller.ts    Health check
  user/
    user.module.ts     Registers the User repository
    user.controller.ts REST routes for /user
    user.service.ts    Repository access (find, save, update, delete)
    entity/user.entity.ts
    dto/user-update.dto.ts
  auth/
    auth.module.ts     Imports UserModule to reuse user lookups
    auth.controller.ts POST /auth/login
    dto/login.dto.ts
```

`AuthModule` imports `UserModule` and reuses `UserService.findByEmail` rather
than duplicating persistence logic, keeping user access in a single place.
Database credentials are read at startup through `@nestjs/config`, so the same
image runs against any environment.

## API reference

Base URL: `http://localhost:3000`

| Method | Path          | Description        | Body                        |
| ------ | ------------- | ------------------ | --------------------------- |
| GET    | `/`           | Health check       | –                           |
| GET    | `/user`       | List all users     | –                           |
| GET    | `/user/:id`   | Get a user by id   | –                           |
| POST   | `/user`       | Create a user      | `{ name, email, password }` |
| PATCH  | `/user/:id`   | Update a user      | `{ name, email, password }` |
| DELETE | `/user/:id`   | Delete a user      | –                           |
| POST   | `/auth/login` | Verify credentials | `{ email, password }`       |

### Examples

Create a user:

```bash
curl -X POST http://localhost:3000/user \
  -H "Content-Type: application/json" \
  -d '{"name":"Ada Lovelace","email":"ada@example.com","password":"s3cret"}'
```

Log in:

```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"ada@example.com","password":"s3cret"}'
```

Successful login returns the user without the password field:

```json
{ "id": 1, "name": "Ada Lovelace", "email": "ada@example.com" }
```

Bad credentials return `401 Unauthorized`:

```json
{ "statusCode": 401, "message": "Invalid email or password", "error": "Unauthorized" }
```

## Getting started

### Prerequisites

- Node.js 18+
- A running PostgreSQL instance

### Setup

```bash
npm install
cp .env.example .env   # then fill in the database values
```

Configure the connection in `.env`:

```
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=your-password
DB_NAME=nestjsusermanagement
```

TypeORM runs with `synchronize` enabled, so the `user` table is created
automatically on first boot. This is convenient for local development; use
migrations before running against a production database.

### Run

```bash
npm run start        # start
npm run start:dev    # watch mode
npm run start:prod   # run the compiled build
```

## Testing

```bash
npm test             # unit tests
npm run test:e2e     # end-to-end tests (requires a database)
npm run test:cov     # coverage
```

## Notes

Passwords are currently compared as plain text, which keeps the example focused
on the API surface and module structure. Hashing with bcrypt and issuing JWTs
are the natural next steps for a production build.
