// 1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….)

let result_1 = '';

for (let i = 20; i <= 30; i = i + 0.5) {
    result_1 += i + ' ';
}

console.log(result_1);



// 2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

const usdToUah = 27;
let result_2 = '';
let converted;

function usdConvert(value) {
    return value * usdToUah;
}

for (let i = 10; i <= 100; i = i + 10) {
    converted = usdConvert(i);
    result_2 += `${i} * ${usdToUah} = ${converted}\n`;
}

console.log(result_2);



// 3. Дане ціле число.Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

const integer = Number(prompt('Enter an integer'));
let result_3 = '';
let row = '';

let i = 1;

function square(value) {
    return Math.pow(value, 2);
}

while (square(i) < integer && i <= 100) {
    row = `${i} * ${i}  = ${square(i)}\n`;
    result_3 += row;
    i++;
}

console.log(result_3);



// 4. Дане ціле число.З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

let divisors = [];
let result_4 = '';

for (let i = 1; i <= integer; i++) {
    if (integer % i === 0) {
        divisors.push(i);
    }
}

if (divisors.length > 2) {
    result_4 = `The number is not prime. Divisors: ${divisors}`;
} else {
    result_4 = `The number is prime. Divisors: ${divisors}`;
}

console.log(result_4);



// 5. Дане деяке число.Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

let powers = [];
result_5 = '';

for (let i = 1; i <= integer; i++) {
    if (Math.pow(3, i) === integer) {
        powers.push(i);
    }
}



if (powers.length != 0) {
    result_5 = `The number can be received by raising 3 to the power of: ${powers}`;
} else {
    result_5 = `The number cannot be received by raising 3 to any powers.`;
}

console.log(result_5);