function quickSort(arr) {
    if (arr.length <= 1) return arr
    const anchor = arr.pop()
    const ltAnchor = quickSort(arr.filter(elem => elem < anchor))
    const gteAnchor = quickSort(arr.filter(elem => elem >= anchor))
    return [...ltAnchor, anchor, ...gteAnchor]
}

module.exports = quickSort
