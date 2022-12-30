// Напишіть функцію, яка приймає строку str і повертає

// OK - якщо строка-- паліндром
// Remove One - якщо можна видалити одну букву(яка є "зайвою") і строка стане паліндромом
// Not Possible - якщо жодна з умов не спрацювала

// Version 1: recursion

function palindromeRecursion(str) {
    const toArr = str.split('');
    let message = '';

    if (toArr.toString() === toArr.reverse().toString()) {
        message = 'OK';
    } else if (minusLetterRecursion(toArr)) {
        message = 'Remove One';
    } else {
        message = 'Not Possible';
    }

    return message;

}

function minusLetterRecursion(arr, i = 0) {
    let arrCopy = [...arr];
    arrCopy.splice(i, 1);
    if (i >= arrCopy.length) {
        return false;
    } else if (arrCopy.toString() === arrCopy.reverse().toString()) {
        return true;
    } else {
        return minusLetterRecursion(arr, i += 1);
    }
}

    

console.log(palindromeRecursion("abba")); // "OK"
console.log(palindromeRecursion("abbaa")); // "Remove One"
console.log(palindromeRecursion("abbaab")); // "Not Possible"
console.log(palindromeRecursion("madmam")); // "Remove One"
console.log(palindromeRecursion("raydarm")); // "Not Possible"
console.log(palindromeRecursion("hannah")); // "OK"
console.log('----------------------------------------');

// Version 2: for loop

function palindromeLoop(str) {
    const toArr = str.split('');
    let message = '';
    let isPalMinusChar = false;

    for (let i in toArr) {
        let toArrCopy = [...toArr];
        toArrCopy.splice(i, 1);
        if (toArrCopy.toString() === toArrCopy.reverse().toString()) {
            isPalMinusChar = true;
            break;
        }
    }

    if (toArr.toString() === toArr.reverse().toString()) {
        message = 'OK';
    } else if (isPalMinusChar) {
        message = 'Remove One';
    } else {
        message = 'Not Possible';
    }

    return message;

}

console.log(palindromeLoop("abba")); // "OK"
console.log(palindromeLoop("abbaa")); // "Remove One"
console.log(palindromeLoop("abbaab")); // "Not Possible"
console.log(palindromeLoop("madmam")); // "Remove One"
console.log(palindromeLoop("raydarm")); // "Not Possible"
console.log(palindromeLoop("hannah")); // "OK"
console.log('----------------------------------------');

// Version 3: Array.prototype.every()

function palindromeEvery(str) {
    const toArr = str.split('');
    let message = '';

    if (toArr.toString() === toArr.reverse().toString()) {
        message = 'OK';
    } else if (!toArr.every(isNotPalMinusCharEvery)) {
        message = 'Remove One';
    } else {
        message = 'Not Possible';
    }

    return message;

}


function isNotPalMinusCharEvery(element, index, arr) {
    let arrCopy = [...arr];
    arrCopy.splice(index, 1);
    if (arrCopy.toString() === arrCopy.reverse().toString()) {
        return false;
    } else {
        return true;
    }
}

console.log(palindromeEvery("abba")); // "OK"
console.log(palindromeEvery("abbaa")); // "Remove One"
console.log(palindromeEvery("abbaab")); // "Not Possible"
console.log(palindromeEvery("madmam")); // "Remove One"
console.log(palindromeEvery("raydarm")); // "Not Possible"
console.log(palindromeEvery("hannah")); // "OK"


