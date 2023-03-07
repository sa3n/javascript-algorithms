function DFS(adjacencyList, srcVertex, visited = []) {
    visited.push(srcVertex)
    const neighborsObj = adjacencyList[srcVertex]
    for (const vertex in neighborsObj) {
        if (!visited.includes(vertex)) {
            DFS(adjacencyList, vertex, visited)
        }
    }
    return visited
}

module.exports = DFS
