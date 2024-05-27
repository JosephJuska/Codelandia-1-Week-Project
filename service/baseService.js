const fs = require('fs');
const generateID = require('../utils/generateID');
const getRootPath = require('../utils/getRootPath');

const DB_PATH = getRootPath() + 'database/db.json';

const getAllData = () =>{
    const data = fs.readFileSync(DB_PATH, 'utf8');
    return JSON.parse(data);
}

const getTableData = (tableKey) =>{
    const allData = getAllData();
    return allData[tableKey];
}

const addToTable = (tableKey, data) =>{
    const allData = getAllData();
    const newData = {id:generateID(allData[tableKey]), ...data};
    allData[tableKey].push(newData);
    fs.writeFileSync(DB_PATH, JSON.stringify(allData, null, 2));
    return newData;
}

const deleteFromTable = (tableKey, id) =>{
    const allData = getAllData();
    allData[tableKey] = allData[tableKey].filter(x=>x.id !== id);
    fs.writeFileSync(DB_PATH, JSON.stringify(allData, null, 2));
}

const replaceTableData = (tableKey, data) => {
    const allData = getAllData();
    allData[tableKey] = data;
    fs.writeFileSync(DB_PATH, JSON.stringify(allData, null, 2));
}

const updateTableData = (tableKey, data) =>{
    const allData = getAllData();
    allData[tableKey] = allData[tableKey].filter(x=>x.id !== data.id);
    allData[tableKey].push(data);
    fs.writeFileSync(DB_PATH, JSON.stringify(allData, null, 2));
}

module.exports = {
    getAllData,
    getTableData,
    addToTable,
    deleteFromTable,
    updateTableData,
    replaceTableData
}

