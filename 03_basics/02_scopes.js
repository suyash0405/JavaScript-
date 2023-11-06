// let a = 10
// const b = 20
// var c = 30
// console.log(a);
// console.log(b);
// console.log(c);
// var c = 300
let a = 100
if (true){
    let a = 10
    const b = 20
    // var c = 30
    // console.log("Inner: ",a);

}
// console.log("outer:", a);
// console.log(b);
// console.log(c);

//========Nested Function

function one(){
    const username = "suyash"

    function two (){
        const website = "youtube"
        // console.log(username)
    }
    // console.log(website)
    two()
}
one()

// =====
if (true){
    const username = "suyash"
    if (username == "suyash"){
        const website =  " youtube"
        // console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)

// ==========++++ interesting +++++
addOne(5) //No error 
function addOne(num){ //statement
    return num + 1
}

// addOne(5)

// addTwo(8) //Error
const addTwo = function(num){ //expression
    return num + 2
}
// addTwo(8)