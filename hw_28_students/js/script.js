// Список студентів та система оцінювання

const students = [
    {
        name: 'Bill',
        surname: 'Clinton',
        age: 20,
        marks: [3, 3, 5, 8, 4]
    },
    {
        name: 'Will',
        surname: 'Smith',
        age: 19,
        marks: [10, 3, 7, 8, 1]
    },
    {
        name: 'Angelina',
        surname: 'Jolie',
        age: 24,
        marks: [6, 6, 5, 10, 3]
    },
    {
        name: 'Tina',
        surname: 'Turner',
        age: 17,
        marks: [10, 9, 9, 4, 9]
    },
    {
        name: 'Laura',
        surname: 'Palmer',
        age: 22,
        marks: [5, 7, 3, 10, 4]
    },
    {
        name: 'Jacky',
        surname: 'Chan',
        age: 26,
        marks: [6, 8, 5, 10, 1]
    },
    {
        name: 'Timothy',
        surname: 'Chalamet',
        age: 18,
        marks: [8, 10, 5, 9, 9]
    },
    {
        name: 'Lea',
        surname: 'Seydoux',
        age: 23,
        marks: [10, 5, 7, 7, 1]
    },
]

// 1. Створити Human, який приймає в аргументи об'єкт і створює властивості name, surname та age.
// Human також містить методи:
// getFulsurname() - віддає стрінгу повного ім'я, утвореного з name, surname,
// setFullName(fullName) - розбиває рядок на name, surname

class Human {
    constructor({ name, surname, age }) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    getFullName() {
        return this.fullName = `${this.name} ${this.surname}`;
    }

    setFullName() {
        [this.name, this.surname] = this.fullName.split(' ');
    }
}


// 2. Створити клас Student, яку я зможу використати так:
// let s = new Student(info) // де info.marks = [10,9,8,1,10] та всі інші властивості name, age …
// У кожного студента повинні бути такі методи
// getAverageMark() - повертає середню оцінку
// getMinMark() - повертає найменшу оцінку
// getMaxMark() - повертає максимальну оцінку

class Student extends Human {
    static maxMark = 10;

    constructor({ name, surname, age, marks }) {
        super({ name, surname, age } );
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

    constructor({ name, surname, age, marks }) {
        super({ name, surname, age, marks });
    }

    #cheat(values) {
        return values.map(value => value * 2 > Student.maxMark ? value = Student.maxMark : value *= 2 ) 
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
// getListOfnamesByAverageMark() - віддає масив імен студентів відсортований за найвищою середньою оцінкою.
// getStudentByName(name) - отримати один об'єкт студента за ім'ям.
// removeStudentByName(name) - видалити об'єкт студента, знайденого за ім'ям.
// updateStudentByName(new Student(...), name) - знайти об'єкт студента по name та замінити на student (новий екземпляр класа Student)

// 3.1 Створити метод, що шукає fakeStudent

class Teacher extends Human {
    constructor({ name, surname, age, group }) {
        super({ name, surname, age });
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
        this.group = this.group.filter(element => element.getFullName() !== name);

        return this.group;
    }

    updateStudentByName(newStudent, name) {
        this.group.forEach((element, index, array) => {
            if (element.getFullName() === name) {
                array[index] = newStudent;
            }
        })

        return this.group;
    }

    findFakeStudent() {
        const fakeStudent = this.group.find(element => element.getMinMark() !== Math.min(...element.marks));

        return `Fake student: ${fakeStudent.getFullName()}. Marks: ${fakeStudent.marks}`;
    }
}


let student1 = new Student(students[0]);
let student2 = new Student(students[1]);
let student3 = new Student(students[2]);
let student4 = new Student(students[3]);
let student5 = new Student(students[4]);

let fakeStudent = new FakeStudent(students[5]);

let teacher = new Teacher({ name: 'Nick', surname: 'Cave', age: 40, group: [student1, student2, student3, student4, student5, fakeStudent] });

console.log(teacher.updateStudentByName({ name: 'Anna', surname: 'Kuts', age: 20, marks: [] }, 'Tina Turner'));












