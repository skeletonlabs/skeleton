# plus.skeleton.dev

## Prerequisites

Please ensure you have the following software installed:

- [`pnpm@>=10`](https://pnpm.io/)
- [`docker@>=29`](https://www.docker.com/)

## Environment Variables

See `.env.example`.

Note: For local development, you only need to populate the `DATABASE_URL` variable set to your local database instance, the docker container postgres database defaults to `postgres://postgres:postgres@localhost:5432/postgres`

## Developing

1. Run `pnpm env:start` (This will spin up the docker container containing both a local postgres database and local oauth server)
2. Run `pnpm drizzle:push` (if this is your first time spinning up the docker container to sync our Drizzle schema to the local database, otherwise you may skip this step)
3. Run `pnpm dev`

Once you're done you can run `pnpm env:stop` to spin the container down.
