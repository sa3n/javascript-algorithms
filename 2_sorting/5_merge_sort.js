function mergeSort(arr) {
    if (arr.length <= 1) return arr

    const mid = ~~(arr.length / 2)
    const leftPart = mergeSort(arr.slice(0, mid))
    const rightPart = mergeSort(arr.slice(mid))

    return merge(leftPart, rightPart)
}

function merge(arr1, arr2) {
    const result = []
    while (arr1.length > 0 && arr2.length > 0) {
        arr1[0] < arr2[0] 
            ? result.push(arr1.shift())
            : result.push(arr2.shift())
    }
    return result.concat(arr1, arr2)
}

// console.log(merge([1, 3, 5], [2, 4, 4, 6, 7]))
// console.log(mergeSort([3, 4, 2, 1, 7, 5, 6]))

module.exports = mergeSort