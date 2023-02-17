const tree = require('../sample-data/tree')

function bfsTree(treeNode) {
    const queue = [treeNode]

    while (queue.length) {
        const current = queue.shift()
        console.log(current.value)
        queue.push(...current.children)
    }
}

bfsTree(tree.root)