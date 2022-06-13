


function User (username, email){

    this.email = email;
    this.username = username;

    this.login = function(){
        console.log('username: ' +`${username}` + ' email: '+ `${email}`)
        return this;
    }
}

const userOne = new User('douglas', 'doug@gmail.com');
const userTwo = new User('amanda', 'amanda@gmail.com');

userTwo.login();


console.log(userOne);

console.log(userOne);