// var c = 300

let a = 300

if(true){       //Block Scope
    let a = 10
    const b = 20
//     console.log("INNER: ",a);
 }

// console.log(a);  //Global Scope
// console.log(b);
// console.log(c);

function one() {
    const username = "Aakash"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if(true){
    const username =  "Aakash"
    if (username === "Aakash") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);,

//**********************INTERESTING*********************/


console.log(addone(5))  //It is Declaration here 
function addone (num) {
    return num + 1
}


addTwo(5)
const addTwo = function (num){   //We hold the value in var as well as declaration 
    return num + 2
}

