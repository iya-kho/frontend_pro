// Ask info from user

const user = new Object();
    user.dateOfBirth = prompt('What is your date of birth?', 'MM-DD-YYYY');
    const cityInput = prompt('What city do you live in?', 'Kyiv');
    user.city = cityInput.charAt(0).toUpperCase() + cityInput.slice(1).toLowerCase();
    user.sport = (prompt('What is your favourite sport?', 'Skating')).toLowerCase();


// Generate message to show if user doesn't provide info'

const notEnterMessagePart = "Sorry that you didn't want to enter your"

let ageMessage = '';
let cityMessage = '';
let sportMessage = '';


// Get user's age + generate age message

if (!user.dateOfBirth) {
    ageMessage = `${notEnterMessagePart} date of birth.`;
} else {

    const todayDate = new Date();
    const todayDay = todayDate.getDate();
    const todayMonth = todayDate.getMonth() + 1;
    const todayYear = todayDate.getFullYear();

    const [dobMonthStr, dobDayStr, dobYearStr] = user.dateOfBirth.split('-');
    const dobDay = Number(dobDayStr);
    const dobMonth = Number(dobMonthStr);
    const dobYear = Number(dobYearStr);

    let age;
    if (todayMonth > dobMonth || todayMonth === dobMonth && todayDay >= dobDay) {
        age = todayYear - dobYear;
    } else {
        age = todayYear - dobYear - 1;
    }

    ageMessage = isNaN(age) ?
        `To calculate your age please enter your date of birth in format MM-DD-YYYY.` :
        `You are ${age} years old.`;

}

// Generate city message

if (!user.city) {
    cityMessage = `${notEnterMessagePart} city.`;
} else {
    const cityMessagePartCapital = "You live in the capital of";
    const cityMessagePartCity = "You live in";
    switch (user.city) {
        case 'Kyiv':
            cityMessage = `${cityMessagePartCapital} Ukraine.`;
            break;
        case 'Washington':
            cityMessage = `${cityMessagePartCapital} the USA.`;
            break;
        case 'London':
            cityMessage = `${cityMessagePartCapital} the United Kingdom.`;
            break;
        default:
            cityMessage = `${cityMessagePartCity} ${user.city}.`;       
    }
}

// Generate sport message

if (!user.sport) {
    sportMessage = `${notEnterMessagePart} favourite sport.`;
} else {
    sportMessage = `Your favourite sport is ${user.sport}. Great! `
    const sportMessagePartAthlete = 'Wanna be like'
    switch (user.sport) {
        case 'tennis':
            sportMessage += `${sportMessagePartAthlete} Serena Williams?`;
            break;
        case 'swimming':
            sportMessage += `${sportMessagePartAthlete} Yana Klochkova?`;
            break;
        case 'football':
            sportMessage += `${sportMessagePartAthlete} Zinedine Zidane?`;
    }

}

// Show messages to user

const message = `${ageMessage}\n${cityMessage}\n${sportMessage}`;
alert(message);





