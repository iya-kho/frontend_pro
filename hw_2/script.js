// Task 1

let userFirstName = prompt('Please enter your first name', 'John');
let userSecondName = prompt('Please enter your second name', 'Smith');
let userAge = prompt('Please enter your age', '30');


let message = `User info: ${userFirstName} ${userSecondName}, ${userAge} years old`;

console.log(message);

// Task 2

let number = prompt('Please enter a 5-digit number', '12345');
let digit_1 = Number(number.charAt(0));
let digit_2 = Number(number.charAt(1));
let digit_3 = Number(number.charAt(2));
let digit_4 = Number(number.charAt(3));
let digit_5 = Number(number.charAt(4));

console.log(`${digit_1} ${digit_2} ${digit_3} ${digit_4} ${digit_5}`)
