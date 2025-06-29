//  # you have only bloke scope
//  # connot be redeclared or reassigned
// /# Hoisting not possible  
//  let and const are block scope variable and cannot be redeclared or reassigned. they are not hoisted. 
// var is global scope variable .
// # let once declared can be reassigned


// if (true) {
//     var r = "Hello";
//     let q = "How are you!";
//     console.log(q);
//     console.log(r);
    
    
// } 
// //  console.log(r);
// //  console.log(q);
 

// x = 11;
// console.log(x);
// var x = 5;

// console.log(a);
// let a = 10;

const addition = (num1, num2) => {
    let  result = num1 + num2;
    console.log(result);
};

addition(4, 5);


// const returnNum = param => param * 5;
// const result1 = returnNum(5);