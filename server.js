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


//list all shoes in stock:
// app.get('/api/shoes', (req, res) => {
//   if (!shoes_api) {
//     res.status(404).json({
//       message: 'No Shoes Found'
//     });
//     res.render('shoes')
//   }
//   res.json(shoes_api);
// });

// list specific shoes in stock:
// app.get('/api/shoes/:id', (req, res) => {
//   const requestId = req.params.id;
//
//   let shoe = shoe.filter(shoe => {
//     return shoe.id == requestId;
//   });
//   if (!shoe) {
//     res.status(404).json({
//       message: 'No Shoe Found'
//     });
//   }
//   res.json(shoe[0]);
// });

// app.get('/api/shoes/brand/:brandName', (req, res) => {
//   const filterBrand = {
//     brand: req.body.brandName
//   }
//   const requestId = req.params.brandName;
//
//   let brand = shoes_api.filter(brand => {
//     return brand.brandName == RequestId;
//   });
//   brand.push(filterBrand);
//   res.json(brand);
// });
// //add new shoes to stock:
// app.post('/api/shoes', (req, res) => {
//
//   const shoe = {
//     id: shoes_api.length + 1,
//     color: req.body.color,
//     brand: req.body.brand,
//     price: req.body.price,
//     size: req.body.size,
//     in_stock: req.body.in_stock
//   }
//
//   shoes_api.push(shoe);
//   res.json(shoe);
// });

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

app.post('/api/shoes', shoeRoutes.addNewShoes);
app.post('/api/shoes/sold/:id', shoeRoutes.sold);

// app.get('/api/shoes/color/:color', ShoeRoutes.showColors);

const port = process.env.PORT || 3001;
app.listen(port, function() {
  console.log('shoe API app started on port: ' + port);
})
