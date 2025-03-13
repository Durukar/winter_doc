---
sidebar_position: 1
---

# Create a Controller

<!-- Add **Markdown or React** files to `src/pages` to create a **standalone page**: -->

Following the **MVC** design pattern, Winter was built to assist developers in organizing their projects. As a result, there is no need to create routes instead, a controller class will handle this logic.

<!-- - `src/pages/index.js` → `localhost:3000/`
- `src/pages/foo.md` → `localhost:3000/foo`
- `src/pages/foo/bar.js` → `localhost:3000/foo/bar` -->

## Create your first controller

Create a file at `src/GreetingsController.ts`:

```tsx title="src/GreetingsController.ts"

@RestController('/greetings')
class GreetingsController {

  @GetMapping()
  hello() {
    return 'Hello, is so Cold!!❄️❄️'
  }
}
```

Register a new controller at `src/main.ts`:
```tsx tittle="src/main.ts"

Winter.create()
  .setName('WinterFramework') // Project Name
  .setEnv('dev') // dev = 1337 | prod = 8080
  // .setPort(3000) // Custom Port,
  .addController(GreetingsController) // ADD GreetingsController here
  .addMiddleware((app) => {
    // Middlewares
    app.use('*', async (ctx, next) => {
      console.log(`${ctx.req.method} ${ctx.req.url}`)
      await next()
    })
  })
  .start()

```

A new route is now available at - `/greetings` → `localhost:1337/greetings`.

<!-- ## Create your first Markdown Page

Create a file at `src/pages/my-markdown-page.md`:

```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```

A new page is now available at [http://localhost:3000/my-markdown-page](http://localhost:3000/my-markdown-page). -->
