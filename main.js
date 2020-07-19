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
const v = 10;
//use === to match type and value (triple equal)
if(v === 10){
    console.log("v is 10");
} else if(x>10) {
    console.log("v is greater 10");
}
else {
    console.log("v is not 10");
}

// TERNIRARY 
const m = 11;
//if m>10 is true then you get red
// if m > 10 is false then you get blue
const color = m > 10 ? 'red' : "blue";
console.log(color);

//SWITCHES: evaluate the condition
switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red of blue');
        break;
}

//FUNCTION 
function addNums(num1,num2){
    return num1 +num2;
}
console.log(addNums(1,2));
// change function into a var const, no need to "return",  the arrow does it
 const addFive = num1 =>  console.log(num1 + 5);
 addFive(5)

 // todos.forEach((todo) => console.log(todo))

// OBJECT ORIENTED PROGRAMMING

//construct objects from constructive function 
// Constructor Function
// can add methods: functions to this person object
function Person(firstName,lastName, dob){
    this.firstName = firstName; //properties of objects
    this.lastName = lastName;
    this.dob = new Date(dob);
    /*this.getBirthYear = function(){ // tthis is a method
        return this.dob.getFullYear;
    }
    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }*/

}
//Prototype: another obkect, want to put the methods into prrototype
// methods: functions in the object
// prototype is an object and we can attach property to prototype
// not have functions with every object instance
// do this instead 
Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear()
}
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`

}

//Class with methods
// method: is a function inside of a class
// prettier than doing prototype
class Person2 {
    constructor(firstName,LastName,dob){ // method
    this.firstName = firstName; 
    this.lastName = lastName;
    this.dob = new Date(dob);
    } 

    getBirthYear(){
        return this.dob.getFullYear()

    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

//Instantiate object
const person1 = new Person('Vanessa', 'Teresa', '3-1-1998');
const person2 = new Person('Ashley', 'K', '5-8-1997');

console.log(person2);

// Methods which are just function to this person/objcet

// DOM 
// take HTML elements and work with them
// by selectors 
// want to use document object - makes the DOM
// window object is the parent object, fetch API is in window


// Single Element
const form = document.getElementById('my-form');
console.log(form);
// querySelector : only selects one thing 
console.log(document.querySelector('h1'));

// Mutiple Element
console.log(document.querySelectorAll('.item')); //nodeList: like array, can use array methods
console.log(document.getElementsByClassName('item')); //HTMLCollection


const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

const ul = document.querySelector('.items');
// ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent =  'Hello'; // changing the actual data (console), but not on html?
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = ' Chad';

const btn = document.querySelector('.btn');
btn.style.background = 'pink';

//EVENTS
btn.addEventListener('click', (e) =>{  // e is event parameter
    e.preventDefault();// prevent the default behaviourr of flashing, the forrm is no longerr submitting
    //console.log(e.target); // function when this even happens
    document.querySelector('#my-form').style.background = '#ccc';
    //document.querySelector('body').classList.add('bg-dark');
}
);

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#user');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    //console.log(nameInput.value);
    if(nameInput.value ==='' || emailInput.value === ''){ // this does not work??
        alert('Please enter fields');
    }
}
























