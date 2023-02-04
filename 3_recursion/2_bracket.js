function * generate(n, result = '', opening = 0, closing = 0) {
    if(closing === n) {
        yield result
    }
    if (opening < n) {
        yield * generate(n, result + '(', opening + 1, closing)
    }
    if (closing < opening) {
        yield * generate(n, result + ')', opening, closing + 1)
    }
}

module.exports = generate