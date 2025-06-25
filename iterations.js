// for (var i = 0;  i <= 10; i++)  {
//     console.log(i);
// }
// console.log("Complete");

// for (var i = 0; i <= 200; i++) {
//     console.log(i);

// }
// console.log("sum is : sum");

// var sum = 0;

// var limit =200;

// for (var i = 0; i <= limit; i++) {
//     sum += i;

// }
// console.log("sum is : ",sum);


// var arr1 = [22, 33, 44, 55, 33, 66, 77, 88, 99, 33, ];

// // for (var i = 0; i < arr1.length; i++) {
// //     console.log(arr1[i]);
// // }

// for (var i = 0; i < arr1.length; i++) {
//     if (arr1[i] == 33) console.log(i + 1);
    
// }

// var i = 101;

// while(i <= 100) {
//     console.log(i);
//     i++;
// }

// var i = 101;
// do {
//     console.log("print");
// } while (i <= 100);



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
    isActive: true,
    createdAt: new Date(), 
    products:["tresemme", "beardo gel", "phillips led"], 
    age: 70  
    },

   {
    name: "samarth",
    email: "samarth@gmail.com",
    isActive: true,
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
    isActive: true,
    createdAt: new Date(), 
    products:["washing machin", "vivo", "job"],  
    age: 60
    },
 ];
   
   var sum = 0;
   for (var i = 0; i < users.length; i++) {
    sum += users[i].age;
   }
      console.log("Average is : ", sum /users.length);
      

    // for (var i = 0; i < users.length; i++) {
    //     console.log("usersname : ", users[i].name);  
    //     console.log("email : ", users[i].email);
    //     // console.log("products : ", users[i].products);

    //     for(var j = 0; j < users[i].products.length; j++) {
    //         console.log("product ", j + 1, " : ", users[j]);
    //     }
        
    //     console.log("---------------\n\n");
    // }


    // users[0].products[0], users[0].products[1], users[0].products[2]
    // users[1].products[0], users[1].products[1], users[1].products[2]
    // users[2].products

// for(loopingvariable initialize; looping condition; increement/decreement) {

// }

var usersContacts = [
    {
        name: "xyz",
        contacts: [
            {
                type: "home",
                phoneNumber: "9894343242"
            },
            {
                 type: "Work",
                phoneNumber: "8867653244"
            }
        ],
    },
      {
        name: "pqr",
        contacts: [
           
            {
                 type: "Work",
                phoneNumber: "8867653244"
            }
        ],
    },
      {
        name: "abc",
        contacts: [
            
            {
                 type: "Work",
                phoneNumber: "8867653244"
            }
        ],
    },
];

for (var i = 0; i < usersContacts.length; i++) {
    var containsWork = false;

    for (var j = 0; j<usersContacts.length; j++) {
        if (usersContacts[i].contacts[j].type === "work") {
            containsWork = true;
        } 
    }
    if (containsWork) {
        console.log(usersContacts[i].name);
        // console.log(JSON.stringify(usersContacts[i].contacts));
        // console.log(JSON.stringify(workContacts));
    }
}


// they are the falsy value  
//undefined 
// 0
// false
// null
// " or "


//  End of the javascript End //////


// for(var i = 0; i <= 100; i++){
//     console.log("Value of i: ", i);

// }

// step 1 : i = 0; i <=100 -> true // print i = 0; i++;

// step 2 : i = 1; i <= 100 -> true // print i = 1; i++;

//...

// for (var i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i, " is Even");
//   } else {
//     console.log(i, " is Odd");
//   }
// }

// var i = 0;

// while(i <= 100) {
//     if (i % 2 === 0) {
//     console.log(i, " is Even");
//   } else {
//     console.log(i, " is Odd");
//   }
//   i++;
// }

// var i = 0;

// do {
//   if (i % 2 === 0) {
//     console.log(i, " is Even");
//   } else {
//     console.log(i, " is Odd");
//   }
//   i++;
// } while (i <= 100);

// var array1 = ["xyz", "abc", "pqr", "gjdgj", "sgjagj"];

// for (var i = 0; i <= array1.length - 1; i++) {

