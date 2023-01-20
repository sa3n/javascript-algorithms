const  getDigit = (n, position) => ~~(n / 10**(position)) % 10 // позиции от 0 справа налево

function radixSort(arr, mostDigits) {
    for (let k = 0; k < mostDigits; k++) {
        const buckets = new Array(10).fill().map(elem => [])
        for (let i = 0; i < arr.length; i++) {
            let digit = getDigit(arr[i], k)
            buckets[digit].push(arr[i])
        }
        arr = [].concat(...buckets)
    }
    return arr
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852], 4))