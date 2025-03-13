---
sidebar_position: 2
---

# Configure ORM Dialect

As easy as drinking ice-cold water in the desert!

---

## Configure

Check if there’s a `.env.example` file in the root of the project.

By accessing this file, you’ll have a configuration identical to the one described below:

```tsx title="./.env.example"
DATABASE_DIALECT=postgresql
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USERNAME=root
DATABASE_PASSWORD=
DATABASE_NAME=db_name
```

Copy all the content and paste it into a new file named `.env`

---

## Generate and Migration

If everything is configured normally, execute the migration generation command.

```bash title="terminal"
bunx drizzle-kit generate # Generate SQL
bunx drizzle-kit migrate # Migrate
```

Depending on the configured dialect, you will see the database file (SQLITE). The path is configurable through the `.env` file.

## Finish

Ready, everything is set up for use. To learn tricks and tips on how to create the service, refer to the documentation.