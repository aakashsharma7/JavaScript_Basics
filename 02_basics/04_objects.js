const tinderUser = new Object()  //It is Singleton Object.

// const tinderUser = {}  //Its is not a singleton Object.

tinderUser.id = "123abc"
tinderUser.name = "Aakash"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gamil.com",
    fullname: {
        userfullname:{
            firstname: "Aakash",
            lastname: "Sharma"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = Object.assign({}, obj1, obj2)  //Its use for merge the array or objects.

const obj3 = {...obj1, ...obj2}  //It is use to spread the data in array for the merging.
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com",
    },
    {
        id: 1,
        email: "h@gmail.com",
    },
    {
        id: 1,
        email: "h@gmail.com",
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));  //Its use to check if its his property or not.


// ****************************DeStruturing Objects******************************

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Aakash"
}

//course.courseInstructor

const {courseInstructor: instructor} = course
// console.log(courseInstructor);
console.log(instructor);

// const navbar = ({company}) => {   //It is for destructuring
// }
// navbar(company = "Aakash")



//JSON

// {
//     name: "aakash",
//     coursename: "js in hindi",
//     price: "free"
// }

[
    {},
    {},
    {},
]
