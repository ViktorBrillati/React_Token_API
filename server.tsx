import express from 'express';
const cors = require('cors');
const app = express();
const port = 8080;

app.use(cors());

app.use('/login', (req,res) => {
  res.send({
    token: 'Token123'
  });
});

app.get('/', (req, res) => {
  res.send('Hello World, server is up and running!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port} and running on http://localhost:8080/login`);
});