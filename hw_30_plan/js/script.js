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
        this._elem = elem;
        elem.onclick = this.onClick.bind(this);
    }

    addStart() {
        let newItem = document.createElement('li');
        newItem.textContent = listItems[Math.floor(Math.random() * listItems.length)];
        ul.prepend(newItem);
    }

    addEnd() {
        let newItem = document.createElement('li');
        newItem.textContent = listItems[Math.floor(Math.random() * listItems.length)];
        ul.append(newItem);
    }

    delete() {
        let selectedItems = Array.from(ul.children).filter(item => item.classList.contains('selected'));
        selectedItems.forEach(item => item.remove());
    }

    sort() {
        let selectedItems = Array.from(ul.children).filter(item => item.classList.contains('selected'));
        selectedItems.reverse().forEach(item => ul.prepend(item));
    }

    onClick(event) {
        let action = event.target.dataset.action;
        if (action) {
            this[action]();
        }
    }
}

new Menu(menu);

ul.addEventListener('mousedown', function (e) {
    e.preventDefault();
})

ul.addEventListener('click', function (e) {
    if (e.target == this) {
        return false;
    }

    if (!e.ctrlKey && !e.metaKey && !e.shiftKey) {
        clearSelected(this.children);
        addSelected(e.target);
    }   

    if (e.ctrlKey || e.metaKey) {
        toggleSelected(e.target);
    }

    if (e.shiftKey) {
        addGroup(e.target, Array.from(this.children));
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

function addGroup(target, items) {

    let itemsToSelect = [];

    let itemsToRemove = [];

    let selectedItems = items.filter(item => item.classList.contains('selected') && item !== target);

    if (selectedItems.length === 0) {
        for (i = 0; i <= items.indexOf(target); i++) {
            itemsToSelect.push(items[i]);
        }
    } else if (items.indexOf(selectedItems[0]) < items.indexOf(target)) {
        for (i = items.indexOf(selectedItems.at(-1)); i <= items.indexOf(target); i++) {
            itemsToSelect.push(items[i]);
        }
        if (selectedItems.length > 1) {
            for (i = 0; i < (selectedItems.length - 1); i++) {
                itemsToRemove.push(selectedItems[i]);
            }
        }

    } else if (items.indexOf(selectedItems[0]) > items.indexOf(target)) {
        for (i = items.indexOf(target); i <= items.indexOf(selectedItems[0]); i++) {
            itemsToSelect.push(items[i]);
        }

        if (selectedItems.length > 1) {
            for (i = 1; i < selectedItems.length; i++) {
                itemsToRemove.push(selectedItems[i]);
            }
        }
    }


    itemsToSelect.forEach(addSelected);
    clearSelected(itemsToRemove);
}

    

