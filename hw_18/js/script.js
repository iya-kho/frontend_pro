// Написати функцію, яка приймає 1 параметр.з тим, що передали перший раз і т.д.Все це із замиканнями, наприклад:
// sum(3) = 3
// sum(5) = 8
// sum(20) = 28

const addCalc = () => {
    let result = 0;

    return (val) => {
        return result += val;
    }
}

const sum = addCalc();
const newSum = addCalc();

console.log(sum(3));
console.log(sum(3));
console.log(sum(4));

console.log(newSum(1));
console.log(newSum(6));
console.log(newSum(100));
