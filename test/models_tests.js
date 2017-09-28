const assert = require('assert');
const Models = require('../models');
describe('models should not', function() {

  var models = Models('mongodb://localhost/api-tests');

  beforeEach(function(done) {
    models.Shoe.remove({}, function(err) {
      done(err);
    });
  });

  it('Store Shoes to Mongodb', function(done) {

    var shoeData = {
      Brand: 'The shoe test'
    };

    models.Shoe.create(
      shoeData,
      function(err, result) {
        console.log(result);
        // done(err);

        models.Shoe.find({
          Brand: 'The shoe test'
        }, function(err, shoes) {
          console.log(shoes);
          assert.equal(1, shoes.length);
          done(err);
        });
      });
  });

  it('not allow duplicate shoes', function(done) {
    var shoeData = {
      Brand: 'The shoe test'
    };

    models.Shoe.create(
      shoeData,
      function(err) {
        var shoeData = {
          Brand: 'The shoe test'
        };

        models.Shoe.create(
          shoeData,
          function(err){
            assert.ok(err, 'give an error for duplicates');
            done();
          });
      });
    });

});
