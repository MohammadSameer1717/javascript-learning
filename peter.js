scope

var c = 1000;

function add() {
  var a = 5;
  var b = 6;
  var sum = a+b;
  return sum;
}

// primitive data types a,b,c,d and e... *
var a = 5;
var b = "Hello";
var c = true;
var d = null;
var e = undefined;
var f = new Date();
console.log(a,b,c,d,f,e);

// Non-primitive Data Types in JavaScript

// ✅ Array of numbers
var array1 = [1, 2, 3, 4, -3, -5, -34];

// ✅ Array with mixed data types (number, string, boolean)
var array2 = [1, "hello", false];

// ✅ Object representing a car or an employee
var Object1 = {
    name: "peter",         // string
    cost: 52000,           // number
    mileage: 12.9,         // number (float)
    isemployees: true      // boolean
};

// ✅ Output (just to check)
console.log("array1:", array1);
console.log("array2:", array2);
console.log("Object1:", Object1);


 var result = add()  + c;
 console.log(result);

 function addition(){
  let a = 5;
  let b = 7;
  let sum = a+b;
  return sum ;
 }

function subtraction () {
    var a = 90;
    var b = 30;
    var c = 20;
    var subtraction = a - (b + c);
    // return subtraction
    let print = subtraction()
    console.log(print);
}

  console.log(a); // error because a is intialized in the function 
 var result = addition() + 55;
 console.log(result);

Redeclration 

var x = 10 ;
var x = 20;
console.log(x);

// in var redeclaration is possible

let x = 5;
let x= 10; // error : x is a redeclared 
console.log(x);

// in let redeclaration is not possible 

const a = 5;
const a = 6;
console.log(a); // error : in const you can not redeclare 

function update() {
  const a = 20 ;
  const b = 30 ;
  
 return Object.freeze({a , b});
}


const result = update();
console.log(result);

result.a = 45; // This will fail silently or throw an error in strict mode

console.log(result);

Reassignment

var a = 34;
a = 54;
console.log(a);

let  a = 34;
a = 100;
console.log(a);

const a = 34;
a = 10000; // assignment to constant variable 
console.log(a);

Hoisting 

console.log(a);
var a = 45;

// Que ---- Why Does var Give undefined?
// ANS --- During the compilation phase, JavaScript initializes var variables with undefined before executing the code.
// This behavior ensures that the variable exists when referenced but hasn't been assigned its actual value yet.


console.log(a);
let a = 45;

// Comparison with let and const
// Variables declared with let and const do not get initialized during hoisting. Instead, they remain in the Temporal Dead Zone (TDZ) until the code assigns them a value.


// Que -what is temporal deadzone?
// ans - In JavaScript, variables declared with let and const are hoisted,
//  but they are not initialized until the code execution reaches the line where they are defined. 
// Before that line, any attempt to access them results in a ReferenceError 
// because they are considered to be in the Temporal Dead Zone.


let name = "Sameer";
let age = 22;
console.log(`Name: ${name}, Age: ${age}`);

// javascript start right path to succece ***

var str1 = "Hello! How are you?"
console.log(str1);
var strLenth = str1.length;
console.log(strLenth);

console.log(str1.toUpperCase());
console.log(str1.charAt(4));
var partStr1 = str1.substring(0,6)
console.log(partStr1);
 var partStr2 = "JavaScriptIsAwesome";
var result = partStr2.slice(-12, -3); 
console.log(result); 

var str1 = "Hello! How are you";
var str2 = "javascript isawesome";
var combineStr = str1.concat(str2);
var combineStr2 = str1 + " " + str2
console.log(combinestr);
// console.log(combineStr2);


// replace method
var str4 = "Hello! how are you ? ";
var replacedStr = str4.replace("Hello","Good Morning")
console.log(replacedStr);


var a = 33;
var b = 45;
// var result = (a >= 50) || (b != a) && !(a === 33);

console.log(result);



