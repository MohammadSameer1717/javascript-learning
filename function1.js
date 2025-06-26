function func1 (num1, num2) {
    console.log(num1 + num2);
}
func1(5, 6);//calling

// create function with three arguments num1, num2, method, based on method name function should perform
// addition, subtraction, multiplication, division of num1 and num2 using switch.

function calculate(num1, num2, method) {
    switch (method) {
        case "addition": {
            console.log(num1 +num2);
            break;
        }
        case "subtraction": {
            console.log(num1 - num2);
            break;
        }
        case "multiplecation": {
            console.log(num1 * num2);
            break
        }
        case "division": {
            console.log(num1 / num2);
            break
        }
        default: {
            console.log("provide proper arthematic operation name.");
        }
    }
}

calculate(45, 20, 'addition');
calculate(45, 20, 'subtraction');
calculate(45, 20, 'multiplecation');
calculate(45, 20, 'division');
calculate(45, 20, 'xyz');

function areaTrinangle(side1, side2, side3) {
    if (side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2) {
        var s = (side1 + side2 + side3) / 2;
        var area = Math.sqrt(s * (s-side1) * (s-side2) * (s-side3));
        return area 
       } else {
        console.log("Triangle is not valid");
        return 0;
    }
}

var printArea = areaTrinangle(5,6,6);
console.log("'area of triangle :", printArea);

var numArr = [25,36,85,49,89];
function findMaxMin(arr) {
    var max = Math. max (...arr);
    var min = Math. min (...arr);
 
    console.log("Maximum :", max);
    console.log("Minimim :", min);
        
}
findMaxMin(numArr);
