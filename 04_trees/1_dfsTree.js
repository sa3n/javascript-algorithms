const tree = require('../00_sample-data/tree')

function dfsTree(treeNode) {
    console.log(treeNode.value)
    if (treeNode.children.length) {
        for (child of treeNode.children) {
            dfsTree(child)
        }
    }
}

dfsTree(tree.root) // 1 2 4 5 6 7 8 3