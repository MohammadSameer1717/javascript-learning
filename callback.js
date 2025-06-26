function display(param) {
    console.log(param);
    
}

function calculateSum(num1, num2, displaySum) {
    var sum = num1 + num2;
    displaySum(sum); //display(sum)
}
// calculateSum(6, 5, display)

function calculateSum(num1, num2, displaySum) {
    var sum = num1 + num2;
    displaySum(sum);
}
calculateSum(6,5,function(param) {
    console.log(param);
    
})

function calculateSum() {
    var sum = 0;
    setTimeout(function() {
        sum = 3 + 4 + 5;
        console.log(sum);
        
    }, 3000);
}