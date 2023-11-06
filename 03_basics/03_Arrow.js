const user = {
    username : "suyash",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}
// user.welcomeMessage()
// user.username = "SAM"
// user.welcomeMessage()
// console.log(this) //{} empty object (global this)


// ========= this in function
// function chai(){
//     let username = "suyash"
//     console.log(this) //details
// //     console.log(this.username) //undefined
// }
// chai()

// const chai = ()=>{  
//     let username = "hitesh"
//     // console.log(this.username)
//     console.log(this) //empty
// }
// chai()


//  const addTwo = (num1, num2) => {
//     return num1 + num2
//  }
//  console.log(addTwo(3,4))

//or

//  const addTwo = (num1, num2) => num1 + num2
//  console.log(addTwo(3,4))

//curly {} return is used 
// () return keywork is not return implecit return

// const addTwo = (num1, num2) => (num1 + num2)
//  console.log(addTwo(3,4))

// TO return object we need to use {} inside()

const addTwo = (num1, num2) => ({username:'suyash'})
 console.log(addTwo(3,4))