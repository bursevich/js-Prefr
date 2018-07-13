var cl = console.log;
function isInArray(arr, el){
 return (arr.indexOf(el) != -1 ? true : false);
  
}
 cl(isInArray([1, 2, 3 , '4', 'hello'],'hello')); // true
 cl(isInArray([1, 2, 3 , `4`, `hello`], 4)); // false
 
 
 
 
 function modifyArr(arr, el, newEl) {
  var forEl = ["element el not found in array", arr];
  let j = -1;
    while ((j = arr.indexOf(el, j + 1)) != -1)  {
    arr.splice(j,1, newEl);
    forEl.splice(0,forEl.length, arr);
    }  
 return forEl;
}

cl(modifyArr([1,2,3,4,5], 3, 'hello')); // [1,2,`hello`, 4, 5]
cl( modifyArr([1,2,3,4,5,3], 3, `hello`));  // [1,2,`hello`, 4, 5, `hello`] 
cl(  modifyArr([1,2,3,4,5], 6, `hello`) ); // “element 6 not found in array [1,2,3,4,5]”
 

 
 
 
 
 
 
 
 

