const assert = require('assert');
const Models = require('../models');
describe('models should be able to', function() {

  var models = Models('mongodb://localhost/api-tests');

  beforeEach(function(done) {
    models.Shoe.remove({}, function(err) {
      done(err);
    });
  });

  it('Store Shoes to Mongodb', function(done) {

    var shoeData = {
      name: 'The shoe test'
    };

    models.Shoe.create(
      shoeData,
      function(err) {
        // done(err);

        models.Shoe.find({
          name: 'The shoe test'
        }, function(err, shoes) {
          assert.equal(1, shoes.length);
          done(err);
        });
      });
  });

  it('should not allow duplicate shoes', function(done) {
    var shoeData = {
      name: 'The shoe test'
    };
    models.Shoe.create(
      shoeData,
      function(err) {
        var shoeData = {
          name: 'The shoe test'
        };
        models.Shoe.create(
          shoeData,
          function(err) {
            assert.ok(err, 'give an error for duplicates');
            done();
          });
      });
  });
})
