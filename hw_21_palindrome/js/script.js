// Напишіть функцію, яка приймає строку str і повертає

// OK - якщо строка-- паліндром
// Remove One - якщо можна видалити одну букву(яка є "зайвою") і строка стане паліндромом
// Not Possible - якщо жодна з умов не спрацювала

function singleCharacterPalindrome(str) {
    const toArr = str.split('');
    let message = '';

    function minusLetter(arr, i = 0) {
        let arrCopy = [...arr];
        arrCopy.splice(i, 1);
        if (i >= arrCopy.length) {
            return false;
        } else if (arrCopy.toString() === arrCopy.reverse().toString()) {
            return true;
        } else {
            return minusLetter(arr, i += 1);
        }
    }
    
    if (toArr.toString() === toArr.reverse().toString()) {
        message = 'OK';
    } else if (minusLetter(toArr)) {
        message = 'Remove One';
    } else {
        message = 'Not Possible';
    }

    return message;

}

console.log(singleCharacterPalindrome("abba")); // "OK"
console.log(singleCharacterPalindrome("abbaa")); // "Remove One"
console.log(singleCharacterPalindrome("abbaab")); // "Not Possible"
console.log(singleCharacterPalindrome("madmam")); // "Remove One"
console.log(singleCharacterPalindrome("raydarm")); // "Not Possible"
console.log(singleCharacterPalindrome("hannah")); // "OK"