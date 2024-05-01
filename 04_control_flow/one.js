//if Statement

const isUserloggedIn = true
const temperature = 41

// if (temperature === 41) {
//     console.log("less than 50");
// }else{
//     console.log("temperature is greater than 50");
// }
// console.log("Execute");

// <, >, <=, >=, ==, !=, ===, !==, 


// const score = 200

// if(score > 100){
//     var power = "fly"
//     console.log('User power: ${power}');
// }
// console.log('User power: ${power}');


//ShortHand Notation

const balance = 1000

// if(balance > 500) console.log("test1"), console.log("test2");   //Implicit scope(It runs in only one line)

//**********************Nesting***********************

// if (balance < 500) {
//     console.log("less than");

// }else if (balance < 750) {
//     console.log("less than 750");

// }else if (balance < 900) {
//     console.log("less than 750");

// }else{
//     console.log("less than 1200");
// }


const UserloggedIn = true
const debitCard = true
const loggedInfromGoogle = false
const loggedInFromEmail = true

if (UserloggedIn && debitCard && 2 == 3) {
    console.log("Allow to but course");
}

if (loggedInfromGoogle || loggedInFromEmail) {
    console.log("User logged in");
} 