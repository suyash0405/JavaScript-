class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`UserName : ${this.username}`);
    }
    static createId(){
        return `123`
    }
}

// const suyash = new User("Suyash")
// console.log(suyash.createId())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const user1 = new Teacher("Aarush","aaru@gmail.com")
user1.logMe()
console.log(user1.createId())