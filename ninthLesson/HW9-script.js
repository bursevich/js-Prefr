
function mid(a,b) {
 let c = (a + b)/2;
  return c;
}

console.log(mid(10,2));

function pow(x,n) {
  let y = Math.pow(x,n);
  return y;
}
console.log(pow(3,4));

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



loopWhile(11,18);
function loopWhile(f,e) {
  let a = f;
  while (a < e) {
    let g = a % 2;
    if ( g == 0 ) {
       a++;
    } else {
      console.log(a);
      a++;
    }
  }
}

loopDoWhile(2,8);
function loopDoWhile(s,t) {
  let j = s;
  do {
    let g = j % 2;
    if ( g == 0 ) {
    } else {
      console.log(j);
    }
    j++;
  } while (j <= t);
}

loopFor(2,10);
function loopFor(v,w) {
  for (h=v; h<w; h++) {
    let g = h % 2;
    if ( g == 0) {}
    else {
      console.log(h);
    }
  }
}