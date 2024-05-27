const { TABLE_KEYS } = require("../utils/constants");
const getCurrentTime = require("../utils/getCurrentTime");
const { getTableData, addToTable, deleteFromTable, updateTableData } = require("./baseService");

const getMessages = () => {
    const messages = getTableData(TABLE_KEYS.MESSAGES);
    return messages;
};

const getMessage = (id) => {
    const messages = getMessages();
    const message = messages.find(message => message.id === id);
    return message;
};

const addMessage = (message) => {
    message.createdAt = getCurrentTime();
    message.updatedAt = null;
    const newMessage = addToTable(TABLE_KEYS.MESSAGES, message);
    return newMessage;
};

const deleteMessage = (id) => {
    deleteFromTable(TABLE_KEYS.MESSAGES, id);
}

const updateMessage = (message, isSame) => {
    if(!isSame) message.updatedAt = getCurrentTime();
    updateTableData(TABLE_KEYS.MESSAGES, message);
};

module.exports = {
    getMessages,
    getMessage,
    addMessage,
    deleteMessage,
    updateMessage
}