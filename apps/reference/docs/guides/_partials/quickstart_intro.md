## Intro

This example provides the steps to build a basic user management app. It includes:

- Supabase [Database](/docs/guides/database): a Postgres database for storing your user data.
- Supabase [Auth](/docs/guides/auth): users can sign in with magic links (no passwords, only email).
- Supabase [Storage](/docs/guides/storage): users can upload a photo.
- [Row Level Security](/docs/guides/auth#row-level-security): data is protected so that individuals can only access their own data.
- Instant [APIs](/docs/guides/api): APIs will be automatically generated when you create your database tables.

By the end of this guide you'll have an app which allows users to login and update some basic profile details:
