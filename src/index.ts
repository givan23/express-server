import routes from './routes/index';
import express from 'express';

const app = express();
const port = 3000;

app.use(routes.users);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
