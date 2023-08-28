#!/usr/bin/env -S deno run --allow-net --watch

Deno.serve({
  port: 8000,
  hostname: "0.0.0.0",
  handler: (req) => {
    const url = new URL(req.url)
    const question = url.searchParams.get('q') || ''
    let answer = ""
    console.log({ question, answer })
    return new Response(answer)
  }
})