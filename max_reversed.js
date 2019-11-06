var maxReversed = function(num1, num2) {
    let rev1 = (num1 < 0) ? '-' + num1.toString().split('').reverse().join('').substring(0, num1.toString().length-1) : num1.toString().split('').reverse().join('');
    let rev2 = (num2 < 0) ? '-' + num2.toString().split('').reverse().join('').substring(0, num2.toString().length-1) : num2.toString().split('').reverse().join('');
    return (parseFloat(rev1) > parseFloat(rev2)) ? rev1 : rev2;
}
