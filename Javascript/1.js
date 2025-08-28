// knowing let, const , var
const accountId = 122345
let accountEmail = "swati@google.com"
var accountPassword = "1458"
accountCity = "goa"
// accountId =2 ---not possible
console.log(accountId);
// changing values is possible fo var and let
accountEmail = "hgjfutfhk@1234"
accountPassword = "46758"
console.table([accountEmail, accountId, accountPassword, accountCity])
// prefer not to use var because of issues in block scope and functional scope.


//Datatypes and ECMA standards
"use strict"; // treat all js code as newer version
// alert (3+3) we are using nodejs, not browser

let name = "swati"
let age = 18
//  let isLoggedIn = false

// number => 2 to power 53
//bigint
//dtring => ""
//boolean => true/false
//  null=> standalone value 
// undefined
// symbol=> unique

//object

console.log(typeof "swati");
console.log(typeof null);// object

// datatype conversion  confusion
// "33"- 33
// "33abc" - NaN
// true=1; false=0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
//""-false

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

//operations
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

// // to sum up 
// primitive datatypes
// 7 types: string , number, boolean, Bigint, null, undefined, symbol, 
// Reference:
// Array, object, functions
// Primitive DataTypes:


// 1.Number: Represents both integer and floating-point numbers. Example: 5, 3.14.

// 2.String: Represents a sequence of characters enclosed in single or double quotes. Example: "Hello, world!".

// 3,Boolean: Represents a binary value, either true or false, often used for conditional logic.

// 4.Undefined: Represents a variable that has been declared but hasn't been assigned a value yet. Example: let x;.

// 5.Null:  standalone value it is represenataion of empty value it is special type and it is a object type. Example: let y = null; 

// 6.Symbol (ES6): it is mostly used used to find uniqnece.

// 7.BigInt (ES11): Represents large integers that cannot be represented by the Number type.

//  Refence (Object Data Types):

// 1.Object: Represents a collection of key-value pairs (properties and methods). Example: { name: "John", age: 30 }.

// 2.Array: Represents a list-like collection of values, indexed by numbers (integer indices). Example: [1, 2, 3, 4].

// 3.Function: Represents a reusable block of code that can be invoked or called with arguments. Example: function add(x, y) { return x + y; }.

// 4.Date: Represents dates and times.

// 5.RegExp: Represents regular expressions for pattern matching.



// lets talk about some Range of Primitive DataType:

//     1.Number:
//         Represents both integers and floating-point numbers.
//         Typical Range: -9,007,199,254,740,992 (-2^53) to 9,007,199,254,740,992 (2^53) inclusive.
//         Smallest Increment: 2^(-52).

//     2.String:
//         Represents a sequence of characters.
//         No specific range limit, but practical limits depend on memory and system resources.

//     3.Boolean:
//         Represents true or false.
//         Only two possible values: true and false.

//     4.Undefined:
//         Represents a variable that has been declared but hasn't been assigned a value.
//         It has only one possible value: undefined.

//     5.Null:
//         Represents the intentional absence of any object or value.
//         It has only one possible value: null.

//     6.Symbol (ES6):
//         Represents a unique and immutable value.
//         No specific range limit.

//     7.BigInt (ES11):
//         Represents large integers that cannot be represented by the Number type.
//         The range is practically unlimited and depends on available memory.


// ************************************************************************************************************

// two types of memories:stack (primitive), heap ( non- primitive)

//strings in js
const nammme = 'swati'
const repoCount = 50
// console.log(name +repocount+"value")
console.log(`hello my name is ${nammme} and my repo count is ${repoCount}`);//string interpolation


const gameName = new String('swati')
console.log(gameName[0]);

console.log(gameName.__proto__);// to access string methods

console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
const newString = gameName.substring(8, 4)
console.log(newString);
const anotherString = gameName.slice(-8, 4)
console.log(anotherString);
const newStringOne = "  hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))
console.log(url.includes('sundar'))

// Number and Math in javascript
const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const othernumber = 23.8966
console.log(othernumber.toPrecision(3));

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));

//**********************************maths********************************* **/

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.9));
console.log(Math.ceil(4.9));
console.log(Math.floor(4.9));


console.log(Math.random());//values between 0 to 1
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)// to avoid 0 case by floor we do this.


//Date and Time 
//DATES
let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString());
//  console.log(myCreatedDate.tolocaleString());
let myCreatedDate2 = new Date("01-14-2023")
let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now() / 1000));
//more to explore in this  context!!!