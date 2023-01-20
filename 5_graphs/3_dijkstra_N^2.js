// const { adjacencyMatrix } = require('../sample_graph')

function minDistFromSrcVertex(distanceFromSrc, processedVertexes) {
    const V = distanceFromSrc.length

    let min = Infinity
    let minIdx = -Infinity

    for (let v = 0; v < V; v++) {
        if (!processedVertexes[v] && min > distanceFromSrc[v]) {
            min = distanceFromSrc
            minIdx = v
        }
    }
    
    return minIdx
}

// srcVertex = номер вершины, с которой нужно начать!
// distanceFromSrc = массив расстояний от начальной вершины до всех остальных
// processedVertexes = массив обработанных вершины

function dijkstra(graph, srcVertex) {
    const V = graph.length
    
    const distanceFromSrc = new Array(V).fill(Infinity)
    distanceFromSrc[srcVertex] = 0

    const processedVertexes = new Array(V).fill(false)

    for (let round = 0; round < V - 1; round++) {
        const u = minDistFromSrcVertex(distanceFromSrc, processedVertexes)
        processedVertexes[u] = true
        for (let v = 0; v < V; v++) {
            if (!processedVertexes[v] && graph[u][v]) {
                distanceFromSrc[v] = Math.min(distanceFromSrc[v], distanceFromSrc[u] + graph[u][v])
            }
        }
    }

    return distanceFromSrc
}

// console.log(dijkstra(adjacencyMatrix, 0))

module.exports = dijkstra