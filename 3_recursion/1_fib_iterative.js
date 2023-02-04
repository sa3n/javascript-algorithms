const fibIter = n => {
    let prev = 0
    let curr = 1
    if (n <= 1) return curr
    for (let i = 0; i < n; i++) {
        [prev, curr] = [curr, prev + curr]
    }
    return curr
}

module.exports = fibIter
