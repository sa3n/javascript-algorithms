function combinations(arr, k, result = []) {
    if (arr.length === k) {
        result.push(arr)
        return
    }
    for (let i = 0; i < arr.length; i++) {
        combinations([...arr.slice(0, i), ...arr.slice(i + 1)].sort(), k, result)
    }
    return Array
        .from(new Set(result.map(JSON.stringify)))
        .map(JSON.parse)
}

module.exports = combinations