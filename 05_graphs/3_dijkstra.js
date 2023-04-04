const { undirectedAdjacencyList } = require('../00_sample-data/graph.js')

function dijkstra(adjacencyList, from) {
    const distances = {}
    for (const key in adjacencyList) {
        distances[key] = key === from ? 0 : Infinity
    }
    const priorityQueue = []
    priorityQueue.push({ vertex: from, distance: 0 })
    while (priorityQueue.length) {
        priorityQueue.sort((a, b) => a.distance - b.distance)
        const current = priorityQueue.shift()
        const u = current.vertex        // u = FROM
        for (v in adjacencyList[u]) {   // v = TO
            const distanceUV = adjacencyList[u][v]
            if (distances[v] > distances[u] + distanceUV) {
                distances[v] = distances[u] + distanceUV
                priorityQueue.push({ vertex: v, distance: distances[v] })
            }
        }
    }
    return distances
}

module.exports = dijkstra