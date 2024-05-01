const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user Details form Database");
        //console.log(`Username: ${this.username}`);  //this keyword is used for global access 
        console.log(this);
    }

}

// console.log(user.username);
// // console.log(user.getUserDetails());
// console.log(this);  //this keyword is a global object

//*****************Constructor***************

// const promiseOne = new Promise()  //Constructor function
// const date = new Date() 

function User (username, loginCount, isLoggedIn){
    this.username = username   //left side is always variable and right side is a parameter
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.user}`);
    }
    return this
}
const userOne = new User("Hitesh", 12, true)   //New Keyword is giving always new instance.
const userTwo = new User("Chai or Code", 11, false)
console.log(userOne.constructor);
// console.log(userTwo);
