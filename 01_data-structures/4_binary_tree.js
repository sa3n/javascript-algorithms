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
    get hasFreeChild() {
        return !this.leftChild || !this.rightChild
    }
    insert(node) {
        if (!this.hasFreeChild) return
        node.parent = this
        if (!this.leftChild) {
            this.leftChild = node
        } else if (!node.rightChild) {
            this.rightChild = node
        }
    }
    get children() {
        const children = []
        if (this.leftChild) {
            children.push(this.leftChild) 
        }
        if (this.rightChild) {
            children.push(this.rightChild) 
        }
        return children
    }
    detachFromParent() {
        if (this.parent.rightChild === this) {
            this.parent.rightChild = null
        } else {
            this.parent.leftChild = null
        }
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
    *BFS() {
        const queue = [this.root]
        while (queue.length) {
            const current = queue.shift()
            queue.push(...current.children)
            yield current
        }
    }
    insert(node) {
        if (!this.root) {
            this.root = node
        } else {
            let it = this.BFS()
            for (const currentNode of it) {
                if (currentNode.hasFreeChild) {
                    return currentNode.insert(node)
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
    get rightMostNode() {
        const it = binaryTree.BFS()
        let rightMostNode
        for (const node of it) {
            rightMostNode = node
        }
        return rightMostNode
    }
    removeRightMostNode() {
        const targetNode = this.rightMostNode
        targetNode.detachFromParent()
        return targetNode
    }
    removeByValue(value) {
        const targetNode = this.find(value)
        if (targetNode.isLeaf) {
            targetNode.detachFromParent()
        } else if (targetNode.children.length === 1) {
            const newParent = targetNode.parent
            const child = targetNode.leftChild
            targetNode.detachFromParent()
            newParent.insert(child)
        } else {
            const newParent = targetNode.parent
            const newNode = this.removeRightMostNode()
            targetNode.detachFromParent()
            newNode.leftChild = targetNode.leftChild
            newNode.leftChild.parent = newNode
            newNode.rightChild = targetNode.rightChild
            newNode.rightChild.parent = newNode
            newParent.insert(newNode)
        }
    }
}

module.exports = {
    BinaryTreeNode,
    BinaryTree
}