import { regFormConfig } from "./js/form-configs.js";
import { Validator } from "./js/validator.js";
import { Helpers} from "./js/helpers.js";

let form = document.registration;
let elements = form.elements;
let find = Helpers.findinDoc(form);


form.addEventListener('input', (e) => {
    let target = e.target;
    let errorBox = find(target.name);

    let isValid = Validator.validate(
        form,
        { [target.name]: regFormConfig[target.name] },
    );

    Helpers.removeError(target, errorBox);

    if (!isValid) {
        let errors = Validator.getErrors(form.name)?.[target.name];
        Helpers.addError(errors, target, errorBox)
    } else {
        target.classList.add('valid');
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault();

    [...elements].forEach( element => {
        if (element.type !== 'submit') {
            Helpers.removeError(element, find(element.name));
        }
    } )

    let isValid = Validator.validate(form, regFormConfig);

    if (!isValid) {
        let errors = Validator.getErrors(form.name);

        Object.entries(errors).forEach(([name, errorObject]) => {
            Helpers.addError(errorObject, elements[name], find(name));
        })
    } 

})








