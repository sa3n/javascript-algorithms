function bubbleSort(arr) {
    for (let round = 0; round < arr.length; round++) {
        let swaps = 0
        for (let currIdx = 1; currIdx < arr.length; currIdx++) {
            const prevIdx = currIdx - 1
            if (arr[currIdx] < arr[prevIdx]) {
                [arr[currIdx], arr[prevIdx]] = [arr[prevIdx], arr[currIdx]]
                swaps++
            }
        }
        if (swaps === 0) break
    }
    return arr
}

module.exports = bubbleSort