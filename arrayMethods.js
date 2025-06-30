// var arr1 = [45, 56, 43, 20, 51, 66];
// var sum = 0;

const { use } = require("react");

// arr1.forEach(function(element, Index) {
//     console.log(Index, element);
//     sum += element;
// });
// console.log(sum);

// var arr1 = [35, 56, 47, 20, 51, 55];
// arr1.forEach(function(element, Index) {
//     console.log(Index, element);
// });



//  var users = [
//     {
//     name: "peter",
//     email: "peter@gmail.com",
//     email2: "sam@gmail.com",
//     isActive: true,
//     createdAt: new Date(),
//     products:["iphone", "airpods", "macbook"],  
//     age: 56
//     },

//     {
//     name: "salman",
//     email: "salman@gmail.com",
//     isActive: false,
//     createdAt: new Date(), 
//     products:["tresemme", "beardo gel", "phillips led"], 
//     age: 70  
//     },

//    {
//     name: "samarth",
//     email: "samarth@gmail.com",
//     isActive: false,
//     createdAt: new Date(), 
//     products:["washing machin", "vivo", "job"],  
//     age: 30
//     },
//       {
//     name: "terenaam",
//     email: "terenaam@gmail.com",
//     isActive: true,
//     createdAt: new Date(), 
//     products:["washing machin", "vivo", "job"],  
//     age: 40
//     },
//       {
//     name: "goti",
//     email: "goti@gmail.com",
//     isActive: false,
//     createdAt: new Date(), 
//     products:["washing machin", "vivo", "job"],  
//     age: 60
//     },
//  ];

//  users.forEach(function (item, Index) {
//     if (item, isActive) {
//         console.log(item);
//     }
//  });
// users.forEach(function (item, Index) {
//     if (item.age > 50) {
//         item.products.forEach(function (product, Index) {
//             console.log(product);
//         });
//     }
// });

// users.forEach(function(item, Index) {
//     item.contact = Math.floor(Math.random() *100000000000);
//     console.log(item);
    
// });
// // start new session ....
 
// var arr1 = [34, 43, 54, 65, 76, 87, 98];

// console.log(arr1.length);
// arr1.push(54);
// console.log(arr1);

// var removed = arr1.pop();
// console.log(removed);

// console.log(arr1);

// arr1.unshift(45,56);
// console.log(arr1);
// arr1.shift();
// console.log(arr1);

// var arr1 = [34, 43, 54, 65, 76, 87, 98];
// arr1.splice(2, 2);
// console.log(arr1);


// var numArr = [56,71,53,84,96]
// // [56, "even", 71, "odd", 53, "even", 84, "odd", 96, "even"];
// var newaRR = [];
// numArr.forEach(function(item, Index) {
//     if (item % 2 === 0) {
//         newaRR.push(item, "even");
//     } else {
//         newaRR.push(item, "odd");
//     }
// });
// console.log(newaRR);

//  var users = [
//     {
//     name: "peter",
//     email: "peter@gmail.com",
//     email2: "sam@gmail.com",
//     isActive: true,
//     createdAt: new Date(),
//     products:["iphone", "airpods", "macbook"],  
//     age: 56
//     },

//     {
//     name: "salman",
//     email: "salman@gmail.com",
//     isActive: false,
//     createdAt: new Date(), 
//     products:["tresemme", "beardo gel", "phillips led"], 
//     age: 70  
//     },

//    {
//     name: "samarth",
//     email: "samarth@gmail.com",
//     isActive: false,
//     createdAt: new Date(), 
//     products:["washing machin", "vivo", "job"],  
//     age: 30
//     },
//       {
//     name: "terenaam",
//     email: "terenaam@gmail.com",
//     isActive: true,
//     createdAt: new Date(), 
//     products:["washing machin", "vivo", "job"],  
//     age: 40
//     },
//       {
//     name: "goti",
//     email: "goti@gmail.com",
//     isActive: false,
//     createdAt: new Date(), 
//     products:["washing machin", "vivo", "job"],  
//     age: 60
//     },
//  ];

//  var newUsers = [];
//  users.forEach(function(item, Index) {
//     if (item.age > 45) {
//         newUsers.push(item);
//     } else {
//         newUsers.unshift(item);
//     }
//  });
//  console.log(newUsers);
 
// var numArr = [56,71,53,84,96,77,55,99,20];
// // var newArr = numArr.slice(2);
// var newArr = numArr.slice(2,6);
// console.log(newArr);


// var numArr = [56,71,53,84,96,77,55,99,20];
// var newArr = numArr.map (function(item, Index) {
//     return item * 2;
// });

// console.log(newArr);
// var newArr = numArr.filter(function(item, Index) {
//     if (item % 2 !=0) {
//         return true;
//     } else {
//         return false;
//     }
// });
// console.log(newArr);


