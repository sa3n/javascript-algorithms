function getLISLength(arr) {
    const lis = new Array(arr.length).fill(1)
    
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                lis[i] = Math.max(lis[i], 1 + lis[j])
            }
        }
    }

    return Math.max(...lis)
}

module.exports = getLISLength