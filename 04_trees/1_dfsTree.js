function * DFS(root) {
    yield root
    for (const child of root.children) {
        yield * DFS(child)
    }
}

module.exports = DFS
