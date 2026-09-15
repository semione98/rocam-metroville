import "dotenv/config";
import { defineConfig } from "prisma/config";

// Prisma CLI (migrate, db seed, studio, ...) prefers the DIRECT (unpooled)
// Neon connection string, since Migrate needs a session-based connection
// rather than the pgbouncer-pooled one used by the app at runtime
// (see src/lib/db.ts).
//
// Do not use env("DIRECT_URL") here: Prisma 7 loads this file for every CLI
// command, including `prisma generate` in `postinstall`. Vercel Preview often
// has DATABASE_URL but not DIRECT_URL, and env() throws if the var is missing,
// which aborts `npm install`. generate itself does not need a live URL.
const datasourceUrl = process.env.DIRECT_URL ?? process.env.DATABASE_URL ?? "";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "tsx prisma/seed.ts",
  },
  datasource: {
    url: datasourceUrl,
  },
});
