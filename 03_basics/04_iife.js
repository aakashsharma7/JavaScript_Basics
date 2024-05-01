//Immediately Invoked Function Expressions (IIFE)


(function chai(){
    //chai is a named IIFE
    console.log('DB CONNECTED');
})();


((name) => {
    console.log('DB CONNECTED TWO ${name}');
}) ('Aakash') 
