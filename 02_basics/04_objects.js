// const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = "123abc"
tinderUser.name ="Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

// nested object

const regulaUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "suyash",
            lastname:"chaudhary"
        }
    }

}

// console.log(regulaUser.fullname.userfullname.firstname)

// merge objects
const obj1 = {1 : "a", 2 :"b"}
const obj2 = {3 : "c", 4 :"d"}
const obj4 = {5 : "c", 6 :"d"}

// const obj3 = {obj1 , obj2} 
// console.log(obj3)

// const obj3 = Object.assign({},obj1, obj2,obj4)
// console.log(obj3)

const obj3 = {...obj1,...obj2}
// console.log(obj3)

const users = [
    {
        id : 1,
        email : "s@gmail.com"
    }
]
// // users[1].email
// console.log(tinderUser)
// console.log(Object.keys(tinderUser)); //return an array 
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"))

////=================Destructuring

const course = {
    coursename : "Java Script ",
    price :"999",
    courseId :"123"
}
//course.courseId

// const {courseId} = course
// console.log(courseId)

// const {courseId :cid}   = course
// console.log(cid)

// const navbar = ({company}) =>{

// }
// navbar(company ="suyash")

// ======json ---- api can be in form of objects or arrays
// {
//     "name" : "suyash",
//     "coursename" : " javaScript",
//     "price" :"free"
// }

//====objects inside an arrays 
// [
//     {},
//     {}
// ]