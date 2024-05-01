//Singleton - When you make constructor it is made by singleton object
//Object Literals

//Object.create

const mySym = Symbol("Key1")


const jsUser = {
    name: "Aakash",
    "full name": "Aakash Sharma",
    [mySym]: "myKey1",
    age: 18,
    location: "Delhi",
    email: "aakash@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser[mySym]);

jsUser.email = "hitesh@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "hitesh@microsft.com"
// console.log(jsUser);

//Funtions

jsUser.greeting = function(){
    console.log("Hello JS User");
}

jsUser.greetingTwo = function(){
    console.log('Hello JS User,${this.name}');
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());