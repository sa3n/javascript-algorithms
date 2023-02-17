function knapSack(bagCapacity, items) {
    const table = new Array(items.length + 1)
        .fill(0)
        .map(elem => new Array(bagCapacity + 1));
        
    for (let itemIdx = 0; itemIdx <= items.length; itemIdx++) {
        for (let weight = 0; weight <= bagCapacity; weight++) {
            if (itemIdx == 0 || weight == 0) {
                table[itemIdx][weight] = 0;
            }
            else if (items[itemIdx - 1].weight <= bagCapacity) {
                const currentItemProfitPlusSuitableItem = 
                    items[itemIdx - 1].profit 
                    + table[itemIdx - 1][weight - items[itemIdx - 1].weight] || 0 // can be NaN if not exists
                const prevRowValue = table[itemIdx - 1][weight]
                table[itemIdx][weight] = Math.max(currentItemProfitPlusSuitableItem, prevRowValue)
            }
            else {
                table[itemIdx][weight] = table[itemIdx - 1][weight]
            }
        }
    }

    return table
}

// const items = [
//     { profit: 1, weight: 2 },
//     { profit: 2, weight: 3 },
//     { profit: 5, weight: 4 },
//     { profit: 6, weight: 5 },
// ]

module.exports = knapSack