// var a; // declare ya phir declaration 

// a = 10;// initialize ya phir initialization

// var a = 10; //declaration and initialization

// let a;
// a = 10;

// const b = 10;

// var a = 20;

//Scope:-

//global scope //functional scope //block scope


// var a = 10; //global scope hai

// {

    // let c = 30;
//     var b = 20;//global
    
    
// }

// let c = 90;
// console.log("value of c " + c);

// function abc(){
//   if(true){
//     var c = 20;
//     let d =20
//   }
//   console.log(c)
//   console.log(d)
// }

//  abc();

// var a; //declare
// a = 10; //initialize

// var a = 20;// global scope //declare and initialize
// let b = 20;// functional scope
// const c = 20; //block scope
// // let b = 10;
// // b = 20; //reinitialize

// var a = 30;
// b = 40;

//scope (global,functional,block)

// let a = 10;
// //() paranthesis

// {
//   var b = 20;  //global
//   console.log(b);
// }
// console.log(a);

// var is global even in block scope. 
// let is block in the block scope.
// const is block in the block scope.

//Reinitialize reDeclaration

// var a = 10;
// a = 20; //reinitialize
// var a = 30; //redeclare 

// let b = 10;
// b = 20; //reinitialize
// // let b = 30; // X it cannot be redeclared

// const c = 10;
//c = 20; // X it cannot be reinitialized or redeclared

//tdz(temporal dead zone)
// utna area jaha tak ham apne variable to access nahi kar sakte usse ham temporal dead zone kahate ha

// let d = 20;
// console.log(d);

// console.log(e);
// var e = 20;

//hoisting
//jab ham variable ko banate ha to uska initialize part upar chala jata ha or declare part niche.

// console.log(b);
// var b = 10; // its hoist

// console.log(a);

// let a  = 10; // its not hoist 


// var x = 1;

// {
//   var x = 2;
// }

// console.log(x);


//Data types 

//primitive (ki yaha real copy banti ha)

// let a = 10; //number
// let b = "hello"; //string
// let c = true; //boolean t&f
// let d = null; //null
// let e  //undefined
// BigInt // 78n
// Symbol// symbol for unique id


// let a = 9007199254740991n;
// a = a + 6n
// console.log(a);

// symbol make unqiue id

// var uid = Symbol("uid")
// var uid2 = Symbol("uid")

//two types of equality

//1. == (it only check the values)
//2. === (strict equality check both value and data type)

// let a = "10"; 
// let b = 10;

//refrence (real copy nahi banti yaha refrence banta hai)
// array , objects , function.
//  []    ,  {}      ,  ()

// let a = [1,23,45,50];
// let b = a;

// b.pop()

// let a = 20
// let b = a;
// b = b + 10;

// console.log(a);
// console.log(b);

// let a = 12;
// a -= 11;//it means subtarct 11 in the value ofa=4 
// a += 3; //it means add 3 in the value of a = 15
// a /= 2;//it means divide the value of a=4 with 2
// a *= 2;//it means multiply 2 in the value of a=8
// a %= 3;//it means modulas the value of a=0 with 2

//  console.log(a);


 //logical
 //&&, ||, !

 //&&(and operator)
 
   //true && true = true
   //true && false = false
   //false && true = false
   //false && false = false

//     let a = 10;
//     let b = 20;
//     let c = 30;

//     if(a<b && a<c){
//         console.log("a is smaller");
//     }

//  //|| (or operator)
   
//     //true || false = true
//     //false || true = true
//     //false || false = false
//     //true || true = true

//     let d = 10;
//     let e = 20;
//     let f = 30;

//     if(d<e || d>f){
//         console.log("d is greater");
//     }

// // ! (not operator)

//  let g = 10;
//  let h = 20;

//  if(!(g>h)){
//   console.log("g is small");
//  }
 

// unary operator

// + - type of -- ++

// ++ increment[post,pre]

// let a = 10;
// let c = 10;
// let sum = ++a + c;

// a++ //post increment
// ++a //pre increment

// console.log(sum);


// //-- decrement[post,pre]

// let b = 20;
// let d = 10;
// let sub = --b -d;
// b--;//post decrement
// --b;//pre decrement
// console.log(sub);


