---
sidebar_position: 3
---

# Create a Service and Repo

Service **repo** or Repo **service**?

---

## Why?

The philosophy of **Winter** will always be to **abstract as much as possible** for the developer, while still maintaining the essence of the **Spring Framework**.

With that in mind, we came up with the idea of giving the developer the option to **unify the repository layer with the service layer**.

*Ungle Bob is going to want to kill me!*

## Create your first Service-Repo

Create a file at `src/UserServiceRepo.ts`:

```ts title="src/UserServiceRepo.ts"
  @ServiceRepo()
  class UserServiceRepo {
    private userRepo!: Promise<SQLiteDB>

    async getAllUsers() {
      return (await this.userRepo).select().from(users)
    }
  }
```

### The Why of Things**

The `ServiceRepo` decorator gives your class seamless access to the database. It ensures there’s always a single database instance (thanks to the `singleton` pattern). The first time you access the `db` property, it initializes the connection, and after that, it reuses the same instance, making it easy and efficient to manage.

---

## For More Information

For details on the queries you can run, check out the **DrizzleORM** **documentation** (recommended):

[Drizzle ORM DOC](https://orm.drizzle.team/docs/overview)

---
