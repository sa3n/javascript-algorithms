const arr = require('../sample_array')

// pick pivot
// put all elements smaller than pivot before pivot
// put all element greater then pivot after pivot
// O(n log n)

function quickSort(arr) {
    if (arr.length < 2) return arr
    const anchor = arr.pop()
    const lessThenAnchor = arr.filter(elem => elem < anchor)
    const moreOrEqualThenAnchor = arr.filter(elem => elem >= anchor)
    return [...quickSort(lessThenAnchor), anchor, ...quickSort(moreOrEqualThenAnchor)]
}

console.log(quickSort(arr))
