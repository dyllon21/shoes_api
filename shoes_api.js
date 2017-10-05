const ObjectId = require('mongodb').ObjectId;
module.exports = function(models) {
  'use strict';

  const Shoes = function(req, res) {
    models.Shoe.find({}, function(err, shoes) {
      if (err) {
        return next(err)
      }
        res.json({
          shoes
        });
      });
    };


  const shoeBrand = function(req, res, next) {
    var brand = req.params.brandName;
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

  const showSizes = function(req, res, next) {
    var size = req.params.size
    models.Shoe.find({
      Size: size
    }, function(err, size) {
      if (err) {
        return next(err)
      }
      res.json({
        size
      })
    })
  };

  const shoeBrandAndSize = function(req, res, next) {
    var size = req.params.size;
    var brand = req.params.brandName;

    models.Shoe.find({
      Size: size,
      Brand: brand,
    }, function(err, brandAndSize) {
      if (err) {
        return next(err)
      }
      res.json({
        brandAndSize
      })
    })
  };

  //
  const showColorAndSize = function(req, res, next) {
    var color = req.params.color;
    var size = req.params.size

    models.Shoe.find({
      Color: color,
      Size: size
    }, function(err, color) {
      if (err) {
        return next(err)
      }
      res.json({
        color,
        size
      })
    })
  }
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

  const sold = function(req, res, next) {
    var requestId = req.params.id;
    // console.log(ShoeId);
    models.Shoe.findOneAndUpdate({
      _id : ObjectId(requestId)
    }, {
      $inc: {
        'InStock' : -1
      },
    }, {
      upsert : false

    }, function(err, result){
      if(err){
        return res.json({
          status : 'error',
          error : err,
          selling : []
        })
      }else {
        res.json({
          status : 'success',
          selling: result
        })
      }
    })

  };


  const addNewShoes = function(req, res, next) {
    var newShoes = req.body
    // console.log(req.body);
    models.Shoe.create({
      Id: newShoes.Id,
      Brand: newShoes.Brand,
      Color: newShoes.Color,
      Price: newShoes.Price,
      Size: newShoes.Size,
      InStock: newShoes.InStock
    }, function(err, newData) {
      if (err) {
        if (err.code === 11000) {

        } else {
          return next(err)
        }
      }
      res.send(newData)
    });
  }

  return {
    Shoes,
    shoeBrand,
    addNewShoes,
    showSizes,
    shoeBrandAndSize,
    showColorAndSize,
    sold
  };
};
