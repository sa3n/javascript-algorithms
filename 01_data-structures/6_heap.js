// * Родитель больше всех своих потомков (maxHeap)
// * ... или наоброт — меньше (minHeap)
// * Кто из потомков больше/меньше — гарантии нет
// * Максимальное/минимальное значение — в корне

class MinHeap {
    constructor() {
        // FIXME: add null (simplify parent/children searching)
        this.elements = []
    }
    insert(element) {
        this.elements.push(element)
        this.heapifyUp()
    }
    heapifyUp(idx = this.elements.length - 1) {
        let currIdx = idx
        let parentIdx = this.getParentIdx(currIdx)
        while (this.elements[currIdx] < this.elements[parentIdx]) {
            this.swap(currIdx, parentIdx)
            currIdx = parentIdx
            parentIdx = this.getParentIdx(currIdx)
        }
    }
    heapifyDown(idx = 0) {
        let currIdx = idx
        let leftChildIdx = currIdx * 2 + 1
        let rightChildIdx = currIdx * 2 + 2
        while (this.elements[currIdx] > this.elements[leftChildIdx] || this.elements[currIdx] > this.elements[rightChildIdx]) {
            if (this.elements[leftChildIdx] < this.elements[rightChildIdx]) {
                this.swap(currIdx, leftChildIdx)
                currIdx = leftChildIdx
            } else {
                this.swap(currIdx, rightChildIdx)
                currIdx = rightChildIdx
            }
            leftChildIdx = currIdx * 2 + 1
            rightChildIdx = currIdx * 2 + 2
        }
    }
    getParentIdx(idx) {
        return idx % 2 == 0 ? ~~(idx / 2) - 1 : ~~(idx / 2)
    }
    swap(idx1, idx2) {
        [this.elements[idx1], this.elements[idx2]] = [this.elements[idx2],this.elements[idx1]]
    }
    getMin() {
        return this.elements[0]
    }
    extractMin() {
        const min = this.elements[0]
        this.elements[0] = this.elements.pop()
        this.heapifyDown()
        return min
    }
}

module.exports = {
    MinHeap
}