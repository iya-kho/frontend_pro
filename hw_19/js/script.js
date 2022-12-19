const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
console.log(array);

// 1. Знайти суму та кількість позитивних елементів.

const positive = array.filter(value => value >= 0);
const numPos = positive.length;
const sum = positive.reduce((accumulator, value) => accumulator + value);

console.log(`1. There are ${numPos} positive elements in the array. The sum of these elements equals ${sum}`);

// 2. Знайти мінімальний елемент масиву та його порядковий номер.

const arraySort = [...array].sort((a, b) => a - b);
console.log(arraySort);

const minVal = arraySort[0];

const minPosition = array.indexOf(minVal) + 1;
console.log(`2. The minimal number is ${minVal}. It's position is ${minPosition}`);

// 3. Знайти максимальний елемент масиву та його порядковий номер.

const maxVal = arraySort[arraySort.length-1];

const maxPosition = array.indexOf(maxVal) + 1;
console.log(`3. The biggest number is ${maxVal}. It's position is ${maxPosition}`);

// 4. Визначити кількість негативних елементів.

const negative = array.filter(val => val < 0);
const numNeg = negative.length;

console.log(`4. There are ${numNeg} negative elements in the array.`);

// 5. Знайти кількість непарних позитивних елементів.

const posOdd = positive.filter(val => val % 2 === 1);

console.log(`5. There are ${posOdd.length} odd positive elements in the array.`);


// 6. Знайти кількість парних позитивних елементів.

const posEven = positive.filter(val => val % 2 === 0);

console.log(`6. There are ${posEven.length} even positive elements in the array.`);

// 7. Знайти суму парних позитивних елементів.

const sumPosEven = posEven.reduce((total, val) => total + val);

console.log(`7. The sum of the even positive elements equals ${sumPosEven}`);

// Знайти суму непарних позитивних елементів.

const sumPosOdd = posOdd.reduce((total, val) => total + val);

console.log(`8. The sum of the odd positive elements equals ${sumPosOdd}`);

// Знайти добуток позитивних елементів.

const multiPos = positive.reduce((product, val) => product * val);

console.log(`9. The product of the multiplication of the positive elements equals ${multiPos}`);

// Знайти найбільший серед елементів масиву, решту обнулити.

const nullArr = array.map(val => {
    if (val === maxVal) {
        return maxVal;
    } else {
        return 0;
    }
});

console.log(`10. The nullified array: ${nullArr}`);