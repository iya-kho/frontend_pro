let number1 = Number(prompt('Please enter the first number', '1'))
let number2 = Number(prompt('Please enter the second number', '2'))

let average = (number1 + number2) / 2

let message = ''

if (Number.isInteger(number1) && Number.isInteger(number2)) {
    message = `The arithmetic mean of your numbers equals ${average}`
} else {
    message = 'Wrong choice. Please enter 2 integers'
}

alert(message)

