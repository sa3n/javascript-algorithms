class Queue {
    constructor() {
        this.top = null
        this.tail = null
    }
    enqueue(node) {
        if (this.tail) {
            this.tail.next = node
        } else {
            this.top = node
        }
        this.tail = node
    }
    dequeue() {
        const ret = this.top
        this.top = this.top.next
        return ret
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

const node1 = new QueueNode('A')
const node2 = new QueueNode('B')
const node3 = new QueueNode('C')
const node4 = new QueueNode('D')
const node5 = new QueueNode('E')

const queue = new Queue()

queue.enqueue(node1)
queue.enqueue(node2)
// queue.dequeue()
queue.enqueue(node3)

console.log(queue)