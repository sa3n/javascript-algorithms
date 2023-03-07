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
    adjacencyList2,
    adjacencyMatrix
}

// GRAPH STRUCTURE

// A ---------> B ---------> D
// |           ^|           /|
// |         _| |         _| |
// |       _|   |       _|   |
// |     _|     |     _|     |
// |   _|       |   _|       |
// V _|         |  |         V
// C ---------> E <|         F