const infoAboutPersons = [{
			name: 'Ivan',
			sex: 'M',
			age: 21
		},
		{
			name: 'Olga',
			sex: 'W',
			age: 19
			},
		{
			name: 'Oleg',
			sex: 'M',
			age: 27
		},
		{
			name: 'Ann',
			sex: 'W',
			age: 21
		},
		{
			name: 'Alex',
			sex: 'M',
			age: 30
		},
];


const middleAgeBySex = (infoArray, sex) => {
  let sum = 0;
  let j = 0;
  var w = '';
  if (sex == 'M') {
    w = 'men';
  } else {
    w = 'women';
  }
  infoArray.forEach(function(item, i, arr) {
  if (item['sex'] == sex) {
    sum = sum + item.age;
    j++;
  }    
  }); 
  return ('The average age of all ' + w + ' on the list is ' + sum/j);
}

console.log(middleAgeBySex(infoAboutPersons, 'M')); // 26
console.log(middleAgeBySex(infoAboutPersons, `W`)); // 20