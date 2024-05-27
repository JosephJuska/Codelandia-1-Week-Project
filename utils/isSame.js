const isSame = (obj1, obj2, excludedKeys=[]) => {
    const excludedSet = new Set(excludedKeys);
    for (const key in obj1) {
        if (excludedSet.has(key)) {
            continue;
        }
        
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    for (const key in obj2) {
        if (!excludedSet.has(key) && !(key in obj1)) {
            return false;
        }
    }

    return true;
}

module.exports = isSame;