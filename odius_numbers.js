// An odious number is a non-negative number that has an odd number of 1s in its binary expansion. Print all the odious numbers from 0 to 50 inclusive, with each number on a new line.

// Example Output: 
// ```
// 1
// 2
// 4
// 7
// 8
// ...
// 50
// ```

for (let i = 0; i <= 50; i++) { if (((i >>> 0).toString(2).split('').filter(x => x == '1').length) % 2 != 0) console.log(i);}
