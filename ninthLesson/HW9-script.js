function mid(a,b) {
  return (a + b)/2;;
}
console.log(mid(10,2));


function pow(x,n) {
  return Math.pow(x,n);
}
console.log(pow(3,3));


function powSecond(z,r) {
  let i = 0;
  let k = 1;
  
  while (i < r){
    i++;
    k = k*z; 
  }
  return k;
}
console.log(powSecond(2,5));


questionFunc(); 
function questionFunc() {
  var l = +prompt('l?', '');
  switch (l) {
    case 0:
      alert(0);
      break;
    case 1:
      alert(1);
      break;
    case 2:
    case 3:
      alert('2,3');
      break;
    default:
      alert('NaN');
  }
  return l;
}




let question = (m=+prompt("m?","")) => {
   switch (m) {
    case 0:
      alert(0);
      break;
    case 1:
      alert(1);
      break;
    case 2:
    case 3:
      alert('2,3');
      break;
    default:
      alert('NaN');
  }  
} 
question(); 



loopWhile(11,16);
function loopWhile(f,e) {
  let a = f;
  while (a < e) {
    if ( a % 2 == 0 ) {
       a++;
    } else {
      console.log(a);
      a++;
    }
  }
}

loopDoWhile(2,9);
function loopDoWhile(s,t) {
  let j = s;
  do {
    if ( j % 2 == 0 ) {
    } else {
      console.log(j);
    }
    j++;
  } while (j <= t);
}


loopFor(2,12);
function loopFor(v,w) {
  for (h=v; h<=w; h++) {
    if ( h % 2 == 0) {}
    else {
      console.log(h);
    }
  }
}