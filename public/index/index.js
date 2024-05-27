const onDataChangeHandler = require('./events/onDataChangeHandler');
const createHandler = require('./events/createHandler');
const createButton = document.getElementById('form-contact-submit');


const handleContentLoaded = async () => {
    onDataChangeHandler();
    createButton.addEventListener('click', createHandler);
}

document.addEventListener('DOMContentLoaded', handleContentLoaded);