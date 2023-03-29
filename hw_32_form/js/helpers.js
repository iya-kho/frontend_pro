export const Manipulator = {

    findinDoc: (container) => {
        return (selector) => container.querySelector(`[data-for="${selector}"]`);
    },
    
    removeError: (input, errorMessageContainer) => {
        errorMessageContainer.innerHTML = '';
        input.classList.remove('error');
    },

    addError: (errorsList, input, errorMessageContainer) => {
        let fullMessage = Object.values(errorsList).map(message => `<span>${message}</span>`).join('<br>');
        input.classList.add('error');
        errorMessageContainer.innerHTML = fullMessage;
        console.log(errorsList);
    }
}


