const editHandler = require('./events/editHandler');
const onDataChangeHandler = require('./events/onDataChangeHandler');

const editButton = document.getElementById('edit');

const handleContentLoaded = async () => {
    onDataChangeHandler();
    editButton.addEventListener('click', editHandler);
}

document.addEventListener('DOMContentLoaded', handleContentLoaded);