import { isNotEmpty, isBetween, validateEmail, saveValue, isSameValue} from "./validator.js";

export const regFormConfig = {
    'username': [isNotEmpty, isBetween({minLength: 3, maxLength: 25})],
    'email': [isNotEmpty, validateEmail],
    'password': [isNotEmpty, isBetween({minLength: 8}), saveValue('password')],
    'confirm-password': [isNotEmpty, isSameValue('password')],
};