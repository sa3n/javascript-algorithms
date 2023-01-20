// fib: с рекурсией без оптимизации
const fib = n => n <= 1 ? 1 : fib(n - 1) + fib(n - 2)

// fib: хвостовая рекурсия с мемоизацией
function fibTailCall (n, prev = 0, curr = 1) {
    if (n < 1) return curr
    return fib (n - 1, curr, prev + curr)
}

// fib: итеративно
function fibIterative (n) {
    const sign = n < 0 && n % 2 === 0 ? -1n : 1n
    n = Math.abs(n)
    if (n === 0) return 0n
    if (n === 1) return 1n
    let prev = 0n
    let curr = 1n
    for (let i = 1; i < n; i++) {
        [prev, curr] = [curr, prev + curr]
    }
    return curr * sign
}

// fib: с кешированием
const cache = new Map()

function fibWithCache (n) {
    if (n <= 1) return 1
    if (cache.has(n - 2) && cache.has(n - 1)) {
        console.log(n - 2, n - 1, 'from cache')
        return cache.get(n - 2) + cache.get(n - 1)
    } else {
        const pprev = fib(n - 2)
        const prev = fib(n - 1)
        cache.set(n - 2, pprev)
        cache.set(n - 1, prev)
        return pprev + prev
    }
}

module.exports = fib
