//["",""]
//[{},{},{}]

//for of ----loop

// const arr = [1,2,3,4,5]
// for (const num of arr){
//     console.log(num)
// }

//for of loop on strings

// const greetings = "Hello World!"
// for (const greet of greetings){
//     console.log(greet)
// }

// Maps ---no duplicate values and are in same order

const map = new Map()
map.set("IN","India")
map.set("USA","America")
map.set('Fr',"France")

// console.log(map)

//for loop on map

// for (const key of map){
//     console.log(key) //full array
// }

// for (const [key,value]of map){
//     console.log(key,":-",value) //full array
// }

const myObject= {
    'game1':"NFS",
    'game2':"spiderman"
}

for (const [key,value]of myObject){
    console.log(key,":-",value) //full array
}