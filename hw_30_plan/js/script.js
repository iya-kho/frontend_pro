const listItems = [
    'Work out',
    'Get some sleep',
    'Call the boyfriend',
    'Cook the dinner',
    'Watch Netflix',
    'Take a shower',
    'Walk with the dog',
]

let ul = document.querySelector('#ul');

let menu = document.querySelector('#menu');

class Menu {
    constructor(elem) {
        this.elem = elem;
        elem.onclick = this.onClick.bind(this);
    }

    add(position) {
        let newItem = document.createElement('li');
        newItem.textContent = listItems[Math.floor(Math.random() * listItems.length)];
        switch (position) {
            case 'start':
                ul.prepend(newItem);
                break;
            case 'end':
                ul.append(newItem);
        }
    }

    actionOnSorted(action) {
        let selectedItems = Array.from(ul.querySelectorAll('.selected'));
        switch (action) {
            case 'delete':
                selectedItems.forEach(item => item.remove());
                break;
            case 'sort':
                selectedItems.reverse().forEach(item => ul.prepend(item));
        }
    }

    onClick(event) {
        let action = event.target.dataset.action;
        if (action) {
            this[action](event.target.dataset.argument);
        }
    }
}

new Menu(menu);

ul.addEventListener('mousedown', function (e) {
    e.preventDefault();
})

ul.addEventListener('click', function (e) {
    if (e.target === this) {
        return false;
    }

    if (e.ctrlKey || e.metaKey) {
        toggleSelected(e.target);
    } else if (e.shiftKey) {
        selectRange(e.target, Array.from(this.children));
    } else {
        clearSelected(this.children);
        addSelected(e.target);
    }

})


function clearSelected(elems) {
    for (let elem of elems) {
        elem.classList.remove('selected');
    }
}

function addSelected(target) {
    target.classList.add('selected');
}

function toggleSelected(target) {
    target.classList.toggle('selected');
}

function selectRange(target, items) {

    let selectedItems = Array.from(ul.querySelectorAll('.selected'));
    clearSelected(selectedItems);

    if (selectedItems.length === 0) {
        for (let i = 0; i <= items.indexOf(target); i++) {
            addSelected(items[i]);
        }
    } else if (items.indexOf(selectedItems[0]) < items.indexOf(target)) {
        for (let i = items.indexOf(selectedItems.at(-1)); i <= items.indexOf(target); i++) {
            addSelected(items[i]);
        }
    } else {
        for (let i = items.indexOf(target); i <= items.indexOf(selectedItems[0]); i++) {
            addSelected(items[i]);
        }
    }
}