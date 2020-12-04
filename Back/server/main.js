const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000
const fs = require('fs')
const cors = require('cors')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(cors())

var plages;

fs.readFile('./data/FrenchBeach.json', 'utf8', (err, jsonString) => {
    if (err) {
        console.log("File read failed:", err)
        return
    }
    plages = JSON.parse(jsonString); 
})


app.get('/plage', (req, res) => {
  var arr = new Array;
  plages.plages.forEach(region => {
    region.spot.forEach(plage => {
      arr.push(plage);
    })
  });

  res.send(arr);
})


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

