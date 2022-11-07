let numOrStr = prompt('input number or string');
console.log(numOrStr);


switch (isNaN(numOrStr) || String(numOrStr).trim()) {
    case true:
        console.log('number is Ba_NaN');
        break;
    case 'null':
        console.log('You canceled');
        break;
    case '':
        console.log('Empty string');
        break;
    default:
        console.log('OK!');
}

