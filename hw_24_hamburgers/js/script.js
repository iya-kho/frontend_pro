// Prices and calories

const SIZE = {
    SMALL: {
        price: 50,
        calories: 20
    },
    BIG: {
        price: 100,
        calories: 40
    }
}

const STUFFING = {
    CHEESE: {
        price: 10,
        calories: 20
    },
    SALAD: {
        price: 20,
        calories: 5
    },
    POTATOES: {
        price: 15,
        calories: 10
    }
}

const TOPPING = {
    SPICES: {
        price: 15,
        calories: 0
    },
    MAYO: {
        price: 20,
        calories: 5
    }
}

// Create the Hamburger class

class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.topping = false;
        this.price = size.price + stuffing.price;
        this.calories = size.calories + stuffing.calories;
        this.message = '';
    }

    addTopping(topping) {
        this.topping = topping;
        this.price += topping.price;
        this.calories += topping.calories;
        return this;
    }

    showPrice() {
        this.message += `Price: ${this.price} tugriks. `;
        return this;
    }

    showCalories() {
        this.message += `Calories: ${this.calories}`;
        return this;
    }
}

// Get user's input

const btn = document.querySelector('#btn');
const small = document.querySelector('#small');
const cheese = document.querySelector('#cheese');
const salad = document.querySelector('#salad');
const potatoes = document.querySelector('#potatoes');
const spices = document.querySelector('#spices');
const mayo = document.querySelector('#mayo');

// Show the message

btn.addEventListener("click", constructHamburger);

function constructHamburger(e) {
    let selectedSize;
    if (small.checked) {
        selectedSize = SIZE.SMALL;
    } else if (big.checked) {
        selectedSize = SIZE.BIG;
    }

    let selectedStuffing;
    if (cheese.checked) {
        selectedStuffing = STUFFING.CHEESE;
    } else if (salad.checked) {
        selectedStuffing = STUFFING.SALAD;
    } else if (potatoes.checked) {
        selectedStuffing = STUFFING.POTATOES;
    }

    let hamburger = new Hamburger(selectedSize, selectedStuffing);

    if (spices.checked) {
        hamburger.addTopping(TOPPING.SPICES);
    }

    if (mayo.checked) {
        hamburger.addTopping(TOPPING.MAYO);
    }

    hamburger.showPrice().showCalories();
    output.innerText = hamburger.message;
    e.preventDefault();
}