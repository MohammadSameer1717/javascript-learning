var user1 = {
    name: "xyz",
    email: "xyz@gmail.com",
    isActive: true,
    address: "nksnldasnak",
};

// for (let property in user1) {
//     console.log("key : ", property);
//     console.log("value :", user1[property]);
// }

var arr1 = [55, 44, 66, 34, 66];

for (let element of arr1) {
    console.log(element);
}

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

 var sum = 0;
 var isActive = 0;
 for(var i = 0; i < users.length; i++) {
    console.log(users[i].isActive); {
    sum += users[i].age;
    activeUsers += 1;
    console.log(users[i].products);
    }
 } 
 console.log("Average age of active users : ", sum / activeUsers);
 