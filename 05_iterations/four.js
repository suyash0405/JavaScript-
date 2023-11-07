const coding = ["js","python","c++","c"]
// coding.forEach(function (item) {   //call back fun in foe each has no func name
//     console.log(item)
// })

// or =>

// coding.forEach((item)=>{
//     console.log(item)
// })
 

// 
// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)

//item,index,arr
// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr)

// })


///
const myCoding = [
    {
        langName : "JS",
        langFileName:".js"
    },
    {
        langName : "python",
        langFileName:".py"
    },
    {
        langName : "java",
        langFileName:".java"
    }
]

myCoding.forEach((item) =>{
    console.log(item.langName);

})