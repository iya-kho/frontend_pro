import validationError from './validation-error.js';

export const Validator = {
  errors: {},
  emailFormat: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  valuesToCompare: {},

  validators: {
    isNotEmpty: {
      validate: value => value !== '',
      message: "The field can't be blank",
      errorType: 'required',
    },
    isNumber: {
      validate: value => !isNaN(value) && Number.isInteger(+value),
      message: 'The field must be an integer',
      errorType: 'number',
    },
    isBetween({ minLength = 1, maxLength = 50 }) {
      return {
        validate: value => value.length >= minLength && value.length <= maxLength,
        message: `The field must be between ${minLength} and ${maxLength} characters`,
        errorType: 'length',
      };
    },
    validateEmail: {
      validate: value => Validator.emailFormat.test(value),
      message: 'The email format is not valid',
      errorType: 'invalid email format',
    },
    saveValue(valueToCompare) {
      return {
        validate: value => (Validator.valuesToCompare[valueToCompare] = value),
        message: '',
        errorType: '',
      };
    },
    isSameValue(valueToCompare) {
      return {
        validate: value => Validator.valuesToCompare[valueToCompare] === value,
        message: 'Please enter the password again',
        errorType: 'passwords do not match',
      };
    },
  },

  validate(form, config) {
    if (!(form instanceof HTMLFormElement)) {
      throw new validationError('No such form');
    }

    let elements = form.elements;
    this.errors[form.name] = {};

    for (const [inputName, inputValidators] of Object.entries(config)) {
      if (!inputValidators.length) {
        continue;
      }

      if (!elements[inputName]) {
        throw new validationError(`The ${inputName} doesn't exist in the ${form.name}`);
      }

      const value = elements[inputName].value;
      let errors = this.errors[form.name];

      inputValidators.forEach(({ validate, message, errorType }) => {
        if (!validate(value)) {
          errors[inputName] = {
            ...errors[inputName],
            [errorType]: message,
          };
        }
      });
    }

    return !this.hasError(form.name);
  },

  getErrors(formName) {
    return this.errors[formName];
  },

  hasError(formName) {
    return !!Object.keys(this.errors[formName]).length;
  },
};

export const { isNotEmpty, isNumber, isBetween, validateEmail, saveValue, isSameValue } =
  Validator.validators;
