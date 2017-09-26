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

  const shoeStorage = mongoose.model('shoeStorage', shoeSchema);

  return {
    shoeStorage
  }
}
