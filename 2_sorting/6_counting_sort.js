function countingSort(arr, range) {
    const result = new Array(9).fill(0)
    
    for (const elem of arr) {
        result[elem] += 1
    }

    return result
        .map((value, index) => new Array(value).fill(index))
        .flat()
}

// countingSort([1, 4, 1, 2, 7, 5, 2], 9)

module.exports = countingSort