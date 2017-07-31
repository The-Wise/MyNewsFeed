const itemsToRows = (items, itemsInRow) => {
    const rows = [];
    let count = 0;
    const len = items.length;
    while (count < len) {
        const row = [];
        for (let i = 0; i < itemsInRow; i += 1) {
            if (items[count]) {
                row.push(items[count]);
                count += 1;
            }
        }
        rows.push(row);
        }

    return rows;
};

module.exports = itemsToRows;
