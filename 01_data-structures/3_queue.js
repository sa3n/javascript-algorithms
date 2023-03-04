class Queue {
    constructor() {
        this.head = null
        this.tail = null
    }
    enqueue(node) {
        if (!this.head) {
            this.head = node
        }
        
        if (!this.tail) {
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
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