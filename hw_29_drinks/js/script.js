// Отримати елементи списку li. Потім перетворити їх на масив з тексту кожного елемента(li.textContent);
// Залишити унікальні рядки у цьому масиві та відсортувати його.
// // Результат(li елементи) вивести в той же список ul

let list = document.querySelector('#drinks-list');

function displayUniqueSorted(ul) {

    let arrUniqueSorted = Array.from(ul.children).map(liElem =>
        liElem.textContent
    ).filter((element, index, array) =>
        array.indexOf(element) === index
    ).sort();

    ul.innerHTML = '';

    arrUniqueSorted.map(element => {
        let li = document.createElement('li');
        li.textContent = element;
        ul.append(li);
    });
}

displayUniqueSorted(list);

