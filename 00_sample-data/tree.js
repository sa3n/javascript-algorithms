module.exports = {
    root: {
        value: 1,
        children: [
            {
                value: 2,
                children: [
                    {
                        value: 4,
                        children: []
                    },
                    {
                        value: 5,
                        children: [
                            {
                                value: 6,
                                children: []
                            },
                            {
                                value: 7,
                                children: []
                            },
                            {
                                value: 8,
                                children: []
                            }
                        ]
                    }
                ]
            },
            {
                value: 3,
                children: []
            }
        ]
    }
}

// TREE STRUCTURE:
//
//             1
//             |
//     -----------------
//     2               3
//     |
// ---------
// 4       5
//         |
//     ---------  
//     6   7   8