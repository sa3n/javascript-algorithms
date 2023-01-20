const arr = require('../sample_array.js')

class MaxHeap {
    constructor(arr) {
        this.nodes = []

        for (const node of arr) {
            this.add(node)
        } 
    }

    getParentIdx(idx) {
        return Math.floor((idx - 1) / 2)
    }

    getLeftChildIdx(idx) {
        return 2 * idx + 1
    }

    getRightChildIdx(idx) {
        return 2 * idx + 2
    }

    isLeaf(idx) {
        return idx >= Math.floor(this.nodex.length / 2)
    }

    swap(idx1, idx2) {
        [this.nodes[idx1], this.nodes[idx2]] = [this.nodes[idx2], this.nodes[idx1]]
    }

    add(node) {
        this.nodes.push(node)
        this.heapifyUp(this.nodes.length - 1)
    }

    heapifyUp(idx) {
        let currIdx = idx
        let parentIdx = this.getParentIdx(currIdx)

        while (currIdx > 0 && this.nodes[currIdx] > this.nodes[parentIdx]) {
            this.swap(currIdx, parentIdx)
            currIdx = parentIdx
            parentIdx = this.getParentIdx(currIdx)
        }
    }

    extractMax() {
        if (this.nodes.length < 1) throw new RangeError('heap is empty')

        const max = this.nodes[0]
        const last = this.nodes.pop()
        this.nodes[0] = last
        this.heapifyDown[0]
        return max
    }

    heapifyDown(idx) {
        if (this.isLeaf(idx)) return

        let leftChildIdx = this.getLeftChildIdx(idx)
        let rightChildIdx = this.getRightChildIdx(idx)
        let currLargestIdx = idx

        if (this.nodes[leftChildIdx] > this.nodes[currLargestIdx]) {
            currLargestIdx = leftChildIdx
        }

        if (this.nodes[rightChildIdx] >= this.nodes[currLargestIdx]) {
            currLargestIdx = rightChildIdx
        }

        if (currLargestIdx !== idx) {
            this.swap(idx, currLargestIdx)
            // RECURSION:
            this.heapifyDown(currLargestIdx)
        }
    }

    // peekMax
}

const maxHeap = new MaxHeap(arr)

console.log(maxHeap)

module.exports = MaxHeap

minheap = [null, 12, 20, 15, 29, 23, 17, 22, 35, 40, 26, 51, 19]

console.log(minheap.length)

function heapify(heap, idx = heap.length - 1) {
    while (idx > 0) {
        console.log(idx)
        const parentIdx = ~~(idx/2)
        if (heap[parentIdx] > heap[idx]) {
            [heap[parentIdx], heap[idx]] = [heap[idx], heap[parentIdx]]
            idx = parentIdx
        } else {
            break
        }
    }
}

minheap.push(13)

heapify(minheap)

console.log(minheap)