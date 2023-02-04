const getDigit = (n, position) => ~~(n / 10**position) % 10

function radixSort(arr, maxLen) { 
    for (let k = 0; k < maxLen; k++) {
        const buckets = new Array(10)
            .fill().map(e => [])
        for (const num of arr) {
            const bucketIdx = getDigit(num, k)
            buckets[bucketIdx].push(num)
        }
        arr = buckets.flat()
    }
    return arr
}

module.exports = radixSort