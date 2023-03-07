function BFS(adjacencyList, srcVertex) {
    const queue = [srcVertex]
    const visited = [srcVertex]
    while (queue.length > 0) {
        const current = queue.shift()
        for (const vertex in adjacencyList[current]) {
            if (!visited.includes(vertex)) {
                queue.push(vertex)
                visited.push(vertex)
            }
        }
    }
    return visited
}

module.exports = BFS