//Ternary operator
// ? :
// let i = 10;
// let j = 20;
// let l = 30;

// let k = i > j && i > l ? "i is greater":l>i && l>j ? "l is greater" :j > i || j > l ? "j is greater" : "none"
// console.log(k);

// let score = 55;
// let grade = score >= 90 ? "A" : score >= 75 ? "B" : score >= 60 ? "C" : "F"
// console.log(grade);


// let a = 20;
// let b = 20;

// if(a>b){
//   console.log("a is greater");
// }

// else if(a == b){
//   console.log("a is equal to b");
// }

// else{
//   console.log("b is greater");
// }

// let a =Number(prompt("Enter number a"));
// let b =Number(prompt("Enter number b"));
// let c =Number(prompt("Enter number c"));

// if(a>b && a>c){
//   console.log("a is greater then b and c");
// }

// else if(b>a && b>c){
//   console.log("b is greater then a and c");
// }

// else{
//   console.log("c is greater than b and a");
// }

// console.log(typeof(a));

//Questions

//#1
  //  let x = 10;
  //  let y =20;

  //  if(x>5 && y<25){
  //   console.log("A");
  //  }
  //  else{
  //   console.log("B");
  //  }

//#2
  // let isAdmin = true;
  // let isLoggedIn = false;

  // if(isAdmin || isLoggedIn){
  //   console.log("Access granted");
  // }
  // else{
  //   console.log("Access denied");
  // }

//#3
  //  let temp = 35;
   
  //  if(!(temp<40)){
  //   console.log("hot");
  //  }
  //  else{
  //   console.log("cold");
  //  }

//#4
  //  let a = 0;
  //  if(a){
  //   console.log("truthy");
  //  } 

  //  else{
  //   console.log("falsy");
  //  }

  //#5 
  
  // let points = 100;

  // let stat = points>=100? "Gold" : points>50?"silver" :"bronze"
  // console.log(stat);

//#6
//   let x = 3;
//   let y = x++;

//   console.log("x is : "+x,"y is : "+y);

  //#7

  // let p = 4;
  // let q = ++p;

  // console.log("p is : "+p,"q is : "+q);
  
  // //#8
  //  let m = 10
  //  console.log(m--);
  //  console.log(m);
  //  console.log(m);

//#9
 
// let n = 5;

// let result = n++ + ++n;  //first in n++ the value wil go 5 and after that the value of n is no increased to 6 and in ++n it will get he new value of n that is 6 and it will pre increse it to 7 so the sum is 5 + 7 =12

// console.log(result);

//#10
  // let count  = 5;
  // if(count-- === 5){

  //   console.log("count is 5");
  // }
  //  else{
  //   console.log("count is not 5");
  //  }
   

//#SWITCH CASE

// let val = prompt("enter a value");

// switch(val){
//   case "one":
//     console.log("one is selected");
//     break;
//   case "two":
//     console.log("two");
//     break;
//   case "three":
//     console.log("three");
//     break;
//   default:
//     console.log("enter a valid value");
//     break;
// }


//#loops

//1. for loop 2. while loop 3. do while loop

//1. for loop:-
  //  kaha se jana hai ---> kab tak jana hai ---> kaise jana hai

  // 2 while loop:-
   // kaha se jana hai ---> kab rukna hai  ---> kaise jana hai

// for loop
// let m = 5
// let n = 10
//    for(let i = m; i<=n; i++){
//      console.log(i);
//    }
// //while loop
//    let j = 0;
//    while(j<10){
//      console.log(j);
//      ++j;
//    }

// //do while  loop
//    let k = 0;
//    do{
//      console.log(k);
//      ++k;
//    }
//    while(k<10);

// for(let i = 1; i<=50; i++){
//   if(i%6===0){
//     console.log(i);
//   }
// }

// for(let i = 10; i>=1; i--){
//   console.log(i);
// }

// for(let i =1; i<=13; i++){
//   console.log(i);
//   if(i === 3){
//     break;
//   }
// }


// let sum = 0;
// for(let i = 1; i<=100; i++){
//   sum = sum + i
// }
// console.log(sum);


// print number form 1 to 10 using for loop;

