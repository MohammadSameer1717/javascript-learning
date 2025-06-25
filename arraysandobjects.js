const arr1 = ["xyz", "abc", "pqr"];
const arr2 = [34, 45, 54];
const arr3 = [23, "Hello", true, new Date()];

console.log(arr3[1]);

console.log(arr3.length);

console.log(arr3[arr3.length-1]);


arr3[1] = 'How are you ?'
console.log(arr3);


var User1 = {
    name: "peter",
    email: "peter@gmail.com",
    isActive: true,
    createdAt: new Date()
}

console.log(User1.name);
// console.log(User1.createdAt);

User1.name = "sameer";
console.log(User1.name);


 var users = [
    {
    name: "peter",
    email: "peter@gmail.com",
    email2: "sam@gmail.com",
    isActive: true,
    createdAt: new Date(),
    products:["iphone", "airpods", "macbook"],  
    },

    {
    name: "salman",
    email: "salman@gmail.com",
    isActive: true,
    createdAt: new Date(), 
    products:["tresemme", "beardo gel", "phillips led"],   
    },

   {
    name: "samarth",
    email: "samarth@gmail.com",
    isActive: true,
    createdAt: new Date(), 
    products:["washing machin", "vivo", "job"],  
    },
 ];

 console.log(users[0].email2[3]);
 console.log(users[0].products);
  console.log(users[0].products[2]);

//  console.log(users[users.length-1].products);

//  console.log(salmanUser.email);
 
 
// //  Que 1: add a key primeuser which is boolean in first user
// //  Que 2: Make second user inactive
// //  Que 3: add address of last user in array of users
// //  Que 4: print last product of last users
// //  Que 5: add a new user to the array of users
// //  Que 6: add a key primeuser which is boolean in first user
 
users[0].primeUser = true;

users[0]['primeUser'] = true;

// console.log(users[0]);

users[1].isActive = false;

console.log(users[1]);

users[users.length-1].address = "jqwdjqwo jdlkwjlwf";
users[users.length-1]['address'] = 'ihwndb   ndoihd2br32';

console.log(users[users.length-1]);
 
// // Q4
console.log(users[users.length-1].products[users[users.length-1].products.length-1]);
