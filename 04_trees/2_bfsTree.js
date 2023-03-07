function * BFS(root) {
    const queue = [root]
    while (queue.length > 0) {
        const current = queue.shift()
        yield current
        queue.push(...current.children)
    }
}

module.exports = BFS