// for(let i = 1; i<=10; i++){
//   console.log(i);
// }

//print even number form 1 to 20 using for loop

// for(let j = 1; j<=20; j++){
//   if(j%2 === 0){
//     console.log(j);
//   }
// }

//print odd number from 1 to 15 using while loop

// let k = 1;
// while(k<=15){
//   if(k%2 === 1){
//     console.log(k);
//   }
//   k++;
// }

//print number form 1 to 100 that are divisible b y 3 and 5

// for(let i  =1; i<=100; i++){
//   if(i%3 === 0 && i%5 === 0){
//     console.log(i);
//   }
// }
 
// for(let i = 1; i<=100; i++){
//   console.log(i);

//   if(i%7 === 0){
//     break;
//   }
// }

//print first 5 odd number from 1 to 100;

// let count = 0;
// for(let i = 1; i<=100; i++){
//   if(i%2 === 1){
//     console.log(i);
//     count++;
//   }

//   if(count === 5){
//     break;
//   }
// }

// let num = 876643;
// let count = 0;

//   while(num>0){
//     count++;
//     num = Math.floor(num/10);
//   }

// console.log("total digits are: "+count);

//#functions:-

// function num(){
//   for(let i = 1; i<=10; i++){
//   console.log(i);
//  }
// }

//[Function] [write name] (paranthesis){
     //code
//}
//[write name ()]

// function num(){
//   console.log("hello world")
// }

//three type:-

// function abcd(){
//   console.log("hello world")  // function statement
// }

// let sum = function(){
//   console.log("hello num ") // function expression
// }

// let num2 = () =>{
// console.log("hello num2") // fat arrow function
// }

// num2();
// abcd();
// num();

// function dance(val){
//   console.log(`hello ${val}` )
// }

// dance("world");
// dance("dance");
// dance("duniya");


// parameter vo ha jo ham function ke paranthesis me variable dalte ha.

//argument vo ha jo ham function ke call me variable ki valute ko pass karte hai.


// function sum(v1,v2){
//   console.log("sum is : "+(v1+v2));
// }
// sum(10,20);

// default rest

// function sum(v1 = 0,v2 = 0){  // default values
//       console.log(v1+v2);
// }

// sum(10,15);

// // rest
// function num(v1,v2,...args){
// console.log(v1);
// console.log(v2);
// console.log(args);
// }

// num(10,20,30,40,50);

//return 

// function sum(v1){
//   return 30+v1;
// }

// let result = sum(10);
// console.log(result);

//first class function
//function ko ham value ki tarah treat kar sakte hai
// function abcd(val){
//   val();
// }

// abcd(function(){
//   console.log("hey");
// })

//where a number can be stored in a variable a function can aslo be stored


//HOF[Higher Order Function]
//hof(higher order function) wo function ha jo ki return kare ek function ko ya accept kare function apne parameter mein.

// function abcd(val){
//  val();
// }

// abcd(function(){          //parameter 
//   console.log("hello");
// })


// function num(){
//   return function(){
//     console.log("hey");
//   }
// }

// let n = num();
// n();

// function dance(){
//   return 10;
// }

// let d = dance();

// console.log(d);

// let n = Number(prompt("enter a number"))
// for(let i = 1; i<=n; i++){
//   let row = "";
//     for(let j = 1; j<=i; j++){
//         row += "* " 
//     }
//     console.log(row)
// }

//pure function

// let num = 10;
// function abcd(){
//   console.log("number" + num);
// }

// function inc(){
//   num++;
// }

// abcd();
// inc();

// console.log(num);

//impure function


//closures:- ek fnc jo return kare ek or fnc aur return hone waala function humesha use karega parent fnc ka koi variable

// function abcd(){
//   let a = 10
//   return function(){
//     console.log(a);
//   }
// }

// let n = abcd();
// n();

//lexical scoping:- lexical scoping ka matlab hai ki variable ki accessibilty ya scope uss jagah par depend karti hai jahan wo code likha gaya hai, na ki jahan wo execute ho raha hai

// function abc(){
//   let a =12;
//   function def(){
//     let b = 13;
//     function ghi(){
//       let c = 14;
//       console.log(a,b,c);
//     }
//     ghi()
//   }
//   def()
// }
// abc()

