// Реалізувати рекурсивну функцію, яка зводить число в ступінь.
// Число, яке треба піднести до ступеню, передається як перший аргумент у функції;
// Ступінь передається як другий аргумент у функцію pow(num, degree).

function pow(num, degree) {
    if (degree < 0) {
        return pow(num, degree + 1)/num;
    } else if (degree === 0) {
        return 1;
    } else {
        return num * pow(num, degree - 1);
    }
}

const userNum = Number(prompt('Please enter the base number: '));
const userPower = Number(prompt('Please enter the power: '));

console.log(`JS pow: ${Math.pow(userNum, userPower)}`);
console.log(`Custom pow: ${pow(userNum, userPower)}`);
