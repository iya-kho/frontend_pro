// 1. Дано масив з елементами різних типів.Створити функцію,
// яка вираховує середнє арифметичне лише числових елементів даного масиву.

const array = ['a', 6, 76, 4, 'fjf', undefined];

const arrayNum = array.filter(ele => typeof ele === 'number');

const sum = arrayNum.reduce((total, num) => total + num);

const resultAverage = sum / arrayNum.length;

console.log(array);
console.log(resultAverage);


// 2. Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak.
// У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
// Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

const OPERATIONS = {
    PLUS: '+',
    MINUS: '-',
    MULTY: '*',
    DIV: '/',
    MODUL: '%',
    EXPONENT: '^'
};

const userFirstNum = Number(prompt('Please enter the first number: '));
const userSecondNum = Number(prompt('Please enter the second number: '));
const userOperation = prompt(`Please enter your operation: ${Object.values(OPERATIONS)} `);

const operationCheck = (basicOperation) => {
    return (operationforCheck) => {
        return operationforCheck === basicOperation;
    }
}

const isPlus = operationCheck(OPERATIONS.PLUS);
const isMinus = operationCheck(OPERATIONS.MINUS);
const isMulty = operationCheck(OPERATIONS.MULTY);
const isDiv = operationCheck(OPERATIONS.DIV);
const isModul = operationCheck(OPERATIONS.MODUL);
const isExponent = operationCheck(OPERATIONS.EXPONENT);


const calculator = (userData) => {
    const { firstNum, operation, secondNum } = userData;
    switch (true) {
        case isPlus(operation):
            return firstNum + secondNum;
        case isMinus(operation):
            return firstNum - secondNum;
        case isMulty(operation):
            return firstNum * secondNum;
        case isDiv(operation):
            return firstNum / secondNum;
        case isModul(operation):
            return firstNum % secondNum;
        case isExponent(operation):
            return Math.pow(firstNum, secondNum);
        default:
            throw 'There is no such operation';
    }
}

const resultCalculator = calculator({ firstNum: userFirstNum, secondNum: userSecondNum, operation: userOperation });

console.log(resultCalculator);


// 3. Написати функцію заповнення даними користувача двомірного масиву.
// Довжину основного масиву і внутрішніх масивів задає користувач.
// Значення всіх елементів всіх масивів задає користувач.

const userMainArrayLength = Number(prompt('Please enter the number of inner arrays in your array: '));
const userInnerArrayLength = Number(prompt('Please enter the number of elements in inner arrays: '));

const userArrayFactory = (mainArrayLength, innerArrayLength) => {
    let mainArray = [];
    for (i = 0; i < mainArrayLength; i++) {
        let innerArray = [];
        for (j = 0; j < innerArrayLength; j++) {
            let element = prompt(`Please enter the element #${innerArray.length + 1} of the inner array #${mainArray.length + 1}`);
            innerArray.push(element);
        }
        mainArray.push(innerArray);
    }

    return mainArray;
}

const resultArray = userArrayFactory(userMainArrayLength, userInnerArrayLength);
console.log(resultArray);

// 4. Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor".
// Вихідний рядок та символи для видалення задає користувач.

const removeChars = (string, chars) => {
    for (let i of chars) {
        string = string.replaceAll(i, '');
    }
    return string;
}

const userString = prompt('Please enter your string: ');
const userChars = (prompt('Please enter characters to delete without commas or spaces')).replace(/[, ]/g, '');
let userCharsArray = [];
let char = '';
for (i = 0; i < userChars.length; i++) {
    char = userChars.slice(i, i + 1);
    userCharsArray.push(char);
}

resultRemove = removeChars(userString, userCharsArray);

console.log(resultRemove);
