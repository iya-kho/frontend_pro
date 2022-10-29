let operation = prompt('What operation do you want to perform?', 'add, sub, mult, div')
let number1 = Number(prompt('Please enter the first number', '1'))
let number2 = Number(prompt('Please enter the second number', '2'))

let message = ''

if (operation === 'add') {
    message = `${number1} + ${number2} = ${number1 + number2}`;
} else if (operation === 'sub') {
    message = `${number1} - ${number2} = ${number1 - number2}`;
} else if (operation === 'mult') {
    message = `${number1} * ${number2} = ${number1 * number2}`;
} else if (operation === 'div') {
    message = `${number1} / ${number2} = ${number1 / number2}`;
} else {
    message = 'Wrong choice. Please choose between add, sub, mult or div';
}


alert(message)