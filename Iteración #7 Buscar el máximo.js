
let nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

function finderName(array, value) {
  let index = array.indexOf(value);
  if (index !== -1) {
    return { found: true, position: index };
  } else {
    return { found: false };
  }
}

console.log(finderName(nameFinder, 'Tony'));
console.log(finderName(nameFinder, 'John')); 
