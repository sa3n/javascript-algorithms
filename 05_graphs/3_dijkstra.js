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
        const u = current.vertex
        for (v in adjacencyList[u]) {
            const distance = adjacencyList[u][v]
            if (distances[v] > distances[u] + distance) {
                distances[v] = distances[u] + distance
                priorityQueue.push({ vertex: v, distance: distances[v] })
            }
        }
    }
    console.log(distances)
}

dijkstra(undirectedAdjacencyList, 'A')

module.exports = dijkstra