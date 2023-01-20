const edgeList = [
    ['A', 'B'],
    ['A', 'C'],
    ['B', 'D'],
    ['B', 'E'],
    ['C', 'B'],
    ['C', 'E'],
    ['D', 'E'],
    ['D', 'F'],
]


const adjacencyList = {
    A: { B: 5, C: 2 },
    B: { A: 1, D: 4, E: 2 },
    C: { B: 8, E: 7 },
    D: { E: 6, F: 3 },
    E: { F: 1 },
    F: {}
}

const adjacencyList2 = {
    A: { B: 1, C: 1, G: 1 },
    B: { D: 1, E: 1 },
    C: { D: 1 },
    D: { E: 1, F: 1 },
    E: {},
    F: { G: 1},
    G: { C: 1}
}

const adjacencyMatrix = [
        //  B, C, D, E, F
        [0, 5, 2, 0, 0, 0], // A
        [1, 0, 0, 4, 2, 0], // B
        [0, 8, 0, 0, 7, 0], // C
        [0, 0, 0, 0, 6, 3], // D
        [0, 0, 0, 0, 0, 1], // E
        [0, 0, 0, 0, 0, 0]  // F
    ]

module.exports = {
    edgeList,
    adjacencyList,
    adjacencyList2,
    adjacencyMatrix
}