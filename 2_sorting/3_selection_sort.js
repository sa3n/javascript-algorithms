function selectionSort(arr) {
    for (let currIdx = 0; currIdx < arr.length; currIdx++) {
        const unsortedPart = arr.slice(currIdx + 1)
        const min = Math.min(...unsortedPart)
        if (arr[currIdx] > min) {
            const minIdx = arr.indexOf(min);
            [arr[currIdx], arr[minIdx]] = [arr[minIdx], arr[currIdx]]
        }
    }
    return arr
}

module.exports = selectionSort