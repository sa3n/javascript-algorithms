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
        this.root = null
    }
    *preOrderTraversal(root = this.root) {
        yield root
        if (root.leftChild) yield *this.preOrderTraversal(root.leftChild)
        if (root.rightChild) yield *this.preOrderTraversal(root.rightChild)
    }
    *inOrderTraversal(root = this.root) {
        if (root.leftChild) yield *this.preOrderTraversal(root.leftChild)
        yield root
        if (root.rightChild) yield *this.preOrderTraversal(root.rightChild)
    }
    *postOrderTraversal(root = this.root) {
        if (root.leftChild) yield *this.preOrderTraversal(root.leftChild)
        if (root.rightChild) yield *this.preOrderTraversal(root.rightChild)
        yield root
    }
    *BFS(root = this.root) {
        const queue = [this.root]
        while (queue.length) {
            const current = queue.shift()
            // FIXME: simplify
            if (current.leftChild) {
                queue.push(current.leftChild)
            }
            if (current.rightChild) {
                queue.push(current.rightChild)
            }
            yield current
        }
    }
    insert(node) {
        if (!this.root) {
            this.root = node
        } else {
            let it = this.preOrderTraversal()
            for (const currentNode of it) {
                // FIXME: simplify
                if (!currentNode.leftChild) {
                    currentNode.leftChild = node
                    node.parent = currentNode
                    break
                }
                if (!currentNode.rightChild) {
                    currentNode.rightChild = node
                    node.parent = currentNode
                    break
                }
            }
        }
    }
    find(value) {
        const it = this.preOrderTraversal()
        for (const node of it) {
            if (node.value === value) {
                return node
            }
        }
        return null
    }
    getMax() {
        let max = this.root.value 
        const it = this.preOrderTraversal()
        for (const node of it) {
            if (node.value > max) {
                max = node.value
            }
        }
        return max
    }
    getMin() {
        let min = this.root.value 
        const it = this.preOrderTraversal()
        for (const node of it) {
            if (node.value < min) {
                min = node.value
            }
        }
        return min
    }
    removeByValue (value) {
        const nodeToRemove = this.find(value)
        const rightMostNode = this.rightMostNode
        if (nodeToRemove === rightMostNode) {
            this.removeRightMostNode()
        } else {
            rightMostNode.parent = nodeToRemove.parent

            // FIXME: simplify
            if (nodeToRemove.leftChild !== rightMostNode) {
                rightMostNode.leftChild = nodeToRemove.leftChild
            }
            if (nodeToRemove.rightChild !== rightMostNode) {
                rightMostNode.rightChild = nodeToRemove.rightChild
            }
            
            // FIXME: simplify
            if (nodeToRemove.parent.leftChild === nodeToRemove) {
                nodeToRemove.parent.leftChild = rightMostNode
            }
            if (nodeToRemove.parent.rightChild === nodeToRemove) {
                nodeToRemove.parent.rightChild = rightMostNode
            }

            // FIXME: simplify
            if (rightMostNode.leftChild) {
                rightMostNode.leftChild.parent = rightMostNode
            }
            if (rightMostNode.rightChild) {
                rightMostNode.rightChild.parent = rightMostNode
            }
        }
    }
    removeRightMostNode() {
        const rightMostNode = this.rightMostNode
        // FIXME: simplify
        if (rightMostNode.parent.rightChild === rightMostNode) {
            rightMostNode.parent.rightChild = null
        }
        if (rightMostNode.parent.leftChild === rightMostNode) {
            rightMostNode.parent.leftChild = null
        }
        return rightMostNode
    }
    get rightMostNode() {
        const it = binaryTree.BFS()
        let rightMostNode
        for (const node of it) {
            rightMostNode = node
        }
        return rightMostNode
    }
}

module.exports = {
    BinaryTreeNode,
    BinaryTree
}