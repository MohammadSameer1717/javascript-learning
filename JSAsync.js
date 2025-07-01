// let user  = {
//     id: 2,
//     name: "pop",
//     email: "pop@gmail.com",
//     isActive: false,
// };

// setTimeout(() => {
//     user.isActive = true;
//     console.log("test inside");

//     if (user.isActive) {
//     console.log(user.name);
    
// }
// }, 3000);

// console.log("test outside");

// if (user.isActive) {
//     console.log(user.name);
// }



// // promises
// let user = {
//     id: 2,
//     name: "pop",
//     email: "pop@gmail.com",
//     isActive: false,
// };

// const wait = (num) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             user.isActive = true;
//             resolve();
//         }, num);
//     });
// };

// // This is the correct structure
// async function main() {
//     await wait(3000); 
//     if (user.isActive) {
//         console.log(user.name); 
//     }
// }
// main();
// // this is a correct structures( callback hell swichtion )
// const fetchUser = () => {
//     return {
//         id: 2,
//         name: "push",
//     };
// };
// const  userProducts = (userId) => {

// }
// const fetchUserDetails = () => {
//     fetchUser((userId) => {
//         const products = userProducts(userId, (productsId) =>{
//             const category = productscategory(productsId)
//         });
//     });
// };

// let user  = {
//     id: 2,
//     name: "pop",
//     email: "pop@gmail.com",
//     isActive: false,
// };

// const wait = (num) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             user.isActive = true;
//             resolve();
//         }, num);
//     });
// };
// const checkUser = async () => {
//     console.log("first");

//     await wait(3000);
//     if (user.isActive) {
//     }
//     console.log("second");
// };
// checkUser();



// one of the best topic in js
let posts = [];
 fetch ('https://jsonplaceholder.typicode.com/posts')
 .then((res) => res.json())
 .then((data) => {
    posts = [...data];
    console.log(posts);
});
 
const fetchposts = async () => {
    const response = await  fetch ('https://jsonplaceholder.typicode.com/posts');
    posts = await response.json();
    console.log(posts);
};
fetchposts();