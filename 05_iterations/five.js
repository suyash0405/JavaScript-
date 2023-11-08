// const coding = ["js","python","c++","c"]

// const values = coding.forEach((item) =>{ // for each does not return anything 
//     console.log(item)
//     return item 
// })

// console.log(values)

// ======== filters

// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const values = myNums.filter((num)=>num >4) //() return keyword not req.

// console.log(values)

// const values = myNums.filter((num)=>{ //{} return keyword req
//     return num > 4
// })
// console.log(values)

//=========for each
// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNum = []

// myNums.forEach((num) => {
//     if (num > 4){
//         newNum.push(num)
//     }
// })
// console.log(newNum)

// objects filter

const books = [
    {titles : "Book One" ,publish : 1980},
    {titles : "Book Two" ,publish : 1980},
    {titles : "Book Three", publish : 1982}
];
// const userBooks = books.filter((bk)=> bk.publish === 1980)

// console.log(userBooks);

const userBooks =
    books.filter((bk)=> {
    return bk.publish >1980}
    )
console.log(userBooks);





