function arrangements(arr, n, result = []) {
    if (result.length === n) console.log(result)
    for (let i = 0; i < arr.length; i++) {
        const newArr = Array.from(arr)
        const current = newArr.splice(i, 1)
        arrangements(newArr, n, [...result, ...current])
    }
}

module.exports = arrangements