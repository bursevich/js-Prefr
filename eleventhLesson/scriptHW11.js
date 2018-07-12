var cl = console.log;
function isInArray(arr, el){
 return (arr.indexOf(el) != -1 ? true : false);
  
}
 cl(isInArray([1, 2, 3 , '4', 'hello'],'hello')); // true
 cl(isInArray([1, 2, 3 , `4`, `hello`], 4)); // false
 
 
 
 
 
 
 
 

