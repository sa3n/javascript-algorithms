function quickSort(arr) {
    if (arr.length <= 1) return arr
    const anchor = arr.pop()
    const ltAnchor = arr.filter(elem => elem < anchor)
    const gteAnchor = arr.filter(elem => elem >= anchor)
    return [...quickSort(ltAnchor), anchor, ...quickSort(gteAnchor)]
}

module.exports = quickSort
