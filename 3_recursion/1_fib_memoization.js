const fibMem = (n, prev = 0, curr = 1) => n < 1 
    ? curr 
    : fib (n - 1, curr, prev + curr)

module.exports = fibMem
