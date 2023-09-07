import express, { type Request } from 'express'

const app = express()
const port = 3005

interface Search {
  q: string
}

app.get('/', (req: Request<unknown, unknown, unknown, Search>, res) => {
  const searchParams = req.query.q
  console.log(searchParams)
  res.send('')
})

app.listen(port, () => {
  console.log(`Port ${port}`)
})
