const arr = require('../sample_sorted_array')

function binarySearch(arr, target) {
    let startIdx = 0
    let endIdx = arr.length - 1
    while (endIdx - startIdx > 1) {
        const midIdx = ~~((startIdx + endIdx) / 2)
        if (arr[midIdx] === target) return [true, midIdx]
        arr[midIdx] > target ? endIdx = midIdx : startIdx = midIdx 
    }
    return [false, -1]
}

console.log(arr)
console.log(binarySearch(arr, 28))

// module.exports = binarySearch}