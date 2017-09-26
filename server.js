'use strict';

const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const bodyParser = require('body-parser'); //req.body
const shoeRoutes = require('./shoes_api');
const Models = require('./models');
const models = Models(process.env.MONGO_DB_URL || 'mongodb://localhost/shoesApi');
const ShoeRoutes = shoeRoutes(models);
// let shoes_api = require('./shoes_api');
const app = express();


app.engine('.handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('public'));

app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 * 30 }}));
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

//list specific shoes in stock:
// app.get('/api/shoes/:id', (req, res) => {
//   const requestId = req.params.id;
//
//   let shoe = shoes_api.filter(shoe => {
//     return shoe.id == requestId;
//   });
//   if (!shoe) {
//     res.status(404).json({
//       message: 'No Shoe Found'
//     });
//   }
//   res.json(shoe[0]);
// });

// app.get('/api/shoes/brand/:brandname', (req, res) => {
//   const filterBrand = {
//     brand: req.body.brandname
//   }
//   const requestId = req.params.brandname;
//
//   let brand = shoes_api.filter(brand => {
//     return brand.brandname == RequestId;
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
app.get('/', function(req, res){res.redirect('/api/shoes')})

app.get('/api/shoes', ShoeRoutes.Shoes);
app.get('/api/shoes/brand/:brandname', ShoeRoutes.shoeBrand);
// app.get('/api/shoes/brand/:brandname', ShoeRoutes.showBrands);
// app.get('/api/shoes/size/:size', ShoeRoutes.showSizes);
// app.get('/api/shoes/color/:color', ShoeRoutes.showColors);
// app.get('/api/shoes/brand/:brandname/size/:size/color/:color', ShoeRoutes.showBrandSizeAndColor);
// app.post('/api/shoes/sold/:name', ShoeRoutes.updateStock);
// app.post('/api/shoes', ShoeRoutes.addNewShoes);

const port = process.env.PORT || 3018;
app.listen(port, function(){
        console.log('web app started on port: ' + port);
})
// var express = require('express');
// var app = express();
//
// app.use(function(req, res, next){
//   console.log('the leaves on the trees are', req.query.color);
//   next();
// });
//
// var port = process.env.PORT || 3000;
//
// app.listen(port, function(){
//   console.log('express server is listening on port', port);
// });