//   if (array1[i] === "pqr") {
//     console.log(`Index of ${array1[i]} is ${i}`);
//     break;
//   }
// }

// var users = [
//   {
//     id: 1,
//     name: "xyz",
//     email: "xyz@gmail.com",
//     isActive: true,
//   },
//   {
//     id: 2,
//     name: "pqr",
//     email: "pqr@gmail.com",
//     isActive: false,
//   },
//   {
//     id: 3,
//     name: "abc",
//     email: "abc@gmail.com",
//     isActive: true,
//   },
//   {
//     id: 4,
//     name: "xhjchg",
//     email: "gsjgsjg@gmail.com",
//     isActive: false,
//   },
//   {
//     id: 5,
//     name: "dhjghd",
//     email: "dgwjgj@gmail.com",
//     isActive: true,
//   },
// ];

// for(var i =0; i <= users.length - 1; i++) {
//   if(users[i].isActive) {
//     console.log(`Name : ${users[i].name}  Email : ${users[i].email}`);
//   }
// };

// var item = {
//   id: 1234,
//   name: "Shampoo",
//   cost: 300
// }

// // item.category = 'Bathing product';
// item['category'] = 'Bathing Product';

// console.log(item);

// var users = [
//   {
//     id: 1,
//     name: "xyz",
//     email: "xyz@gmail.com",
//     isActive: true,
//   },
//   {
//     id: 2,
//     name: "pqr",
//     email: "pqr@gmail.com",
//     isActive: false,
//   },
//   {
//     id: 3,
//     name: "abc",
//     email: "abc@gmail.com",
//     isActive: true,
//   },
//   {
//     id: 4,
//     name: "xhjchg",
//     email: "gsjgsjg@gmail.com",
//     isActive: false,
//   },
//   {
//     id: 5,
//     name: "dhjghd",
//     email: "dgwjgj@gmail.com",
//     isActive: true,
//   },
// ];

// // add for active user flag isDeleted : false, for inactive user isDeleted: true

// for (var i = 0; i <= users.length - 1; i++) {
//   if (users[i].isActive) {
//     users[i].isDeleted = false;
//   } else {
//     users[i]['isDeleted'] = true;
//   }
//   console.log(users[i]);
// }

// for (var i = 0; i <= users.length - 1; i++) {
//   if (users[i].isActive) {
//     users[i].isDeleted = false;
//   } else {
//     users[i]['isDeleted'] = true;
//   }
//   console.log(users[i]);
// }

// for (var i = 0; i <= users.length - 1; i++) {
//   users[i].isDeleted = !users[i].isActive;
//   console.log(users[i]);
// }

//

// var array1 = ["xyz", 45, true, "pqr", 65];

// for (var item of array1) {
//   console.log(item);
// }

// var users = [
//   {
//     id: 1,
//     name: "xyz",
//     email: "xyz@gmail.com",
//     isActive: true,
//     items: {
//       name: "Shampoo",
//       cost: 300,
//       category: "Bathing Product"
//     }
//   },
//   {
//     id: 2,
//     name: "pqr",
//     email: "pqr@gmail.com",
//     isActive: false,
//     items: {
//       name: "Detergent",
//       cost: 500,
//       category: "Washing Product"
//     }
//   },
//   {
//     id: 3,
//     name: "abc",
//     email: "abc@gmail.com",
//     isActive: true,
//     items: {
//       name: "Soap",
//       cost: 150,
//       category: "Bathing Product"
//     }
//   },
//   {
//     id: 4,
//     name: "xhjchg",
//     email: "gsjgsjg@gmail.com",
//     isActive: false,
//     items: {
//       name: "Softener",
//       cost: 700,
//       category: "Washing Product"
//     }
//   },
//   {
//     id: 5,
//     name: "dhjghd",
//     email: "dgwjgj@gmail.com",
//     isActive: true,
//     items: {
//       name: "Hair Gel",
//       cost: 1500,
//       category: "Grooming Product"
//     }
//   },
// ];

// for(var i =0; i <= users.length -1; i++){
//   if(users[i].items.category === 'Bathing Product'){
//     console.log(`User Name : ${users[i].name} and Product : ${users[i].items.name}`);

