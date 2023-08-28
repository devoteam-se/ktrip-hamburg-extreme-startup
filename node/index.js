#!/usr/bin/env -S node --watch

import * as http from "node:http"

http.createServer(async (req, res) => {
  const url = new URL(req.url, req.protocol + '://' + req.headers.host)
  const question = url.searchParams.get('q') || ''
  let answer = ""
  console.log({ question, answer })
  res.end(answer)
}).listen({
  host: '0.0.0.0',
  port: 8000,
})
