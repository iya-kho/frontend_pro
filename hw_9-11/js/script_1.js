let numOrStr = prompt('input number or string');
console.log(numOrStr);



// Solution 1

// switch (isNaN(numOrStr) || String(numOrStr).trim()) {
//     case true:
//         console.log('number is Ba_NaN');
//         break;
//     case 'null':
//         console.log('You canceled');
//         break;
//     case '':
//         console.log('Empty string');
//         break;
//     default:
//         console.log('OK!');
// }

// Solution 2

switch (true) {
    case isNaN(+numOrStr):
        console.log('number is Ba_NaN');
        break;
    case numOrStr === null:
        console.log('You canceled');
        break;
    case numOrStr.trim() === '':
        console.log('Empty string');
        break;
    default:
        console.log('OK!');
}

