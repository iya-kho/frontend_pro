import { isNotEmpty, length, validateEmail, saveValue, isSameValue} from "./validator.js";

export const regFormConfig = {
    'username': [isNotEmpty, length({minLength: 3, maxLength: 25})],
    'email': [isNotEmpty, validateEmail],
    'password': [isNotEmpty, length({minLength: 8}), saveValue('password')],
    'confirm-password': [isNotEmpty, isSameValue('password')],
};