class Tree {
    constructor() {
        this.root = null
    }

}

class TreeNode {
    constructor(value) {
        this.value = value
        this.children = []
    }
    addChild(node) {
        this.children.push(node)
    }
    removeChild(value) {
        const targetIdx = this.children.indexOf(value)
        if (targetIdx >= 0) {
            this.children.splice(targetIdx, 1)
        }
    }
}

const tree = new Tree()
const node1 = new TreeNode(1)
const node2 = new TreeNode(2)
const node3 = new TreeNode(3)
const node4 = new TreeNode(4)
const node5 = new TreeNode(5)
const node6 = new TreeNode(6)
const node7 = new TreeNode(7)
const node8 = new TreeNode(8)

node1.addChild(node2)
node1.addChild(node3)
node2.addChild(node4)
node2.addChild(node5)
node5.addChild(node6)
node5.addChild(node7)
node5.addChild(node8)

tree.root = node1

// console.dir(tree, { depth: Infinity })

module.exports = tree