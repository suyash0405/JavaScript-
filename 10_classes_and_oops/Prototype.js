// let myName = "Suyash.     "


// // console.log(myName.length)

// console.log(myName.truelength);

// ===============================
// let myHeros = ["thor","spiderman"]
// let heroPower = {
//     thor : "hammer",
//     spiderman : "sling",

//     getSpiderPower : function(){
//         console.log(`Spidy power is ${this.spiderman}`)
//     }
// }

// //power given to objects (top level)
// Object.prototype.hitesh = function(){
//     console.log("hitesh is present in all objects")
// }
// heroPower.hitesh()
// myHeros.hitesh()

// //power given to array

// Array.prototype.heyHitesh = function(){
//     console.log("Hitesh says Hi")
// }

// myHeros.heyHitesh()
// heroPower.heyHitesh(). //error


//======Inheriance
const User = {
    name : "chai",
    email : "chai@gmail.com"
}

const Teacher = {
     makeVideo : true
}
const TeachingSupport = {
    isAvailable : false
}
const TASupport = {
    makeAssignment : "JS assignment",
    fullTime : true,
    __proto__ : TeachingSupport
}

Teacher.__proto__ = User

// ====modern synatax

Object.setPrototypeOf(TeachingSupport,Teacher)

// ===================
let anotherUsername = "ChaiAurCode.     "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length is : ${this.trim().length}`)
}

anotherUsername.trueLength()
"Suyash".trueLength()