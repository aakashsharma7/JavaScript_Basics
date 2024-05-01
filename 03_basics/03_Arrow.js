const user = {
    username: "Aakash",
    price: 999,

    welcomeMesage: function() {
        console.log('${this.username}, welcome to website');
        console.log(this);
    }
}

// user.welcomeMesage()
// user.username = "sam"
// user.welcomeMesage()

// console.log(this);

// function chai() {
//     let username = "Aakash"
//     console.log(this.username);
// }
// chai()

// const chai = function () {
//     let username = "Aakash"
//     console.log(this.username);
// }

const chai = () => {
    let username = "Aakash"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2  //Another method to run this line 

// const addTwo = (num1, num2) =>  (num1 + num2)  //Another method to run this line and where you use parenthesis you dont have to use the return keyword and the other side when you use curly brases you have to use return keyword.

const addTwo = (num1, num2) =>  ({username: "Aakash"})

console.log (addTwo(2, 3)); 

// const myArr = [2,3,4,5,6]

// myArr.forEach(() => {})