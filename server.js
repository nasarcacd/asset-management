const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');
const enforce = require('express-sslify');
const tbNode = require('tubular-nodejs')('jsondata');
const data = require("./db.json");

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(compression());
  
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
  
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, error => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});

app.post('/api/assets/services', (req, res) => {
  var body = req.body;
  //improvement request for missing parameters
  if(req.body.searchText !== '')
    body = { ...body, search : { operator : 'Auto', text: req.body.searchText }};

  tbNode.createGridResponse(body, data).then(function(response) {
    return res.json(response);
  });
});

app.get('/api/assets/services', (req, res) => {
  res.status(200).send({ success: "no problems!" });
});