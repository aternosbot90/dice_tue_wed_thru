// Java Script Test.

// 1. Write a for loop to print numbers from 1 to 10.
//Solution:-

// for(let a=1; a<=10; a++){
//     console.log(a);
// }

// 2. Write a for loop to print all even numbers from 2 to 20.
//Solution:-

// for(let a=2; a<=20; a++){
//     if(a%2 === 0)
//         console.log(a);     
// }

// 3. Write a for loop to print the first 5 odd numbers.
// Solution:-

// let count = 0;
// for(a=1; a<=50; a++){   
//     if( a%5 === 1){       // Ye odd numbers nahi deta, ye bas 5 se divide hone par remainder 1 wale numbers deta hai (1, 6, 11, 16…).
//         console.log(a);
//         count++;       X-wrong
//     }

//     if( count === 5){
//         break;
//     }
// }

// AI Help:- 

// let count = 0;

// for (let a = 1; ; a++) {        // infinite loop (controlled)
//     if (a % 2 !== 0) {          // odd number check
//         console.log(a);
//         count++;
//     }

//     if (count === 5) {
//         break;
//     }
// }
// odd number ke liye (! == ) kar ke batana hota hai ki odd chaiye jise even number aane per skip ho jai.


// 4. Write a while loop to print numbers from 10 down to 1.
//solution:-

// let a = 10;   
// while( a>=1 ){   //(a>=1) use isliye kiya hai. jise = se hamara jo last value hai wo bhi print ho console pai isliye lagaya hai. (>) isliye lagaya hai jise loop 1 he bada rahe jise loop 1 aane per stop ho jai. Agar ham (>) use karte tho loop - mai infinite loop ho jaati.
//     console.log(a);
//     a--;    // (a--) ka use hamne loop ko ulta chalane ke liye use kiya hai.
// }

// 5. Write a while loop to print multiples of 5 up to 50.
// Solution:-

// let a = 5;
// while( a <= 50){
//     if( a % 5 === 0)
//         console.log(a);    
//     a++;
// }

// 6. Write an if/else statement to check if a number is positive or negative.
//Solution:-

// let a = Number ( prompt ("Enter a number"));

// if (a < 0) {                   // Not done by self
//     console.log("Negative");
// } else if (a => 0) {
//     console.log("Positive");
// }

//7. Use continue in a loop to skip the number 3 when printing numbers 1 to 5.
//Solution:-

// for(let i = 1; i <=5; i++){
//     if( i === 3){
//         continue;  // “Iss iteration ka baaki code skip karo, seedha next loop pe jao”
//     }
//     console.log(i);
// }

// 8. Use break in a loop to stop when the number becomes 4.
// Solution:-

// for(let i = 1; i <= 10; i++){
// console.log(i);
// if( i === 4){
//     break;
// }
// }

// 9. Write a loop to print the sum of numbers from 1 to 10.
// Solution:-

// let sum = 0

// for( let i = 1; i <= 10; i++){
//     sum = sum + i
// }
// console.log(sum);

// 10. Write a loop that prints only numbers divisible by 3 between 1 and 20.
// Solution:-

// for(let i = 1; i <= 20; i++){
//     if( i%3 === 0){
//         console.log(i);
//     }
// }

// 11. Write a loop to print all prime numbers between 1 and 50.
// Solution:-

// with the help of AI.

// for (let num = 2; num <= 50; num++) {
//     let isPrime = true; // Assume the number is prime

//     // Check if num is divisible by any number from 2 to sqrt(num)
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             isPrime = false; // Not prime if divisible
//             break; // No need to check further
//         }                    //not by self
//     }

//     if (isPrime) {
//         console.log(num); // Print the prime number
//     }
// 

// for(let i = 2; i<=50; i++){
//     let isprime = true;
//     for(let j = 2; j<i; j++){
//         if(i%j === 0){
//             isprime = false;
//             break;
//         }
//     }
//     if(isprime){
//         console.log(i);
//     }
// }

// 12. Write a nested for loop to print a right-angle triangle pattern.
//Solution:-

// with the help of AI.

// Number of rows in the triangle
// let rows = 5;

// // Outer loop for each row
// for (let i = 1; i <= rows; i++) {
//     let pattern = ""; // Initialize empty string for each row
                        // not by slef
//     // Inner loop for columns
//     for (let j = 1; j <= i; j++) {
//         pattern += "* "; // Add asterisk and space
//     }

//     console.log(pattern); // Print the row
// }

// let num = Number(prompt("Enter a number: "))
// for(let i  = 1; i<=num; i++){
//     let row = "";
//     for(let j = 1; j<=i; j++){
//         row += "* ";
//     }
//     console.log(row);
// }


// 13. Write a loop to count how many digits are in a number.
//Solution:-

// let num = 123456789;
// let count = 0;

// while( num>0){
//     count++;
//     num = Math.floor(num/10);
// }
// console.log("Total digit are : " + count);
