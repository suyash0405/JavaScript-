// Primitive  -   String, Number, BigInt, Boolean, null, undefined,Symbol
// Call by value


// JS is Dynamically typesd

const score = 100;
const scoreValue = 100.4

const isLoggedIn = false;
const outsideTemp = null

let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

// console.log( id == anotherId);

const bigNumber = 12345678901234567890n

// console.log(typeof bigNumber)
// console.log(typeof outsideTemp)

//Non - Primitive - Object , Arrayn, Function
//Call by referenece

const heros = ["shakitman","naagraj","doga"]

let myObj = {
    name :"suyash",
    age: 22,
}

const myFunction = function(){
    // console.log("Hello World!")
}
myFunction()

// console.log(typeof myFunction) //function object
// console.log(typeof heros)

// ========================================

// Stack(Primitive) , Heap(Non-Primitive)

let myYoutubename = "suyashchaudharydotcom"

let anothername = myYoutubename;
anothername = "chaiaurcode"

// console.log(anothername)
// console.log(myYoutubename)


let user1 = {
    userEmail : "abc.gmail.com",
    upi :"123@ybl"
}

let user2 = user1;  //reference 

user2.userEmail  = "def.gmail.com"
// console.log(user1.userEmail)
// console.log(user2.userEmail)



