const functions = require('firebase-functions');
const express = require('express');
// const handlebars = require('handlebars');
const engines = require('consolidate');
// const cors = require("cors");

require('dotenv').config();

const app = express();

app.engine('hbs', engines.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('index');
});

exports.app = functions.https.onRequest(app);
