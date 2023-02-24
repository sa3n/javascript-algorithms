class BSTNode {
    constructor(value) {
        this.value = value
        this.leftChild = null
        this.rightChild = null
    }
}

class BST {
    constructor() {
        this.root = null
    }
    insert(node) {
        if (!this.root) {
            this.root = node
        } else {
            let current = this.root
            while (true) {
                if (node.value < current.value) {
                    if (!current.leftChild) {
                        current.leftChild = node
                        return
                    } else {
                        current = current.leftChild
                    }
                } else {
                    if (!current.rightChild) {
                        current.rightChild = node
                        return
                    } else {
                        current = current.rightChild
                    }
                }
            }
        }
    }
    *BFS() {
        const queue = []
        let node = this.root
        queue.push(this.root)
        while (queue.length) {
            node = queue.shift()
            yield node
            if (node.leftChild) {
                queue.push(node.leftChild)
            }
            if (node.rightChild) {
                queue.push(node.rightChild)
            }
        }
    }
    *DFS(node = this.root) {
        yield node
        if (node.leftChild) {
            yield * this.DFS(node.leftChild)
        }
        if (node.rightChild) {
            yield * this.DFS(node.rightChild)
        }
    }
    find(value) {
        let current = this.root
        while (current) {
            if (current.value === value) {
                return current
            } else if (current.value < value) {
                current = current.rightChild
            } else {
                current = current.leftChild
            }
        }
        return null
    }
    getMax() {
        let current = this.root
        while (true) {
            if (current.rightChild) {
                current = current.rightChild
            } else {
                return current.value
            }
        }
    }
    getMin() {
        let current = this.root
        while (true) {
            if (current.leftChild) {
                current = current.leftChild
            } else {
                return current.value
            }
        }
    }
    getParent(value) {
        let current = this.root
        while (current) {
            if ([current.leftChild?.value, current.rightChild?.value].includes(value)) {
                return current
            } else if (current.value < value) {
                current = current.rightChild
            } else {
                current = current.leftChild
            }
        }
    }
    getChildren(value) {
        let targetNode = this.find(value)
        return [targetNode.leftChild, targetNode.rightChild]
    }
}

module.exports = {
    BSTNode,
    BST
}