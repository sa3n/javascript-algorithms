class Stack {
    constructor() {
        this.top = null
    }

    push(node) {
        node.next = this.top
        this.top = node
    }

    pop() {
        const removed = this.top
        if (this.top.next) {
            this.top = this.top.next
        }
        return removed
    }

    pick() {
        return this.top
    }
}

class StackNode {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

module.exports = {
    StackNode,
    Stack
}