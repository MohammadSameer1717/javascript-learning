var arr1 = [45, 56, 43, 20, 51, 66];
var sum = 0;

arr1.forEach(function(element, Index) {
    console.log(Index, element);
    sum += element;
});
console.log(sum);

var arr1 = [35, 56, 47, 20, 51, 55];
arr1.forEach(function(element, Index) {
    console.log(Index, element);
});



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

 users.forEach(function (item, Index) {
    if (item, isActive) {
        console.log(item);
    }
 });
users.forEach(function (item, Index) {
    if (item.age > 50) {
        item.products.forEach(function (product, Index) {
            console.log(product);
        });
    }
});

users.forEach(function(item, Index) {
    item.contact = Math.floor(Math.random() *100000000000);
    console.log(item);
    
});