
function count(str,i) {
  let j = -1;
  let k = 0;
  while ((j = str.indexOf(i, j + 1)) != -1) {
     k = k +1;
  }
  return k;
}
console.log(count(`we are future developers`,`e`));


function powX(x,n) {
 return Math.pow(Math.round(x),Math.round(n));
}
console.log(powX(2.5,3.3));


function checkingComb(str, comb){
  return (str.toLowerCase().indexOf(comb.toLowerCase()) != -1 ? true : false);
}
console.log(checkingComb(`my naMe is Alex`,`name`));
console.log(checkingComb(`my sUrNaMe is Ivanov`,`SURNAME`)); 
console.log(checkingComb(`my sUrNaMe is Ivanov`,`SIRNAMES`)); 

