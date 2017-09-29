var myRequest = new XMLHttpRequest();
myRequest.open('GET', 'http://localhost:3000/api/shoes');

myRequest.onload = function(){
  console.log(myRequest.responseText);
};
myRequest.send();
