/**
 * @param { string } length
 * @param {string} characters
 * 
 * @returns {string}
 */


function generateKey(length, characters) {
    randomStr = '';
    const charLength = characters.length + 1;
    for (i = 0; i <= length; i++) {
        randomStr += characters.charAt(Math.floor(Math.random() * charLength));
    }
    return randomStr;
}

const userChars = (prompt('Please enter your characters without spaces').replace(/ /g, ''));
const userLength = Number(prompt('Please enter the length of the desired keyword'));
const key = generateKey(userLength, userChars);

console.log(key);
