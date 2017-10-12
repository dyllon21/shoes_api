//IMPLEMENTING AJAX CALLS FROM THE API TO FRONTEND

// var showModalBTN = document.getElementById('modalActive');
// var closeModal = document.querySelector('.close');

//AJAX CALL function to show all shoes:
function showAllShoes() {
  $.ajax({
    url: 'https://glacial-chamber-96325.herokuapp.com/api/shoes',
    type: 'GET'
  }).done(function(results) {
    //compiling handlebars templates:
    var template = document.querySelector('#shoeStock').innerHTML;
    var myTemplate = Handlebars.compile(template);

    result = myTemplate({
      shoeDetails: results.shoes
    });
    document.getElementById('Results').innerHTML = result;
  });
};

//AJAX CALL function to display shoe's price and number of shoes InStock.
function shoeBrandAndSize() {
  var selectedSize = document.getElementById('sizeSelect').value;
  var selectedBrand = document.getElementById('brandSelect').value;

  $.ajax({
    url: 'https://glacial-chamber-96325.herokuapp.com/api/shoes/brand/' + selectedBrand + '/size/' + selectedSize,
    type: 'GET'
  }).done(function(results) {
    //compiling handlebars templates:
    var template = document.querySelector('#shoeStock').innerHTML;
    var myTemplate = Handlebars.compile(template);

    result = myTemplate({
      shoeDetails: results.brandAndSize
    });
    document.getElementById('Results').innerHTML = result;
  });
};

// AJAX CALL to display shoe brand
function shoeBrand() {
  var selectedBrand = document.getElementById('brandSelect').value;

  $.ajax({
    url: "https://glacial-chamber-96325.herokuapp.com/api/shoes/brand/" + selectedBrand,
    type: "GET"
  }).done(function(results) {
    //compiling handlebars templates:
    var template = document.querySelector('#shoeStock').innerHTML;
    var myTemplate = Handlebars.compile(template);

    result = myTemplate({
      shoeDetails: results.brand
    });
    document.getElementById('Results').innerHTML = result;
  });
};

// AJAX CALL to display shoe size
function shoeSize() {
  var selectedSize = document.getElementById('sizeSelect').value;
  $.ajax({
    url: "https://glacial-chamber-96325.herokuapp.com/api/shoes/size/" + selectedSize,
    type: "GET"
  }).done(function(results) {
    //compiling handlebars templates:
    var template = document.querySelector('#shoeStock').innerHTML;
    var myTemplate = Handlebars.compile(template);

    result = myTemplate({
      shoeDetails: results.size
    });
    document.getElementById('Results').innerHTML = result;
  });
};

// AJAX CALL function to add new stock
$('.submit').on('click', function() {
  var shoes = {
    Brand: document.querySelector('#brand').value,
    Size: document.querySelector('#size').value,
    Color: document.querySelector('#color').value,
    Price: document.querySelector('#price').value,
    InStock: document.querySelector('#inStock').value
  }
  $.ajax({
    url: 'https://glacial-chamber-96325.herokuapp.com/api/shoes/',
    type: 'POST',
    data: shoes,
    success: function(err, result) {
      console.log(err);
    },
    else(result) {
      console.log(success);
    }
  })
  brand.value = " ";
  size.value = " ";
  color.value = " ";
  price.value = " ";
  inStock.value = " ";
  alert("shoe has been added")
});

// AJAX CALL function to sell shoes
$('#Results').on('click', function(e) {
  var sold = e.target.value;
  $.ajax({
    url: 'https://glacial-chamber-96325.herokuapp.com/api/shoes/sold/' + sold,
    type: 'POST',
    dataType: 'application/json',
    success: function(result) {
    },
    error: function(error){
    }
  })
  alert("shoe has been successfully purchased")
});
