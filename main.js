// use console.log to debug, printing output 
console.log("Hi everyone!"); // log is a method

// VARIABLES: var, let, const 
// var: globally scope, we don't use this anymore, conflict 

// let: re-assign valuue
let fingers = 22;
fingers = 21;
// const: always use const unless u know u want to change it, more robust

// DATA TYPE
// directly assing to memory
// Strings, Numbers, Boolean, null, undefined, Symbol
const name = 'Vanessa';
const age = 22;
const rating = 5.6;
const isCool = true; 
const x = null; // this is an object, not primitive data type 
const y = undefined;
let z;

console.log(typeof z);

// String concatenation
console.log('My name is ' + name + ' and I am ' + age);
// Template String
console.log(`My name is ${name} and I am ${age}`); // use back ticks

//String Properties and Methods 
const s = "Hello World";
// Property eg. length (no paranthesis)
console.log(s.length); 
//Method : a function that is associated with an object, need paranthesis
console.log(s.toUpperCase());
console.log(s.toLocaleUpperCase());
console.log(s.substring(0,5));
console.log(s.split(''))

//Arrays: variables that hold multiple values
// index start with 0
const numbers = new Array(1,2,3); //constructor
console.log(numbers);
// do not need to specify the lengths
const fruits = ['apples', 'oranges', 10, true]; // can have different data type
fruits[3] = 'grapes'; // changes the item, manipulate
// cannot do fruits = [] because const 
fruits.push('mangos');
fruits.unshift('strawberries');

console.log(fruits);
fruits.pop();
console.log(fruits);

// FUNCTION
const person = {
    firstName:'Vanessa',
    lastName: 'B',
    age: 22,
    hobbies: ['acting', 'singing', 'running'],
    address: {
        street: '123 main street',
        city: 'Richmond'
    }

}

console.log(person.hobbies[1]);// to print singing
// destructuring
const {firstName,lastName, address: {city}} = person; //pulling things out of person object
console.log(firstName);
//add property
person.email = "123@gmail.com"
console.log(person);

// ARRAYS of OBJECTS

const todos = [
    {
        id: 1,
        text: 'Learn JS',
        isCompleted: true,
    },

    {
        id: 2,
        text: 'Learn React Native',
        isCompleted: true,
    },

    {
        id: 3,
        text: 'Learn Node JS',
        isCompleted: false,
    }


];

console.log(todos);
console.log(todos[1].text);

//JSON data format, sending API
//JSON converter 
const todoJSON = JSON.stringify(todos);
console.log(todoJSON)

// FOR-LOOPS
for (let i = 0; i<2; i++){
    console.log(`For loop number: ${i}`);
}

// WHILE LOOP
//let outside the loop
let i=0;
while(i<3){
    console.log(`While loop number: ${i}`)
    i++;

}

// LOOPING ARRAYS
for(let i = 0; i < todos.length; i++){
    console.log(todos[i].text)
}

for(let todo of todos) {
   console.log(todo.id);
}
//HIGH-ORDER ARRAY METHODS:for iteration with arrays
//FOR EACH: loops through them
// map : create a new array from an array
// filter: create a new arrray based on a condition

todos.forEach(function(todo) {
    console.log(todo.text);
})

const todoText = todos.map(function(todo){
    return todo.text;
});

console.log(todoText);

const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted ===true;
})

// CONDITIONALS
const v = '10';
//use === to match type and value
if(v === 10){
    console.log("v is 10");
} else {
    console.log("v is not 10");
}


