//IIFE (immediate invoked function expression)

// (function(){
//   console.log("iife");
// })();

// (function(){
//   console.log("iife");
// })()


//Hoisting difference b/w delaration and expression
// abc();
// function abc(){         //function statement
//   console.log("abc");       //hoist
// }

// def();
// let def = function(){    //function expression
//   console.log("def");        // not hoist
// }

//#que-1
  // geet();
  // function geet(){
  //   console.log("geet");
  // }

 //#que-2
 //convert this into a fat arrow function
//  function multiply(a,b){
//   return a*b;
//  }

//  let num = (a,b) => {
//   return a*b;
//  }

// let result =  num(5,6)
// console.log(result)

// function welcome(name){
//   console.log(name);
// }

// welcome("geet");

// function  num(...a){
//   console.log(a);
// }
// num(1,2,3,4,5,6,7,8)

// function getScore(...score){
//   let total = 0;
//   score.forEach((val)=>{
//     total = total+val
//   })
//   return total
// }
// let result = getScore(10,20,30,40,50,60,70,80,90,100);
// console.log(result);

// function checkage(age){
//   if(age>=18){
//     console.log("adult");
    
//   }else{
//     console.log("minor");
//   }
// }

// function age(age){
//   if(age>=18) return "adult";

//   return "minor";
// }

//

// function multiply(a,b,multiply){
//   return a*b*multiply;
// }

// let result = multiply(2,3,4)
// console.log(result)

// let sum =30;

// function calculateAverage(numbers) {
//     if (numbers.length === 0) return 0;

//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }

//     return sum / numbers.length;
// }

// // Usage
// const values = [10, 20, 30, 40, 50];
// const average = calculateAverage(values);
// console.log(average); // Output: 30


// let sum = 0;
// function avg(...val){
//   val.forEach((val)=>{
//     sum+=val;
//   })
//   return sum/val.length
// }

// let average = avg(10,20,30,40,50);
// console.log(average);


// function bmi(weight,height){
//   return weight/(height*height)
// }

// let cal = bmi(70,1.75)
// console.log(cal.toFixed(2))

// function discountCalculator(discount){
//   return function(price){
//     return price-price*discount/100
//   }
// }

// let discounter = discountCalculator(10);
// console.log(discounter(100));

// let discounter2 = discountCalculator(20);
// console.log(discounter2(100));


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

// let n = 5;
// for(let i = n; i>=1; i--){
//      let row = "";
//      for(let j = 1; j<=i; j++){
//       row+="* ";
//      }

//      console.log(row);
// }


// Array

// let arr = [5,10,20,13,12,"hello",90]
// arr[5] = 87
// console.log(arr[5]);


// Array methods:- push,pop,shift,unshift,splice,slice,reverse,sort

// //1.push
// let arr = [1,3,4,5,6]
// arr.push(10,12,34)
// console.log(arr);

// //2.pop
// let arr2 = [1,3,4,5,6]
// arr2.pop()
// console.log(arr2);

// //3.shift
// let arr3 = [1,3,4,5,6]
// arr3.shift()
// console.log(arr3);

// //4.unshift
// let arr4 = [1,3,4,5,6]
// arr4.unshift(10,12,45)
// console.log(arr4);

// //5.splice
// let arr5 = [1,3,4,5,6]
// arr5.splice(3,0,10,11)
// console.log(arr5);

// //now in splice the number will be removed in the array where in .splice(2,1) the 2 indicates from which index and the 1 indicates how many number to remove from the index 2 and forward

// //if we write (2,2) then i would have removed the 4 and 5 number in array

// //6.slice
// let arr6 = [1,3,4,5,6]
// let arr7 = arr6.slice(1,4)
// console.log(arr6);
// console.log(arr7);

// // so in this it will take form 1 index and the 4 indicates the number of array to be in it we will take one less from unit which means 3 so the output we will get is [3,4,5]

//7.reverse
// let arr8 = [1,3,4,5,6]
// arr8.reverse()
// console.log(arr8);

// //8.sort