//  var users = [
//     {
//     name: "peter",
//     email: "peter@gmail.com",
//     email2: "sam@gmail.com",
//     isActive: true,
//     createdAt: new Date(),
//     products:["iphone", "airpods", "macbook"],  
//     age: 56
//     },

//     {
//     name: "salman",
//     email: "salman@gmail.com",
//     isActive: false,
//     createdAt: new Date(), 
//     products:["tresemme", "beardo gel", "phillips led"], 
//     age: 70  
//     },

//    {
//     name: "samarth",
//     email: "samarth@gmail.com",
//     isActive: false,
//     createdAt: new Date(), 
//     products:["washing machin", "vivo", "job"],  
//     age: 30
//     },
//       {
//     name: "terenaam",
//     email: "terenaam@gmail.com",
//     isActive: true,
//     createdAt: new Date(), 
//     products:["washing machin", "vivo", "job"],  
//     age: 40
//     },
//       {
//     name: "goti",
//     email: "goti@gmail.com",
//     isActive: false,
//     createdAt: new Date(), 
//     products:["washing machin", "vivo", "job"],  
//     age: 60
//     },
//  ];

//  var element = users.find(function(item,Index) {
//     if (item.email === "samarth@gmail.com") {
//         return true;
//     }
//  });
//  console.log(element);
// console.log(element.name);

//  var elementIndex = users.findIndex(function(item,Index) {
//     if (item.email === "samarth@gmail.com") {
//         return true;
//     }
//  });
//  console.log(elementIndex);
 

  var users = [
    {
    name: "peter",
    email: "peter@gmail.com",
    email2: "sam@gmail.com",
    isActive: true,
    createdAt: new Date(),
    products:["iphone", "airpods", "macbook"],  
    age: 56
    },

    {
    name: "salman",
    email: "salman@gmail.com",
    isActive: false,
    createdAt: new Date(), 
    products:["tresemme", "beardo gel", "phillips led"], 
    age: 70  
    },

   {
    name: "samarth",
    email: "samarth@gmail.com",
    isActive: false,
    createdAt: new Date(), 
    products:["washing machin", "vivo", "job"],  
    age: 30
    },
      {
    name: "terenaam",
    email: "terenaam@gmail.com",
    isActive: true,
    createdAt: new Date(), 
    products:["washing machin", "vivo", "job"],  
    age: 40
    },
      {
    name: "goti",
    email: "goti@gmail.com",
    isActive: false,
    createdAt: new Date(), 
    products:["washing machin", "vivo", "job"],  
    age: 60
    },
 ];

var checkActive = users.some(function(item,Index) {
    return item.isActive;
});

 var check = users.every(function (item, Index) {
    return item.isActive ;
 });
 console.log(checkActive);
 console.log(check);
 
 var roles = ["admin", "employee", "superAdmin"];
 console.log(roles.includes("user"));

 
const arr1 = [23,45,56,76,88];
const arr2 = ['xyz', 'abc', 'pqr'];
const arr4 = [45,86, false, new Date()];
const arr3 = arr1.concat(arr2, arr4);

// console.log(arr3);

arr2.sort();
console.log(arr2);

const arrNum = [45,16,23,74,10,8,96];
arrNum.sort(function(a, b) {
  return a - b;
})
console.log(arrNum);

const user = {
  id: 101,
  name: "peter",
  address: "nwknjskmlcsc",
  password: "12432422",
  email: "peter@gmail.com",
  isActive: true,
};

const user1 = {
  id:2,
  name: "samarth",
  address: "dkncjwkcodqpqklo",
    password: "989432422",
  email: "samarth@gmail.com",
   isActive: false,
}

console.log(user1);
console.log(user);

// REST OPERATOR and 

let user = {
  id: 191,
  name: "salman",
  address: "nwknjskmlcsc",
  password: "12432422",
  email: "peter@gmail.com",
  isActive: true,
  products: ["products1", "products2", "products3"],
};

let { id, name, email, isActive } = user;
id: 55;
console.log(id);
console.log(user);


let user = {
  id: 191,
  name: "salman",
  address: "nwknjskmlcsc",
  password: "12432422",
  email: "peter@gmail.com",
  isActive: true,
  products: ["products1", "products2", "products3"],
  class: {
    id: 17,
    className: "B.tech",
    year: 2024,
  },
};

 let { products, email, ...userObj } = user;
 console.log(products);
 console.log(email)
 console.log(userObj);



 const { className, year } = user.class;
 console.log(className);

 const { class: { className, year} } = user;
 console.log(className);


const { class: classObj, ... userObj} = user;
console.log(classObj);
console.log(userObj);





 


