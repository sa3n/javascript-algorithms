const cache = new Map([[0, 1], [1, 1]])

const fibCache = n => {
    if (cache.has(n)) {
        return cache.get(n)
    } 
    if (cache.has(n - 1) && cache.has(n - 2)) {
        const sumFromCache = cache.get(n - 1) + cache.get(n - 2)
        cache.set(n, sumFromCache) 
    } 
    cache.set(n, fibCache(n - 1) + fibCache(n - 2))
    return cache.get(n)
}

module.exports = fibCache
