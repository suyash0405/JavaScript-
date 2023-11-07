const userEmail = "S@gmail.com"

// if (userEmail){
//     console.log("got user email")
// }
// else{
//     console.log("dont have user email")
// }

// falsy value 
// false, 0, -0,bigINT 0n,"",null,undefined, NaN

//truthy value
//"0","false"," ",[] ,{},fucntion(){}

const emptyObj = {}
if (Object.keys(emptyObj).length === 0){
    console.log("empty object check by converting to array")
} 
//Nullish Coalescing operator (??) : null undefined

let val1;
// val1 = 5 ?? 10 //5
// val1 = null ?? 10 //10
// val1 = undefined ?? 20 //20
val1 = null ?? 10 ?? 20  //10
console.log(val1)