const generateID = (data) => {
    const ids = data.map(data => data.id);
    if(ids.length === 0) return 1;
    const maxID = Math.max(...ids);
    return maxID + 1;
};

module.exports = generateID;