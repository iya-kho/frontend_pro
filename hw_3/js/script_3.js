const hours = Number(prompt('Please enter the number of hours', '1'));

let secs = hours * 60 * 60;

let message = '';

if (hours === 1) {
    message = `There are ${secs} seconds in ${hours} hour`;
} else if (hours > 1) {
    message = `There are ${secs} seconds in ${hours} hours`;
} else {
    message = 'Wrong choice. Please enter a valid number';
}

alert(message)