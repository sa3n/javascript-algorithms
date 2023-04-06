class PriorityQueueNode {
    constructor(value, priority) {
        this.value = value
        this.priority = priority
    }
}

class PriorityQueue {
    constructor() {
        this.nodes = []
    }
    enqueue(node) {
        for (let i = 0; i < this.nodes.length; i++) {
            if (node.priority > this.nodes[i].priority) {
                this.nodes.splice(i, 0, node)
                return
            }
        }
        this.nodes.push(node)
    }
    dequeue(){
        if (this.nodes.length) {
            return this.nodes.shift()
        }
    }
    get first() {
        return this.nodes[0]
    }
    get last() {
        return this.nodes.at(-1)
    }
}

module.exports = {
    PriorityQueueNode,
    PriorityQueue
}
