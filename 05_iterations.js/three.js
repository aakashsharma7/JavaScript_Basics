//For of Loop

//["", "", ""]
//[{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {   //Objects here used on the const.(do not use this for the normal object)
    // console.log(num);
}

const greetings = "Hello World"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

//*********************Maps*********************
//Objects key value pairs and remembers the originals insertion order of the keys and unique values and not a duplicate number.

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States fo America")
map.set('fr', "france")

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myobject = {
    'game1': 'NFS',
    'game2': 'COD'
}

for (const [key, value] of myobject) {
    console.log(key, '-', value);
}