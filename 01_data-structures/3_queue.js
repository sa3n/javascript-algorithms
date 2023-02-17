class Queue {
    constructor() {
        this.head = null
        this.tail = null
    }
    enqueue(node) {
        if (this.tail) {
            this.tail.next = node
        } else {
            this.head = node
        }
        this.tail = node
    }
    dequeue() {
        const removed = this.top
        this.head = this.head.next
        return removed
    }
    pick() {
        return this.tail
    }
}

class QueueNode {
    constructor (value) {
        this.value = value
        this.next = null
    }
}

module.exports = {
    QueueNode,
    Queue
}