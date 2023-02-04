function countingSort(arr, range) {
    const result = new Array(range).fill(0) 
    for (const elem of arr) {
        result[elem - 1] += 1
    }
    return result
        .flatMap((v, idx) => new Array(v).fill(idx + 1))
}

module.exports = countingSort