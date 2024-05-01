const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach((item) => {
//     console.log(item);
// })

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num) => {
//     return num > 4
// })

// const newNUms = [] 

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);


const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1981, 
    edition: 2004},
    {title: 'Book Two', genre: 'Non-Fiction', publish: 1982, 
    edition: 2005},
    {title: 'Book Three', genre: 'History', publish: 2003, 
    edition: 2006},
    {title: 'Book Four', genre: 'Non-Fiction', publish: 1984, 
    edition: 2007},
    {title: 'Book Five', genre: 'Science', publish: 2005, 
    edition: 2008},
    {title: 'Book Six', genre: 'Fiction', publish: 1986, 
    edition: 2009},
    
];

// const userBooks = books.filter((bk) => bk.genre === 'History')

const userBooks = books.filter((bk) => {
    return bk.publish >= 2000 && bk.genre === 'History'
})
console.log(userBooks);