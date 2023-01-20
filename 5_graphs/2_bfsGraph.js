const { adjacencyList2 } = require('../sample-data/graph')

const queue = []
const visited = []
// const result = []

function bfsGraph(adjacencyList, srcVertex) {
    queue.push(srcVertex)
    visited.push(srcVertex)
    while (queue.length > 0) {
        const currentVertex = queue.shift()
        console.log(currentVertex)
        // result.push([])
        for (neighbor in adjacencyList[currentVertex]) {
            if (!visited.includes(neighbor)) {
                queue.push(neighbor)
                visited.push(neighbor)
                // result[result.length - 1].push(neighbor)
            }
        }
    }
    // console.log(result)
}

// result — пример распределения по уровням. Но требует доработки

bfsGraph(adjacencyList2, 'A')