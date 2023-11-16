class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const user1 = new Teacher("Suyash","suyash@gmail","121")
user1.addCourse()

const user2 = new User("Aarush")
user2.logMe()
user1.logMe()

console.log(user1 instanceof User)
