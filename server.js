'use strict';
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const bodyParser = require('body-parser'); //req.body
const ObjectId = require("mongodb").ObjectId;
const ShoeRoutes = require('./shoes_api');
const Models = require('./models');
// let shoes = require('./shoe_api');

const models = Models(process.env.MONGO_DB_URL || 'mongodb://localhost/shoes');

const shoeRoutes = ShoeRoutes(models);
const app = express();

app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type", "Accept");
  if(req.methos === "OPTIONS"){
    res.header("Access-Control-Allow-Methods", "POST,GET");
    return res.status(200).json({});
  }
  next();
});



app.engine('.handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

app.use(express.static('public'));

app.use(session({
  secret: 'keyboard cat',
  cookie: {
    maxAge: 60000 * 30
  },
  resave: true,
 saveUninitialized: true
}));

var format = require('util').format;
// app.use(flash());

app.get('/', function(req, res) {
  res.redirect('/api/shoes')
});

// app.post('/api/shoes/:id', (req, res) => {
//   var requestId = req.params.id;
//
//  let shoe = shoes.filter(shoe => {
//    return shoe.id == requestId;
//  })[0];
//
//  const index = shoes.indexOf(shoe);
//  const keys = Object.keys(req.body);
//
//  keys.forEach(key => {
//    shoes[key] = shoe;
//  });
//
//    res.json(shoes[index]);
// });

app.get('/api/shoes', shoeRoutes.Shoes);
app.get('/api/shoes/brand/:brandName', shoeRoutes.shoeBrand);
app.get('/api/shoes/size/:size', shoeRoutes.showSizes);
app.get('/api/shoes/brand/:brandName/size/:size', shoeRoutes.shoeBrandAndSize);
app.get('/api/shoes/color/:color/size/:size', shoeRoutes.showColorAndSize);

app.post('/api/shoes', shoeRoutes.addNewShoes);
app.post('/api/shoes/sold/:id', shoeRoutes.sold);


app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    error: {
      Status: err.status,
      message: err.message
    }
  });
});

const port = process.env.PORT || 3001;
app.listen(port, function() {
  console.log('shoe API app started on port: ' + port);
})
