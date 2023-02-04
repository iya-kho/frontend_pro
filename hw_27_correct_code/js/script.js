function getPasswordFromUser(success, fail) {
    let password = prompt("Password?", '');
    if (password === "rockstar") success();
    else fail();
}

let user = {
    fName: 'Andrew',

    loginSuccess() {
        alert(`${this.fName} logged in`);
    },

    loginFail() {
        alert(`${this.fName} failed to log in`);
    },

};

getPasswordFromUser(user.loginSuccess.bind(user), user.loginFail.bind(user));

// Якщо метод об'єкту викликається окремо від об'єкту, то контекст береться з global environment, 
// в якого нема значення .fname, і виходить undefined.
// Тому котнекст треба прив'язати за допомогою bind.
