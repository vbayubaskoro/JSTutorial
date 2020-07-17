let name = "Vanessa"; //String Literal
let age = 12; // Number Literal

// An object called Person
let person = {
    name: 'Vanessa Teresa',
    age: 22
}

console.log(person);

//Dot Notation, default choice 
person.name = "Mario";
// Bracket Notation, when you don't know the target variable until the run time, for dynamic
let selection = 'name';
person[selection] = 'Francis'

console.log(person.name);

let isApproved = false; // Boolean
let selectedColor = null; 
console.log(name);

let firstName = "Vanessa";
let lastName = "B";

let interestRate = 0.3;
interestRate = 1; 
console.log(interestRate);

// Dynamic arrays, length and type of item 
let selectedColors = [ 'pink', 'purple'];
selectedColors[2] = 'blue'; // add third item to array
selectedColors[3] = 2; // can have diff types
console.log(selectedColors);
console.log(selectedColors[0]);
console.log(selectedColors.length);

// FUNCTION
function greet(name, lastName) {
    console.log('Hello ' + name + lastName);
}

greet('Vanessa', 'Patrick');
greet('Ashley');

// FUNCTION
function square(number){
    return number*number;
}

console.log(square(2))


