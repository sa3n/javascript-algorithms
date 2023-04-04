var kadane = function (arr) {
    let maxGlobal = arr[0]
    let maxCurrent = arr[0]

    for (const elem of arr.slice(1)) {
        maxCurrent = Math.max(maxCurrent + elem, elem)
        maxGlobal = Math.max(maxCurrent, maxGlobal)
    }

    return maxGlobal
}

module.exports = kadane