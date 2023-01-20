const arr = require('../sample_array.js')

const { min } = Math

// finding the minimum element from the unsorted part
// and placing it before the firt larger element of sorted part
// O(n^2)

function selectionSort(arr) {
    for (let currIdx = 0; currIdx < arr.length; currIdx++) {
        const unsortedPart = arr.slice(currIdx + 1)
        const unsortedPartMin = min(...unsortedPart)
        if (arr[currIdx] > unsortedPartMin) {
            const minIdx = arr.indexOf(unsortedPartMin)
            [arr[currIdx], arr[minIdx]] = [arr[minIdx], arr[currIdx]]
        }
    }
    return arr
}

console.log(selectionSort(arr))

// module.exports = selectionSort