const fib = n => n <= 1 
    ? 1 
    : fib(n - 1) + fib(n - 2)

module.exports = fib
