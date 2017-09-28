const mongoose = require('mongoose');

module.exports = function(mongoUrl) {
  mongoose.connect(mongoUrl);

  const ShoeSchema = mongoose.Schema({
    id: Number,
    brand: String,
    color: String,
    price: Number,
    size: Number,
    inStock: Number
  });
  ShoeSchema.index({
    id: '',
    brand: '',
    color: '',
    price: '',
    size: '',
    inStock: ''
  },
   {unique : true});

  const Shoe = mongoose.model('Shoe', ShoeSchema);

  return {
    Shoe
  };
}
