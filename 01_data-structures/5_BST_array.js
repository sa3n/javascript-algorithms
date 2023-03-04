// NOTE: elements in level-order (BFS)

class BST {
    constructor (elements) {
        this.elements = [null, ...elements]
    }
    find(value) {
        let idx = 1
        while (idx < this.elements.length) {
            if (this.elements[idx] === value) {
                return idx
            } else if (this.elements[idx] === null) {
                return -1
            } else if (this.elements[idx] > value) {
                idx = idx * 2
            } else if (this.elements[idx] < value) {
                idx = idx * 2 + 1
            }
        }
    }
    getMax () {
        let idx = 1
        while (this.elements[idx * 2 + 1]) {
            idx = idx * 2 + 1
        }
        return this.elements[idx]
    }
    getMin () {
        let idx = 1
        while (this.elements[idx * 2]) {
            idx = idx * 2
        }
        return this.elements[idx]
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