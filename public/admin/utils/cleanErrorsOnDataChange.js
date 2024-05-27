const cleanErrorsOnDataChange = (input, errorContainer) => {
    const messageHolder = document.querySelector('.show-message');
    input.addEventListener('input', () => {
        errorContainer.innerHTML = '';
        messageHolder.innerHTML = '';
    });
}

module.exports = cleanErrorsOnDataChange;