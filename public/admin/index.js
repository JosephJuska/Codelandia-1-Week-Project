const editHandler = require('./events/editHandler');
const deleteHandler = require('./events/deleteHandler');
const onDataChangeHandler = require('./events/onDataChangeHandler');

const editButton = document.getElementById('edit');
const deleteButton = document.getElementById('delete');

const handleContentLoaded = async () => {
    onDataChangeHandler();
    editButton.addEventListener('click', editHandler);
    deleteButton.addEventListener('click', deleteHandler);
}

document.addEventListener('DOMContentLoaded', handleContentLoaded);