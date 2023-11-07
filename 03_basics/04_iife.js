// function chai(){
//     console.log("Db Connected")
// }
// chai()

(function chai(){ //named iife 
    console.log("Db Connected")
})();

// ()() //fun defination ...function execution

// use of IIFE is to save from global scope   


// (function aurchai() { 
//     console .log("db connected two")

// })();

((name) =>{ 
    console .log(`db connected two ${name}`);

})('suyash')