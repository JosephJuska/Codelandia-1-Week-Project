const cleanErrorsOnDataChange = (input, errorContainer) => {
    const messageHolder = document.querySelector('.form-contact-status');
    input.addEventListener('input', () => {
        errorContainer.innerHTML = '';
        messageHolder.innerHTML = '';
    });
}

module.exports = cleanErrorsOnDataChange;