class BinaryTreeNode {
    constructor(value) {
        this.value = value
        this.leftChild = null
        this.rightChild = null
        this.parent = null
    }
    get isLeaf() {
        return !this.leftChild && !this.rightChild
    }
}

class BinaryTree {
    constructor() {
        // FIXME: use LinkedList only!
        this.nodes = []
    }
    insert(node) {
        if (this.root) {
            let idx = this.nodes.indexOf(null)
            if (idx === -1) idx = this.nodes.length
            console.log('idx', idx)
            const parentIdx = ~~((idx - 1) / 2)
            node.parent = this.nodes[parentIdx]
            if (!node.parent.leftChild) {
                node.parent.leftChild = node
            } else {
                node.parent.rightChild = node
            }
            this.nodes[idx] = node
        } else {
            this.nodes.push(node)
        }
    }
    *preOrderTraversal(root = this.root) {
        yield root.value
        if (root.leftChild) yield *this.preorderTraveral(root.leftChild)
        if (root.rightChild) yield *this.preorderTraveral(root.rightChild)
    }
    *inOrderTraversal(root = this.root) {
        if (root.leftChild) yield *this.preorderTraveral(root.leftChild)
        yield root.value
        if (root.rightChild) yield *this.preorderTraveral(root.rightChild)
    }
    *postOrderTraversal(root = this.root) {
        if (root.leftChild) yield *this.preorderTraveral(root.leftChild)
        if (root.rightChild) yield *this.preorderTraveral(root.rightChild)
        yield root.value
    }
    get root() {
        return this.nodes[0]
    }
    find(value) {
        for (const node of this.nodes) {
            if (node?.value === value) {
                return node
            }
        }
        return null
    }
    getMax() {
        if (!this.nodes.length) return null
        let maxValue = this.root.value
        let maxNode = this.root
        for (const node of this.nodes) {
            if (node.value > maxValue) {
                maxValue = node.value
                maxNode = node
            }
        }
        return maxNode
    }
    getMin() {
        if (!this.nodes.length) return null
        let minValue = this.root.value
        let minNode = this.root
        for (const node of this.nodes) {
            if (node.value < minValue) {
                minValue = node.value
                minNode = node
            }
        }
        return minNode
    }
    remove(value) {
        const node = this.find(value)
        if (!node) return
        if (node.isLeaf) {
            // TODO: no childs
        }
        if (node.leftChild && node.rightChild) {
            // TODO: both childs
        }
        if (node.rightChild ^ !node.leftChild) {
            // TODO: one child
        }
    }
}

module.exports = {
    BinaryTreeNode,
    BinaryTree
}