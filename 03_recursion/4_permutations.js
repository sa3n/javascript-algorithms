function permutations(arr, result = []) {
    if (!arr.length) console.log(result)
    for (let i = 0; i < arr.length; i++) {
        const newArr = Array.from(arr)
        const current = newArr.splice(i, 1)[0]
        permutations(newArr, [...result, current])
    }
}

module.exports = permutations