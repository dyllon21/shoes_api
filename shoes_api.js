module.exports = function(models) {
  const shoes = [{
      id: 100,
      color: 'blue',
      brand: 'Puma',
      price: 1200,
      size: 7,
      in_stock: 5
    },
    {
      id: 101,
      color: 'green',
      brand: 'Puma',
      price: 1000,
      size: 8,
      in_stock: 5
    },
    {
      id: 123,
      color: 'orange',
      brand: "Caterpillar",
      price: 1500,
      size: 5,
      in_stock: 3
    },
    {
      id: 200,
      color: 'black',
      brand: "Adidas",
      price: 1999,
      size: 5,
      in_stock: 3
    }
  ];

  const Shoes = function(req, res, next) {
     if (!shoes) {
       res.status(404).json({
         message: 'No Shoes Found'
       });
       res.render('shoes')
     }
     res.json(shoes);
   };

   const shoeBrand = function(req, res){
       const requestBrand = req.params.brand;

       let brand = shoes.filter(brand => {
         return shoes.brand == requestBrand;
       });
       if (!brand) {
         res.status(404).json({
           message: 'No Shoe Found'
         });
       }
       res.json(brand[0]);
     };

  // const showBrands = function(req, res, next) {
  //   var brandname = req.params.brandname
  //   models.shoeStorage.find({
  //     Brand: brandname
  //   }, function(err, foundBrand) {
  //     if (err) {
  //       return next(err)
  //     }
  //     res.json({
  //       foundBrand
  //     })
  //   })
  // }
  //
  // const showSizes = function(req, res, next) {
  //   var size = req.params.size
  //   models.shoeStorage.find({
  //     Size: size
  //   }, function(err, foundSize) {
  //     if (err) {
  //       return next(err)
  //     }
  //     res.json({
  //       foundSize
  //     })
  //   })
  // }
  //
  // const showColors = function(req, res, next) {
  //   var color = req.params.color
  //
  //   models.shoeStorage.find({
  //     Color: color
  //   }, function(err, foundColor) {
  //     if (err) {
  //       return next(err)
  //     }
  //     res.json({
  //       foundColor
  //     })
  //   })
  // }
  //
  //
  // const showBrandSizeAndColor = function(req, res, next) {
  //   var brandname = req.params.brandname;
  //   var size = req.params.size;
  //   var color = req.params.color;
  //
  //
  //   models.shoeStorage.find({
  //     Brand: brandname,
  //     Size: size,
  //     Color: color
  //   }, function(err, foundShoesAndSize) {
  //     if (err) {
  //       return next(err)
  //     }
  //     res.json({
  //       foundShoesAndSize
  //     })
  //   })
  // }
  //
  // const updateStock = function(req, res, next) {
  //
  //   // module.exports = shoes;
  // }
  //
  // const addNewShoes = function(req, res, next) {
  //   var newShoes = req.body
  //   models.shoeStorage.create({
  //     Brand: newShoes.Brand,
  //     Color: newShoes.Color,
  //     Price: newShoes.Price,
  //     Size: newShoes.Size,
  //     InStock: newShoes.InStock
  //   }, function(err, newShoesData) {
  //     if (err) {
  //       return next(err)
  //     }
  //     res.send(newShoesData)
  //   })
  // }

  return {
    Shoes,
    shoeBrand
  }
}
