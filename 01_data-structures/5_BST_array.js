class BST {
    constructor (elements) {
        this.elements = [null, ...elements]
    }
    find(value) {
        let idx = 1
        while (idx < this.nodes.length) {
            if (this.nodes[idx] === value) {
                return idx
            } else if (this.nodes[idx] === null) {
                return -1
            } else if (this.nodes[idx] > value) {
                idx = idx * 2
            } else if (this.nodes[idx] < value) {
                idx = idx * 2 + 1
            }
        }
    }
    getMax () {
        return this.elements.at(-1)
    }
    getMin () {
        return this.elements[0]
    }
    getParent(idx) {
        if (idx <= 1) return null
        return this.elements[~~(idx / 2)]
    }
    getChildren(idx) {
        const leftChild = this.elements[idx * 2] 
        const rightChild = this.elements[idx * 2 + 1] 
        return [leftChild || null, rightChild || null]
    }
    *traverse() {
        for (const node of this.nodes) {
            yield node
        }
    }
}

module.exports = {
    BST
}