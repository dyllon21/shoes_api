var myRequest = new XMLHttpRequest();
myRequest.open('GET', 'http://localhost:3018/api/shoes');

myRequest.onload = function(){
  console.log(myRequest.responseText);
};
myRequest.send();
