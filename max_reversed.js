// 5. Reversed Numbers
// Given two numbers, return the maximum of the reverse of those numbers. Numbers may positive or negative, and may have a decimal point.

// Example Input:
// ```
// 133 978
// 14.7 81.2
// -210 -121
// ```

// Example Output:
// ```
// 879
// 7.41
// -012
// ```

var maxReversed = function(num1, num2) {
    let rev1 = (num1 < 0) ? '-' + num1.toString().split('').reverse().join('').substring(0, num1.toString().length-1) : num1.toString().split('').reverse().join('');
    let rev2 = (num2 < 0) ? '-' + num2.toString().split('').reverse().join('').substring(0, num2.toString().length-1) : num2.toString().split('').reverse().join('');
    return (parseFloat(rev1) > parseFloat(rev2)) ? rev1 : rev2;
}

// Test Code
let test = maxReversed(14.7, 81.2);
console.log(test); 