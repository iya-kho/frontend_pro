const task = [
    '1. Вивести на сторінку в один рядок через кому числа від 10 до 20: ',
    '2. Вивести квадрати чисел від 10 до 20: ',
    '3. Вивести таблицю множення на 7: ',
    '4. Знайти суму всіх цілих чисел від 1 до 15: ',
    '5. Знайти добуток усіх цілих чисел від 15 до 35: ',
    '6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500: ',
    '7. Вивести суму лише парних чисел в діапазоні від 30 до 80: ',
    '8. Вивести всі числа в діапазоні від 100 до 200 кратні 3: ',
    '9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники: ',
    '10. Визначити кількість його парних дільників: ',
    '11. Знайти суму його парних дільників: ',
    '12. Надрукувати повну таблицю множення від 1 до 10: '
]

// 1. Вивести на сторінку в один рядок через кому числа від 10 до 20

let result_1 = [];
for (let i = 10; i <= 20; i++) {
    result_1.push(' ' + i);
} 

document.getElementById("text_1").innerHTML = task[0] + result_1;



// 2. Вивести квадрати чисел від 10 до 20

let result_2 = [];

for (let i = 10; i <= 20; i++) {
    let square = Math.pow(i, 2);
    result_2.push(' ' + square);
}

document.getElementById("text_2").innerHTML = task[1] + result_2;



// 3. Вивести таблицю множення на 7

let result_3 = [];
let number = 7;

for (let i = 1; i <= number; i++) {
    let multipl = `${i} * ${number} = ${i * number}`;
    result_3.push(' ' + multipl);    
}

document.getElementById("text_3").innerHTML = task[2] + result_3;



// 4. Знайти суму всіх цілих чисел від 1 до 15

let numbers = '';
let sum = 0;
let result_4 = '';


for (let i = 1; i <= 15; i++){
    numbers += i + ' + ';
    sum += i;
    result_4 = numbers.slice(0, -2) + ' = ' + sum;
}

document.getElementById("text_4").innerHTML = task[3] + result_4;



// 5. Знайти добуток усіх цілих чисел від 15 до 35

let result_5 = '';
numbers = '';
let product = 1;

for (let i = 15; i <= 35; i++) {
    numbers += i + ' * ';
    product = product * i;
    result_5 = numbers.slice(0, -2) + ' = ' + product;
}

document.getElementById("text_5").innerHTML = task[4] + result_5;



// 6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500

let numbersArr = [];
sum = 0;
let result_6;

for (let i = 1; i <= 500; i++) {
    numbersArr.push(i);
    sum += i;
    result_6 = sum / numbersArr.length;
}

document.getElementById("text_6").innerHTML = task[5] + result_6;



// 7. Вивести суму лише парних чисел в діапазоні від 30 до 80

numbers = '';
sum = 0;
let result_7 = '';

for (let i = 30; i <= 80; i += 2) {
    numbers += i + ' + ';
    sum += i;
    result_7 = numbers.slice(0, -2) + ' = ' + sum;
}

document.getElementById("text_7").innerHTML = task[6] + result_7;



// 8. Вивести всі числа в діапазоні від 100 до 200 кратні 3

let result_8 = [];

for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        result_8.push(' ' + i);
    } 
}

document.getElementById("text_8").innerHTML = task[7] + result_8;



// 9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники

let result_9 = [];

let integer = prompt('Please enter an integer');

if (integer === null) {
    result_9 += 'No input';
} else if (isNaN(Number(integer)) || integer <= 0) {
    result_9 += 'Wrong input';
}

for (let i = 1; i <= integer; i++) {
    if (integer % i === 0) {
        result_9.push(' '+ i);
    }
}

document.getElementById("text_9").innerHTML = task[8] + result_9;



// 10. Визначити кількість його парних дільників

let result_10 = [];
let divisorsPair = [];

for (let i of result_9) {
    if (Number(i) % 2 === 0) {
        divisorsPair.push(' ' + i);
    }
} 

result_10 = `${divisorsPair} = ${divisorsPair.length} парних дільників`

document.getElementById("text_10").innerHTML = task[9] + result_10;



// 11. Знайти суму його парних дільників

let result_11 = '';
sum = 0;
numbers = '';

for (let i of divisorsPair) {
    numbers += i + ' + ';
    sum += Number(i);
    result_11 = numbers.slice(0, -2) + ' = ' + sum;
} 

document.getElementById("text_11").innerHTML = task[10] + result_11;



// 12. Надрукувати повну таблицю множення від 1 до 10

let result_12= [];

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        let row = i + ' * ' + j + ' = ' + i * j;
        result_12.push(' ' + row);
    }
}

document.getElementById("text_12").innerHTML = task[11] + result_12;
