const name="Ayesha"
const repoCount = 50
//console.log(name+repoCount+"value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Mar-oo-sh')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('o'));

const newString=gameName.substring(0, 4)
console.log(newString);

const anotherString=gameName.slice(-4, 1)
console.log(anotherString);

const newStringOne= "          Ayesha           "
console.log(newStringOne);
console.log(newStringOne.trim());


const url="https://www.facebook.com/"
console.log(url.replace('www','hppt'))
console.log(url.includes('node'))    //false
console.log(url.includes('com'))  //true


console.log(gameName.split('-')) //making array with this






