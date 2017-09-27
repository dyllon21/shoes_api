const mongoose = require('mongoose');

module.exports = function(mongoUrl) {
  mongoose.connect(mongoUrl);

  const shoeSchema = mongoose.Schema({
    Brand: String,
    Color: String,
    Price: Number,
    Size: Number,
    InStock: Number
  });

  shoeSchema.index({Brand : String}, {unique : true});

  const Shoe = mongoose.model('Shoe', shoeSchema);

  return {
    Shoe
  };
};
