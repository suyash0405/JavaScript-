// //Create Promises
// const promiseOne = new Promise(function(resolve,reject){
//     //Do an async task
//     //DB calls, network calls
//     setTimeout(function() {
//         console.log("ASYNC task is complete");
//         resolve()
//     }, 1000);
// })

// //consumption promisise

// promiseOne.then(function(){
//     console.log("Promise consumed")
// })

//================

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2")
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async 2 resolved")
// })

// ===============data consumption

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
        
//         resolve({username: "suyash",emil:"suyash@gmail.com"})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user)

// })

// ===============
// const promiseFour= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         // let error = true
//         let error = false
//         if(!error){
//             resolve({username:"suyash",passwor:"123"})
//         }
//         else{
//             reject("ERROR Something went wrong!!")
//         }
//     },1000)
// })

// promiseFour.then((user)=>{
//     console.log(user)
//     return user.username
// }).then((myUsername)=>{
//     console.log(myUsername)
// }).catch(function(error){
//     console.log(error)
// }).finally(()=>console.log("The promise is either resolved or rejected"))


//==========
// const promiseFive= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true
//         // let error = false
//         if(!error){
//             resolve({username:"Javascript",passwor:"123"})
//         }
//         else{
//             reject("ERROR JS went wrong!!")
//         }
//     },1000)
// });

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response)

//     }catch(error){
//         console.log(error)

//     }
    
// }
// consumePromiseFive()


// =========================
// async function getAllUsers(){
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         // console.log(response)
//         const data = await response.json()
//         console.log(data)
//     }catch(error){
//         console.log("E:",error)

//     }
// }

// getAllUsers()

// ======================then and catch
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error)=>console.log(error))