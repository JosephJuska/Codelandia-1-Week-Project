const generateError = (message) => {
    const messageHolder = document.querySelector('.show-message');
    messageHolder.innerHTML = `<p class="text-success">${message}</p>`;
}

module.exports = generateError;