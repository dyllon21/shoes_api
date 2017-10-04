const mongoose = require('mongoose');

module.exports = function(mongoUrl) {
  mongoose.connect(mongoUrl);

  mongoose.connect(mongoUrl, {
    useMongoClient: true
}, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("You Having Fun!?");
    }
});


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
