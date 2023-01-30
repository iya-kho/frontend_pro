// JS default map

const myArray = [65, 44, 12, 4];
const resultDefault = myArray.map(myFunc);

function myFunc(num) {
    return num * 10;
}

console.log(`JS default map: ${resultDefault}`);

// Custom map

function customMap(array, callback) {
    let result = [];
    for (let index = 0; index < array.length; index++) {
        let newElement = callback(array[index], index, array);
        result.push(newElement);
    }

    return result;
}

console.log(`Custom map: ${customMap(myArray, myFunc)}`);