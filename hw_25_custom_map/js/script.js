// JS default map

const myArray = [65, 44, 12, 4];
const resultDefault = myArray.map(myFunc);

function myFunc(num) {
    return num * 10;
}

console.log(`JS default map: ${resultDefault}`);

// Custom map

function customMap (arr, fn) {
    let result = [];
    for (let i of arr) {
        let element = fn(i);
        result.push(element);
    }
    return result;
}

console.log(`Custom map: ${customMap(myArray, myFunc)}`);

