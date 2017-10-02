const mongoose = require('mongoose');

module.exports = function(mongoUrl) {
  mongoose.connect(mongoUrl);

  const ShoeSchema = mongoose.Schema({
    Brand: String,
    Color: String,
    Price: Number,
    Size: Number,
    InStock: Number
  });
  ShoeSchema.index({
    Brand: '',
    Color: '',
    Price: '',
    Size: '',
    InStock: ''
  },
   {unique : true});

  const Shoe = mongoose.model('Shoe', ShoeSchema);

  return {
    Shoe
  };
}
