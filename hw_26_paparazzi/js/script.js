function structureUserInfo(userName) {
    let userInfo = {name: userName};
    return function (userRole) {
        userInfo.role = userRole;
        return userInfo;
    }
}

console.log(structureUserInfo('John')('Admin'));

const userAnna = structureUserInfo('Anna');
console.log(userAnna('new user'));
console.log(userAnna('client'));