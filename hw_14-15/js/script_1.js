// Create an array

const numElements = Number(prompt('How many elements do you want to add to your array?'));

let counter = 1;
let userArray = [];

for (counter = 1; counter <= numElements; counter++) {
    let userElement = prompt(`Please enter element #${counter}:`);
    userArray.push(userElement);
    console.log(userElement);
}

console.log(`Your array: ${userArray}`);

// Remove an element;

function removeElement(array, item) {
    for (i = 0; i < array.length; i++){
        if (array[i].toString() === item) {
            array.splice(i, 1);
            i--;
        }
    }
    return array;
}

const userRemoveItem = prompt('Which element do you want to remove?');

removeElement(userArray, userRemoveItem);

console.log(`Updated array: ${userArray}`);