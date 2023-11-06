// function sayMyName(){
//     console.log("Suyash")
// }
// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }
// addTwoNumbers("2",4)
// addTwoNumbers(2,4)
// addTwoNumbers(2,"a")
// addTwoNumbers(2,null)

// const result = addTwoNumbers(2,4)
// console.log(result) // undefinded

function addTwoNumbers(number1, number2){
    //   let result =  number1 + number2
    //   console.log("suyash chaudhary")
    //   return result
    //   console.log("suyash")
    // or
    return number1 + number2
     }


const result = addTwoNumbers(2,4)
// console.log(result)



 function loginUserMessage(username = "sam"){
    // if (!username ){
    if (username === undefined){
        // console.log("Please enter username")
        return
    }
    return `${username} just logged in `
   
 }
// console.log(loginUserMessage("suyash")) 
// console.log(loginUserMessage()) 

// ===========================shopping cart
//rest operator and spread operator
// function calculateCartPrice(...num1){ //...rest operator
//     return num1

// }
// console.log(calculateCartPrice(200,400,500 ,1000))

function calculateCartPrice(val1,val2,...num1){ //...rest operator
    return num1

}
// console.log(calculateCartPrice(200,400,500 ,1000))

const user = {
    username :"suyash",
    price : 99
}

function handleObjects(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
    
}
// handleObjects(user)
handleObjects({
    username: "sam",
    price:99
})

const myNewArray = [200,300,400,600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,300,400,600]))