// let arr9 = [18,13,24,54,16]
// arr9.sort(function(a,b){
//   return b-a   //descending
//   return a-b  //ascending
// })
// console.log(arr9);

// let arr10 = ["ziya","kiri","queen","alice","giuvana"]
// arr10.sort().reverse()
// console.log(arr10);

// //9.Map

// let arr11 = [1,2,3,4,5]
// // arr11.forEach(function(val){
// //   console.log(val*5);
// // })

// let arr12 = arr11.map(function(val){
//   if(val%2===0){
//     return val;
//   }
//   else{
//     return "odd number " + val
//   }
// })

// console.log(arr12);

// //10.filter

// let arr13 = [18,13,24,54,16];
// let arr14 = arr13.filter(function(val){
//         if(val%2===0){
//           return true
//         }
// })

// console.log(arr14);

// //11.reduce
// let arr15 = [18,13,24,54,16];

// let arr16 = arr15.reduce(function(acc,val){
//   return acc+val;
// },0)

// console.log(arr16);

// //12.find

// let arr17 = [18,13,24,54,16]
// let arr18 = arr17.find(function(val){
//      return val === 18
// })

// console.log(arr18);

// //13.some

// let arr19 = [18,13,24,54,16]
// let some = arr19.some(function(val){
//       return val>50
// })

// console.log(some);

// //14.every

// let arr20 = [18,13,24,54,16]
// let every = arr20.every(function(val){
//   return val>10
// })

// console.log(every);

// //Destructing, spread operator

// let arr = [1,2,3,4,5];
// let [a,b,,c,...rest] = arr  //destructuring
// console.log(a,b); 
// console.log(a,b,c,rest);

// let arr2 = [18,13,24,54,16];
// let arr3 = [...arr2] //spread operator
// arr3.pop()
// console.log(arr3);
// console.log(arr2);


// let color = ["green","yellow"]
// color.splice(1,0,"red","blue")
// console.log(color);

//objects:-

// let user = {
//   Name: "kunal",
//   Age: 25,
//   country: "India",
//   location: {
//      city: "delhi",
//      pincode: 110001
//   }
// }

// console.log(user.location.city);
// console.log(user.location.pincode);

//destructure obj
// let user = {
//   Name: "kunal",
//   Age: 25,
//   country: "India",
//   location: {
//     city: "delhi",
//     pincode: 110001,
//     lat: 28.7041,
//     lng: 77.1025
//   }
// }

// let {lat, lng} = user.location;

// console.log(lat.toFixed(2));
// console.log(lng.toFixed(2));

//for in loop
// let obj = {
//   name: "kunal",
//   age: 25,
//   city: "delhi",
//   pincode: 110001,
// }

// for(let tey1 in obj){
//   console.log(tey1+" : "+obj[tey1]);
// }

// let obj = {
//   name: "kunal",
//   age: 25,
//   city: "delhi",
//   pincode: 110001,
// }

// //keys
// let key = Object.keys(obj)
// console.log(key);

// //values
// let value = Object.values(obj)
// console.log(value);

// //entries
// let entries = Object.entries(obj)
// console.log(entries);
// console.log(entries[0][1]);

// //spread operator
// let obj = {
//   name: "kunal",
//   age: 25,
//   city: "delhi",
//   pincode: 110001,
// }

// let obj2 = {...obj}

// obj2.name = 'udey'
// console.log(obj2);
// console.log(obj);

// //assign
// let obj = {
//   name: "kunal",
//   age: 25,
//   city: "delhi",
//   pincode: 110001,
// }

// let obj2 = Object.assign({country:'india',email: "kunal@gmail.com"}, obj)

// console.log(obj2);
// console.log(obj);


//deep clone
// let obj = {
//   name: "kunal",
//   age: 25,
//   city: "delhi",
//   pincode: 110001,
//   location:{
//     lat: 28.7041,
//     lng: 77.1025,
//     address:{
//       street: "123 main st",
//       city: "delhi",
//       state: "delhi",
//       country: "india"
//     }
//   }
// }

// let obj2 = JSON.parse(JSON.stringify(obj));

// obj2.location.lat = 29.00
// obj2.location.address.street = "456 main st"
// console.log(obj2.location.address.street);
// console.log(obj.location.address.street);
