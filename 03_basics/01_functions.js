function sayMyname (){
    // console.log("Aakash");
}
sayMyname()

// function addTwoNumbers(Num1, Num2){   //Here Num1 & Num2 is a parameters
//     console.log(Num1 + Num2);
// }
// addTwoNumbers(3, 4)   //Argument 
// addTwoNumbers(3, "4")  //Argument
// addTwoNumbers(3, "a")  //Argument 
// addTwoNumbers(3, null) //Argument

// function addTwoNumbers(Num1, Num2){   //Here Num1 & Num2 is a parameters
//     // let result = num1 + Num2;
//     // return result
//     return Num1 + Num2
// }

// const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    if(username === undefined) {
        console.log("Please Enter a username");
        return
    }
    return '${sam} just logged in'
}
// console.log(loginUserMessage("Aakash"))
// console.log(loginUserMessage())



// function calculateCartPrice (val1, val2, ...num1) {
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 500, 2000))


const user = {
    username: "Aakash",
    price: 199
}
function handleObject(anyobject){
    console.log('username is ${anyobject.username} amd price is ${anyobject.price}');
}
// handleObject(user)
handleObject({
    usernaem: "sam",
    price: 3999
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 100, 600]));