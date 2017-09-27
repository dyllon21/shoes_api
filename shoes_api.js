const ObjectId = require('mongodb').ObjectId;
module.exports = function(models) {

  const Shoes = function(req, res) {
    models.Shoe.find({}, function(err, results) {
      if (err) {
        return next(err)
      }
      res.json({
        results
      });
    });
  };
  //   if (!shoes) {
  //     res.status(404).json({
  //       message: 'No Shoes Found'
  //     });
  //     res.render('shoes')
  //   }
  // };

  const shoeBrand = function(req, res, next) {
    var brand = req.params.brandname;
    models.Shoe.find({
      Brand: brand
    }, function(err, brand) {
      if (err) {
        return next(err)
      }
      res.json({
        brand
      })
    })
  };

  //   let brand = shoes.filter(brand => {
  //     return shoes.brand == requestBrand;
  //   });
  //   if (!brand) {
  //     res.status(404).json({
  //       message: 'No Shoe Found'
  //     });
  //   }
  //   res.json(brand[0]);
  // };

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

  // const addNewShoes = function(req, res, next) {  //   var newShoe = {
  //     name: req.body.newShoe
  //   };
  //   if (!shoe || !shoe.name) {
  //     req.flash('error', 'Shoe field should not be blank')
  //   } else {
  //     models.Shoe.create(shoe, function(err, results) {
  //       if (err) {
  //         return next(err);
  //       }
  //       req.flash('success', 'new shoe added');
  //     })
  //   }

  const addNewShoes = function(req, res, next) {
    var newShoes = req.body
    models.Shoe.create({
      Brand: newShoes.Brand,
      Color: newShoes.Color,
      Price: newShoes.Price,
      Size: newShoes.Size,
      InStock: newShoes.InStock
    }, function(err, newData) {
      if (err) {
        return next(err)
      }
      res.send(newData)
    });
  }


  return {
    Shoes,
    shoeBrand,
    addNewShoes
  }
};
