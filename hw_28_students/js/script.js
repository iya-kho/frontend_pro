// Список студентів та система оцінювання

const students = [
    {
        fName: 'Bill',
        lName: 'Clinton',
        age: 20,
        marks: [3, 3, 5, 8, 4]
    },
    {
        fName: 'Will',
        lName: 'Smith',
        age: 19,
        marks: [10, 3, 7, 8, 1]
    },
    {
        fName: 'Angelina',
        lName: 'Jolie',
        age: 24,
        marks: [6, 6, 5, 10, 3]
    },
    {
        fName: 'Tina',
        lName: 'Turner',
        age: 17,
        marks: [10, 9, 9, 4, 9]
    },
    {
        fName: 'Laura',
        lName: 'Palmer',
        age: 22,
        marks: [5, 7, 3, 10, 4]
    },
    {
        fName: 'Jacky',
        lName: 'Chan',
        age: 26,
        marks: [6, 8, 5, 10, 1]
    },
    {
        fName: 'Timothy',
        lName: 'Chalamet',
        age: 18,
        marks: [8, 10, 5, 9, 9]
    },
    {
        fName: 'Lea',
        lName: 'Seydoux',
        age: 23,
        marks: [10, 5, 7, 7, 1]
    },
]

const maxMark = 10;


// 1. Створити Human, який приймає в аргументи об'єкт і створює властивості name, surname та age.
// Human також містить методи:
// getFullName() - віддає стрінгу повного ім'я, утвореного з name, surname,
// setFullName(fullName) - розбиває рядок на name, surname

class Human {
    constructor({ fName, lName, age }) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
    }

    getFullName() {
        return this.fullName = `${this.fName} ${this.lName}`;
    }

    setFullName() {
        [this.fName, this.lName] = this.fullName.split(' ');
    }
}


// 2. Створити клас Student, яку я зможу використати так:
// let s = new Student(info) // де info.marks = [10,9,8,1,10] та всі інші властивості name, age …
// У кожного студента повинні бути такі методи
// getAverageMark() - повертає середню оцінку
// getMinMark() - повертає найменшу оцінку
// getMaxMark() - повертає максимальну оцінку

class Student extends Human {
    constructor({ fName, lName, age, marks }) {
        super({ fName, lName, age } );
        this.marks = marks;
    }

    getAverageMark() {
        return this.marks.reduce((total, mark) => (total + mark)) / this.marks.length;
    }

    getMinMark() {
        return Math.min(...this.marks);
    }

    getMaxMark() {
        return Math.max(...this.marks);
    }
}

// 2.1 Створити FakeStudent

class FakeStudent extends Student {
    #cheatedmarks = this.#cheat(this.marks);

    constructor({ fName, lName, age, marks }) {
        super({ fName, lName, age, marks });
    }

    #cheat(values) {
        return values.map(value => value * 2 > maxMark ? value = maxMark : value *= 2 ) 
    }

    getAverageMark() {
        return this.#cheatedmarks.reduce((total, mark) => (total + mark)) / this.#cheatedmarks.length;
    }

    getMinMark() {
        return Math.min(...this.#cheatedmarks);
    }

    getMaxMark() {
        return Math.max(...this.#cheatedmarks);
    }

}

// 3. Створити клас Teacher який приймає в аргументи об'єкт
// і створює проперті group(масив не менше 5 - ти студентів створених за допомогою класа Student)
// та містить методи
// getListOfNamesByAverageMark() - віддає масив імен студентів відсортований за найвищою середньою оцінкою.
// getStudentByName(name) - отримати один об'єкт студента за ім'ям.
// removeStudentByName(name) - видалити об'єкт студента, знайденого за ім'ям.
// updateStudentByName(new Student(...), name) - знайти об'єкт студента по name та замінити на student (новий екземпляр класа Student)

// 3.1 Створити метод, що шукає fakeStudent

class Teacher extends Human {
    constructor({ fName, lName, age, group }) {
        super({ fName, lName, age });
        this.group = group;
    }

    getListOfNamesByAverageMark() {
        const groupSorted = [...this.group].sort((a, b) => (b.getAverageMark() - a.getAverageMark()));
        const groupSortedName = groupSorted.map(element => element.getFullName());
        
        return groupSortedName;
    }

    getStudentByName(name) {
        const result = this.group.filter(element => element.getFullName() === name);

        return result;
    }

    removeStudentByName(name) {
        this.group = this.group.filter(element => element.getFullName() != name);

        return this.group;
    }

    updateStudentByName(newStudent, name) {
        this.removeStudentByName(name);
        this.group.push(newStudent);

        return this.group;
    }

    findFakeStudent() {
        const fakeStudent = this.group.filter(element => element.getMinMark() != Math.min(...element.marks));

        return `Fake student: ${fakeStudent[0].getFullName()}. Marks: ${fakeStudent[0].marks}`;
    }
}


let student1 = new Student(students[0]);
let student2 = new Student(students[1]);
let student3 = new Student(students[2]);
let student4 = new Student(students[3]);
let student5 = new Student(students[4]);

let fakeStudent = new FakeStudent(students[5]);

let teacher = new Teacher({ fName: 'Nick', lName: 'Cave', age: 40, group: [student1, student2, student3, student4, student5, fakeStudent] });










