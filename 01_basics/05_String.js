const name = "aakash"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log('hello my name is ${name} and my repo count is ${repoCount}');

const gameName = new String('Aakash-Ak')

console.log(gameName[0]); //A
console.log(gameName.__proto__); //{}

console.log(gameName.length); //8
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));

const  newString = gameName.substring(-8, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4) //Start from last index
console.log(anotherString);

const newStringOne = " Hitesh "
console.log(newStringOne);
console.log(newStringOne.trim()); //Remove Starting Space from String

const url = "https://aakash.com/aakash%20sharma"
console.log(url.replace('%20', '-')); 

console.log(url.includes('iron'));

console.log(gameName.split('-'));