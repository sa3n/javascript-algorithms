const arr = require('../sample-data/array')

function bucketSort(arr) {
    const numOfBuckets = arr.length
    const max = Math.max(...arr) + 1
    
    const buckets = new Array(numOfBuckets)
        .fill(0)
        .map(elem => [])
    
    for (const elem of arr) {
        const bucketIdx = ~~((numOfBuckets * elem)/max)
        buckets[bucketIdx].push(elem)
    }
    
    for (let bucket of buckets) {
        bucket = insertionSort(bucket)
    }

    return buckets.flat()
}

function insertionSort(arr) {
    for (let curr = 1; curr < arr.length; curr++) {
        for (let i = 0; i < curr; i++) {
            if (arr[curr] < arr[i]) {
                arr.splice(i, 0, ...arr.splice(curr, 1))
            }
        }
    }
    return arr
}

module.exports = bucketSort