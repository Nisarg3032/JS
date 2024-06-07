const name = "nisarg"
const repoCount = 5

//console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Nisarg-Patel-Axel')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));

const newStr = gameName.substring(0,4)
console.log(newStr);

const anotherStr = gameName.slice(2,4)
console.log(anotherStr);

const newStr1 = "  Nisarg  "
console.log(newStr1);
console.log(newStr1.trim());

const url = "https://nisarg.com/nisarg%20patel"

console.log(url.replace('%20', '-'));

console.log(url.includes('nisarg'));

console.log(gameName.split('-'));