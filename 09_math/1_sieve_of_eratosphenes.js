const { sqrt } = Math

function eratosphenes(n) {
    const sieve = new Array(n + 1).fill(true)
    for (let i = 2; i <= sqrt(n); i++) {
        if (sieve[i] === false) continue
        for (let j = 2; i * j <= n; j++) {
            sieve[i * j] = false
        }
    }
    sieve[0] = false
    sieve[1] = false
    return sieve
}