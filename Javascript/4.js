//HOW DOES JS EXECUTE CODE+ CALL STACK
/* 1. global execution context
2.functional execution context
3. eval execution '''''''

1. Global ex--->this
2.memory phase---> varibles assigned as undefined
3. add num / main function---> definition
4. results 1 , 2.. --> undefined
5. execution phase

code:
let val1 =  10
let val2=  14
function addnum(num1,num2){
    let total = num1+num2
    return total
}
let result1= addnum( val1, val2)
let result2= addnum( 10,2)

new executional environment is created and thus  the memory phase and execution phase is worked upon repeatedly and the output is returned to the global execuytion*/

/* call stack 
lifo concept just lilke stack*/

// control flow
let score = 120
if (score > 100) {
    let power = "5"
    console.log(`user power :${power}`);
}


const balance = 1000
if (balance > 500) console.log("test");

if (balance < 400) {
    console.log("les than 400");
}
else if (balance < 700) {
    console.log("les than 700");
}
else {
    console.log("less than 1200");
}

const userLoggedIn = true
const debitcard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true
if (userLoggedIn && debitcard && 2 == 2) {
    console.log("allowed ");
}
if (LoggedInFromEmail || LoggedInFromGoogle) {
    console.log("user loggedin");
}

const month = 3
switch (month) {
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("mar");
        break;
    case 4:
        console.log("apr");
        break;

    default:
        console.log("december");
        break;
}
// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN
// truthy values

// "0", 'false," ",[],{}, function(){}

// checking of data
let userEmail = "fdbwsfihgyh@gmail.com"
if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyobj = {}
if (Object.keys(emptyobj).length === 0) {
    console.log("object is empty");
}

//Nullish coalescing operator (??): null undefined
let val1;
let val2;
let val3;
let val4;
val1 = 5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 15
val4 = null ?? 10 ?? 230
//ignore null/undefined--> first value


console.table([val1, val2, val3, val4]);

// For loop , break and continue.
//for

for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);
}
//similar to what we have learnt before

//while and do-while


/*let myArray=('flash',"batman","superman")

let arr =0
while(arr<myArray.length){
  console.log(`value is ${myArray[arr]}`);
  arr = arr+1
}*/

//higher order loops

//for of


const arr = [1, 2, 4, 5, 6]
for (const num of arr) {

    console.log(num);

}


const greetings = "hello"
for (const greet of greetings) {
    console.log(`Each char is  ${greet}`);
}

//maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "Unioted States Of Ameriac")
map.set('CH', "China")
map.set('JA', "japan")
console.log(map);
for (const [key, value] of map) {
    console.log(key, ':-', value);
}

/*const myObject ={
   'game1': 'NFS',
   'game2': ' spiderman'
}
for (const [key,value] of myObject) {
   console.log(key,':-',value);
   
}*/
//doesnt work!

const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby"

}
for (const key in myObject) {
    console.log(`${key} shortcut is for  ${myObject[key]}`);
}

//for-each  loop

const coding = ["js", " ruby", "cpp"]

coding.forEach(function (value) {
    console.log(value);

})

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})

const myCoding = [
    {
        LanguageName: "Javascript",
        LanguageFileName: "js"
    },
    {
        LanguageName: "Java",
        LanguageFileName: "java"
    },
    {
        LanguageName: "python",
        LanguageFileName: "py"
    },
]

myCoding.forEach((item) => {
    console.log(item.LanguageName);
})

//Filter map and reduce
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter((num) => num > 4)
console.log(newNums);

const books = [
    { title: 'book1', genre: 'fiction', publish: 1982, edition: 2004 },
    { title: 'book2', genre: 'science', publish: 1983, edition: 2005 },
    { title: 'book3', genre: 'maths', publish: 1984, edition: 2006 },
    { title: 'book4', genre: 'geography', publish: 1985, edition: 2007 },
    { title: 'book5', genre: 'biology', publish: 1986, edition: 2008 },
    { title: 'book6', genre: 'history', publish: 1987, edition: 2009 },
    { title: 'book7', genre: 'civics', publish: 1988, edition: 2010 },
    { title: 'book8', genre: 'non-fiction', publish: 1989, edition: 2012 },
    { title: 'book9', genre: 'fairytale', publish: 1991, edition: 2020 },
    { title: 'book10', genre: 'history', publish: 1912, edition: 2024 },

];
let userBooks= books.filter((bk)=>bk.genre==='history')
userBooks= books.filter((bk)=> bk.publish>=1985)
console.log(userBooks);


const myNumbers =[1,2,3,4,5,6,7,8,9]
const mynewNumbers= myNumbers.map((num)=>num+10)
console.log(mynewNumbers)


const neNums=  myNumbers.map((num)=> num*10).map((num)=>num+1).filter((num)=> num>=40)
console.log(neNums);


//reduce
const a=[1,2,3]
// const myTotal = a.reduce (function(acc, currval){
//     console.log(`acc:${acc} and currval:${currval}`);
//     return acc +currval},0)

//arrow use krke 
const myTotal = a.reduce ((acc,curr)=> acc+curr,0)
    console.log(myTotal);

    //best way to use an arrow function. 
