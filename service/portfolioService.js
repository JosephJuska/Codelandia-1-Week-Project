const { TABLE_KEYS } = require("../utils/constants");
const { getTableData, replaceTableData } = require("./baseService");

const getPortfolio = () => {
    const portfolio = getTableData(TABLE_KEYS.PORTFOLIO);
    return portfolio;
};

const updatePortfolio = (portfolio) => {
    replaceTableData(TABLE_KEYS.PORTFOLIO, portfolio);
}

module.exports = {
    getPortfolio,
    updatePortfolio
}