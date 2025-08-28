//Array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

//Array Methods
myArr.push(6)
myArr.push(7)
myArr.pop()
myArr.unshift(9)
myArr.shift()
console.log(myArr.includes(9));
console.log(myArr.indexOf(3));
const newArr = myArr.join()


console.log(myArr);
console.log(newArr);//converted to string

//slice, splice
console.log("A", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);

console.log("B", myArr);
const myn2 = myArr.splice(1, 3)
console.log("C", myArr);

console.log(myn2);

//  //Difference between slice and splice.
//  in slice  the first index is included and last index is not included.Arraywhereas in splice the array itself gets changed and the mentioned indexes fgets printed 
/*ex:
const cars = ['Benz', 'Innova', 'Breeza', 'Etios', 'Dzire'];
const newCars = cars.slice(1, 4); // Selects elements at indices 1, 2, and 3

output
cars: Benz, Innova, Breeza, Etios, Dzire
newCars: Innova, Breeza, Etios

splice
ex:
const cars = ['Benz', 'Innova', 'Breeza', 'Etios', 'Dzire'];

// Adding new items without removing any
cars.splice(2, 0, 'Ambassador', 'BMW', 'Audi');
// Output: cars: Benz, Innova, Ambassador, BMW, Audi, Breeza, Etios, Dzire

// Removing one element
cars.splice(2, 1);
// Output: cars: Benz, Innova, BMW, Audi, Breeza, Etios, Dzire */

//array 

//  const marvel_heros = { "thor", "Ironman"," spiderman"}
//  const dc_heros ={"superman", "flash", "batman"}
//  marvel_heros.push(dc_heros)
//  console.log(marvel_heros);
// read on this lec - 15

const third_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_third_array = third_array.flat(Infinity)
console.log(real_third_array);
console.log(Array.isArray("hitesh"))
console.log(Array.from("hitesh"))
let score1 = 100
let score2 = 200
let score3 = 600
console.log(Array.of(score1, score2, score3));


//Objects in javascript

//singleton
//object literal
const JsUser = {
    name: " hitesh",
    "full name": "Swati Singh",
    age: 18,
    location: "kolkata",
    email: "gfygfuwjhnu@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "saturday"]
}
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
JsUser.greeting = function () {
    console.log("Hello JS User");
}
JsUser.greetingtwo = function () {
    console.log(`Hello JS User,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());

const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.id = "abc"
tinderuser.isLoggedIn = false
console.log(tinderuser);

const regularuser = {
    email: "egeujhdg@gmail.com",
    fullname: {
        userfullname: {
            firstname: "swati",

            lastname: "singh"
        }
    }
}
console.log(regularuser.fullname.userfullname.firstname.lastname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
//  const obj3={obj1,obj2}
//  const obj3 =Object.assign({},obj1, obj2)
// or  alterntive  
const obj3 = { ...obj1, ...obj2 }

console.log(obj3);


const users = [
    {
        id: 1,
        email: "nagmail.com"
    },

    {
        id: 1,
        email: "nagmail.com"
    }
]
users[1].email
console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty(`hii`));

//  object de-structure

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const { courseInstructor: you } = course
console.log(you);

//API in json

// // {
//   "name": "swati",
//    "coursename": "js in hindi",
//     "price": "free"
// }
