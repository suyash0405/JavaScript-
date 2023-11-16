//===========Objects literals
//  const user = {
//     username : "suyash",
//     loginCount : 8,
//     signedIn : true,

//     getUserDetails : function(){
//         // console.log("Got user details from database")
//         // console.log(`username ${this.username}`)
//         // console.log(this)
//     }

// }

// // console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)


// ==============constructor function
// const promiseOne = new Promise()
// const date = new Date()


function User(username, loginCount,isloggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isloggedIn = isloggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }
    // return this.  //defult define 
}

const userOne = new User("hitesh",12,true)
const userTwo = new User("Suyash",23,false)

// console.log(userOne)
// console.log(userTwo)

console.log(userOne.constructor)


// new keyword -- empty object created hota h 
// constructor function call hota h new keyword k karan
// this keyword se add ho jate h
