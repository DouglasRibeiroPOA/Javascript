



class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
        this.score = 0;
    };
    login() {
        console.log(`${this.username}` + " just logged in");
        return this;
    };
    logout() {
        console.log(`${this.username}` + " just logged out");
        return this;
    };
    incScore() {
        this.score += 1;
        console.log(`${this.username}` + " score is: " + `${this.score}`);
        return this;
    };
}



class Admin extends User {

    constructor(username,email,title) {
        super(username,email);
        this.title = title;
    };
    deleteUser(user) {
        users = users.filter(u => u.username !== user.username);
    }
}


const userOne = new User('douglas', 'doug@gmail.com');
const userTwo = new User('amanda', 'amanda@gmail.com');
const userThree = new User('lucca', 'lucca@gmail.com');
const userAdmin = new Admin('Simone', 'Simone@gmail.com');
const userAdmin2 = new Admin('test', 'ireland@gmail.com','super');

console.log(userOne)
console.log(userTwo);
userTwo.logout();
userOne.login().incScore().incScore().logout();

let users = [userOne, userTwo, userThree];


console.log(users);

userAdmin.deleteUser(userOne);

console.log(users);

console.log(userAdmin);
console.log(userAdmin2);

