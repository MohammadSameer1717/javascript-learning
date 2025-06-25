// // conditional One
// var num1 = 56;

// if ((num1 % 2) == 0) {
//     console.log("Number is even");
// }
// else {
//     console.log("Number is odd");
// }


// // this are  the Nessted contion follow
// var side1 = 45;
// var side2 = 55;
// var side3 = 65

// if (side1 + side2 > side3 || side2 + side3 > side1 || side1 + side3 > side2) {
//     console.log("triangle is valid");

//     if (side1 == side2 == side3) {
//         console.log("Equilateral triangle");
//     } else if (side1 == side2 || side2 == side3 == side1) {
//         console.log("Isosceles triangle");
//     }
//     else {
//         console.log("Scalene triangle");
//     }

// }
//     else {
//             console.log("Triangle is not valid");
            
//     }


var today = new Date("2025-6-25").getDay();
console.log(today);

 switch (today) {
    case 0: {
        console.log("sunday");
        break;
    }
    case 1: {
        console.log("monday");
    }
    break;
    case 2: {
        console.log("Tuesday");
    }
    break;
    case 3: {
        console.log("Wenesday"); 
    }
    break;
    case 4: {
        console.log("thuesday");
    }
    break;
    case 5: {
        console.log("saturday");
    }
    break;

 }
