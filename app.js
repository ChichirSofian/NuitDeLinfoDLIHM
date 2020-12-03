const express = require('express')
const bodyParser = require('body-parser');

const app = express()
const port = 3000
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/post-test', (req, res) => {
  console.log('Got body:', req.body);
  res.sendStatus(200);
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