//   }
// }

// var users = [
//   {
//     id: 1,
//     name: "xyz",
//     email: "xyz@gmail.com",
//     isActive: true,
//     items: [
//       {
//         name: "Shampoo",
//         cost: 300,
//         category: "Bathing Product",
//       },
//       {
//         name: "Detergent",
//         cost: 500,
//         category: "Washing Product",
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: "pqr",
//     email: "pqr@gmail.com",
//     isActive: false,
//     items: [
//       {
//         name: "Detergent",
//         cost: 500,
//         category: "Washing Product",
//       },
//       {
//         name: "Face Wash",
//         cost: 150,
//         category: "Grooming Product",
//       },
//     ],
//   },
//   {
//     id: 3,
//     name: "abc",
//     email: "abc@gmail.com",
//     isActive: true,
//     items: [
//       {
//         name: "Soap",
//         cost: 150,
//         category: "Bathing Product",
//       },
//     ],
//   },
//   {
//     id: 4,
//     name: "xhjchg",
//     email: "gsjgsjg@gmail.com",
//     isActive: false,
//     items: [
//       {
//         name: "Softener",
//         cost: 700,
//         category: "Washing Product",
//       },
//       {
//         name: "Table Lamp",
//         cost: 4500,
//         category: "Furniture Product",
//       },
//     ],
//   },
//   {
//     id: 5,
//     name: "dhjghd",
//     email: "dgwjgj@gmail.com",
//     isActive: true,
//     items: [
//       {
//         name: "Hair Gel",
//         cost: 1500,
//         category: "Grooming Product",
//       },
//     ],
//   },
// ];

// print user name with list of items bought by user in comma seperated list

// for(var i=0; i<= users.length - 1; i++){
//   var itemsString = "";
//   for(var j=0; j<= users[i].items.length - 1; j++){         // string1 + string2 = string1string2
//     itemsString += users[i].items[j].name + ", ";         //itemString = itemString + newItem + ,
//   }
//   console.log(`User name : ${users[i].name}, items: ${itemsString}`);

// }

// var users = [
//   {
//     id: 1,
//     name: "xyz",
//     email: "xyz@gmail.com",
//     isActive: true,
//     items: [
//       {
//         name: "Shampoo",
//         cost: 300,
//         category: "Bathing Product",
//       },
//       {
//         name: "Detergent",
//         cost: 500,
//         category: "Washing Product",
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: "pqr",
//     email: "pqr@gmail.com",
//     isActive: false,
//     items: [
//       {
//         name: "Detergent",
//         cost: 500,
//         category: "Washing Product",
//       },
//       {
//         name: "Face Wash",
//         cost: 150,
//         category: "Grooming Product",
//       },
//     ],
//   },
//   {
//     id: 3,
//     name: "abc",
//     email: "abc@gmail.com",
//     isActive: true,
//     items: [
//       {
//         name: "Soap",
//         cost: 150,
//         category: "Bathing Product",
//       },
//     ],
//   },
//   {
//     id: 4,
//     name: "xhjchg",
//     email: "gsjgsjg@gmail.com",
//     isActive: false,
//     items: [
//       {
//         name: "Softener",
//         cost: 700,
//         category: "Washing Product",
//       },
//       {
//         name: "Table Lamp",
//         cost: 4500,
//         category: "Furniture Product",
//       },
//     ],
//   },
//   {
//     id: 5,
//     name: "dhjghd",
//     email: "dgwjgj@gmail.com",
//     isActive: true,
//     items: [
//       {
//         name: "Hair Gel",
//         cost: 1500,
//         category: "Grooming Product",
//       },
//     ],
//   },
// ];

// // aggregate cost of items bought by user and append this total as cartValue property in user object.

// for (var i = 0; i <= users.length - 1; i++) {
//   var cartTotal = 0;
//   for (var j = 0; j <= users[i].items.length - 1; j++) {
//     cartTotal += users[i].items[j].cost;
//   }
//   users[i].cartValue = cartTotal;
//   console.log(users[i]);
// }
