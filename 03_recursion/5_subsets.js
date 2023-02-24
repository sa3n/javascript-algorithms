function subsets(arr, result = []) {
    result.push(arr)
    if (arr.length <= 1) return
    for (let i = 0; i < arr.length; i++) {
        const currentSlice = [...arr.slice(0, i), ...arr.slice(i + 1)]
        subsets(currentSlice, result)
    }
    return Array
        .from(new Set(result.map(JSON.stringify)))
        .map(JSON.parse)
        .concat([[]])
}

module.exports = subsets