const arr = require('../sample_array.js')

// take element and compare it with elements on the left of it
// place it just behind the element smaller than it
// O(n^2)

function insertionSort(arr) {
    for (let currIdx = 1; currIdx < arr.length; currIdx++) {
        for (let i = 0; i < currIdx; i++) {
            if (arr[currIdx] < arr[i]) {
                const current = arr.splice(currIdx, 1)
                arr.splice(i, 0, current[0])
            }
        }
    }
    return arr
}

console.log(insertionSort(arr))

// module.exports = insertionSort