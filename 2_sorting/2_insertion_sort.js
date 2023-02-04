function insertionSort(arr) {
    for (let currIdx = 1; currIdx < arr.length; currIdx++) {
        for (let i = 0; i < currIdx; i++) {
            if (arr[currIdx] < arr[i]) {
                const current = arr.splice(currIdx, 1)
                arr.splice(i, 0, ...current)
            }
        }
    }
    return arr
}

module.exports = insertionSort