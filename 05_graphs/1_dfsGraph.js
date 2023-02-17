const { adjacencyList2 } = require('../sample-data/graph')

const visited = []

function dfsGraph(adjacencyList, srcVertex) {
    console.log(srcVertex)
    visited.push(srcVertex)
    for (neighbor in adjacencyList[srcVertex]) {
        if (!visited.includes(neighbor)) {
            dfsGraph(adjacencyList, neighbor)
        }
    }
}

dfsGraph(adjacencyList2, 'A')

// ! проверить на других графах!