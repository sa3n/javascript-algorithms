function mergeSort(arr) {
    if (arr.length <= 1) return arr
    const midIdx = ~~(arr.length / 2)
    const left = mergeSort(arr.slice(0, midIdx))
    const right = mergeSort(arr.slice(midIdx))
    return merge(left, right)
}

function merge(arr1, arr2) {
    const result = []
    while (arr1.length && arr2.length) {
        arr1[0] < arr2[0] 
            ? result.push(arr1.shift())
            : result.push(arr2.shift())
    }
    return result.concat(arr1, arr2)
}

module.exports = mergeSort