let number1 = Number(prompt('Please enter the first number', '1'))
let number2 = Number(prompt('Please enter the second number', '2'))

const message = `\u2022 ${number1} + ${number2} = ${number1 + number2}\n
\u2022 ${number1} - ${number2} = ${number1 - number2}\n
\u2022 ${number1} * ${number2} = ${number1 * number2}\n
\u2022 ${number1} / ${number2} = ${number1 / number2}`

alert(message)