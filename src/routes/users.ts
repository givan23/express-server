import express, { Request, Response } from 'express'

const app = express()

app.get('/', (req: Request, res: Response) => {
  res.send('Hello New World!')
})

app.get('/:id', (req: Request, res: Response) => {
  const id = req.params.id
  console.log(id);
  res.send('Hello New World!!!!!X' + id)
})

app.post('/', (req: Request, res: Response) => {
  res.send('Got a POST request')
})

app.put('/:id', (req: Request, res: Response) => {
  res.send('Got a PUT request at /user')
})

app.delete('/:id', (req: Request, res: Response) => {
  res.send('Got a DELETE request at /user')
})

export default app
