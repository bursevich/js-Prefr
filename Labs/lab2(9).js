var a = 5;
var b = 6;
if (a == 6 || b == 6) {
  console.log(true);
} else {
  console.log(false);
}

if (a == 6 && b == 6) {
  console.log(true);
} else {
  console.log(false);
}


console.log(!true);


var a = true;
console.log(+true);

var a = 1;

 while (a < 6) {
    console.log(a);
    a++;
}

var a = 0;

while (a < 10) {
 a++;
if (a == 5) continue;
 console.log(a);
}

function showMessage(value, vara) {
  console.log(value + vara);
}
showMessage(5, 6);



var sum  = new Function('a,b','return a + b'); // Одно

function sum(a,b) { // и то же
  return a+b;
  
}
console.log(sum(2,3));