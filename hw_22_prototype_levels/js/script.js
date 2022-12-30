const obj = { a: 1 };
const obj2 = Object.create(obj);
const obj3 = Object.create(obj2);

function layersOfInheritance(object, layersNumber = 0) {
    if (Object.getPrototypeOf(object) === null) {
        return layersNumber;
    } else {
        return layersOfInheritance(Object.getPrototypeOf(object), layersNumber += 1);
    }
}

console.log(layersOfInheritance({})); 
console.log(layersOfInheritance(new Date())); 
console.log(layersOfInheritance(obj3)); 


