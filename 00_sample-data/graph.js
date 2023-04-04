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
    B: { D: 4, E: 2 },
    C: { B: 8, E: 7 },
    D: { E: 6, F: 3 },
    E: { },
    F: { }
}

const undirectedAdjacencyList = {
    A: { B: 5, C: 2 },
    B: { A: 5, C: 8, D: 4, E: 2 },
    C: { A: 2, B: 8, E: 7 },
    D: { B: 4, E: 6, F: 3 },
    E: { B: 2, C: 7, D: 6 },
    F: { D: 3 }
}

const adjacencyMatrix = [
    //       A  B, C, D, E, F
    /* A */ [0, 5, 2, 0, 0, 0], 
    /* B */ [0, 0, 0, 4, 2, 0], 
    /* C */ [0, 8, 0, 0, 7, 0], 
    /* D */ [0, 0, 0, 0, 6, 3], 
    /* E */ [0, 0, 0, 0, 0, 0], 
    /* F */ [0, 0, 0, 0, 0, 0]  
    ]

module.exports = {
    edgeList,
    adjacencyList,
    undirectedAdjacencyList,
    adjacencyMatrix
}

// GRAPH STRUCTURE

// A ---------> B ---------> D
// |           ^|           /|
// |         _| |         _| |
// |       _|   |       _|   |
// |     _|     |     _|     |
// |   _|       |   _|       |
// V _/         V  |         V
// C ---------> E <|         F