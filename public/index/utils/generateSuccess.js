const generateError = (message) => {
    const messageHolder = document.querySelector('.form-contact-status');
    messageHolder.innerHTML = `<p class="text-success mb-0">${message}</p>`;
}

module.exports = generateError;