//  reduce =====

const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(acc,currval){
//     console.log(`acc : ${acc} and currval: ${currval}`)
//     return acc + currval

// },0)


// console.log(myTotal)


const myTotal = myNums.reduce((acc,curr)=>acc + curr,0)
// console.log(myTotal)

function varVsLetFunction(){
    let awesomeCar1 = "Audi";
    var awesomeCar2 = "Mercedes";
  }
  
// console.log(awesomeCar1); // Throws an error
console.log(awesomeCar2);