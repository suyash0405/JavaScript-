//singleton-- constructor

// Object.create 

//Object Literal  -- not a sigleton

const mySym = Symbol("key1")

const  JsUser = {
    name : "Suyash",
    "full name" : "Suyash Chaudhary",
    [mySym] : "mykey1",
    age: 25,
    location: "Noida",
    email:"suyash123@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
} 
//object acces by dot notation and square bracket.....
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// update the value of objects....
JsUser.email = "suyash123@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "suyash123@gmail4444.com"
// console.log(JsUser.email);
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("hello js user")
}

// console.log(JsUser.greeting)
// console.log(JsUser.greeting())

JsUser.greetingTwo = function(){
    console.log(`hello js user , ${this.name}` )
}
console.log(JsUser.greetingTwo())

 