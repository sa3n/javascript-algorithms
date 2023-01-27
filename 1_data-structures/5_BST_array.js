class BST {
    constructor (elements) {
        this.elements = [null, ...elements]
    }
    find (value) {
        let leftIdx = 1
        let rightIdx = this.elements.length
        while (rightIdx > leftIdx) {
            const midIdx = ~~((leftIdx + rightIdx) / 2)
            if (this.elements[midIdx] === value) {
                return midIdx
            } 
            this.elements[midIdx] > value 
                ? rightIdx = midIdx 
                : leftIdx = midIdx
        }
        return -1
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
        for (const element of this.elements) {
            if (element === null) {
                continue
            }
            yield element
        }
    }
}

module.exports = {
    BST
}