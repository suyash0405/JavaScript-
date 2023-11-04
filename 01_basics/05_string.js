const name = "Suyash"
const repoCount = 50
// console.log(name + repoCount + "Value");

// backticks ==>string manipulation
// console.log(`Hello. my name is ${name}. and my repo is ${repoCount}`);

const gamename = new String("Suyash Chaudhary")// string is an object here

// console.log(gamename[0]);
// console.log(gamename.__proto__);

// console.log(gamename.toUpperCase())
// console.log(gamename.length)
// console.log(gamename.charAt(2))
// console.log(gamename.indexOf("a"))

const newString = gamename.substring(0,4) // last value not include
// console.log(newString)

const anotherString = gamename.slice(-4,0)
// console.log(anotherString)

const newStringOne = "   Suaysh....   "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://suyash.com/suyash%20chaudhary"

// console.log(url.replace("%20","-"))

// console.log(url.includes("suyash"))

console.log(gamename.split(" "))
