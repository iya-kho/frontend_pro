// Creating an array

const numElements = Number(prompt('How many elements do you want to add to your array?'));

let counter = 1;
let arr = [];

while (counter <= numElements) {
    let element = prompt(`Please enter element #${counter}:`);
    arr.push(element);
    console.log(arr[arr.length - 1]);
    counter++;
}

console.log('Array: ' + arr);



// Sorting elements

// Sort numbers:

const arrNumbers = arr.filter(Number);
arrNumbers.sort(function (a, b) { return a - b });

console.log('Numbers: ' + arrNumbers);

// Sort non-empty strings:

const arrStrings = arr.filter(checkString);

function checkString(element) {
    return isNaN(+element) && element.trim() != '' && element != null;
}

arrStrings.sort();

console.log('Strings: ' + arrStrings);

const arrSorted = arrNumbers.concat(arrStrings);

console.log('Sorted: ' + arrSorted);




// Removing elements with indexes 2-4 (included)

arrSorted.splice(2, 3);
console.log('Removed: ' + arrSorted);



