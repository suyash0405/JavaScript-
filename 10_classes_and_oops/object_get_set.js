const User = {
    _email : "abc@gmail.com",
    _password : "abc",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this.email = value

    }
}

const tea = Object.create(User)

console.log(tea.email)