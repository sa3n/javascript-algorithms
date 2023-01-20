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
        if (this.top !== null) {
            this.top = this.top.next
        }
        return removed
    }

    pick() {
        return this.top
    }
}

class StackNode {
    constructor(value, next = null) {
        this.value = value
        this.next = next
    }
}

// value
// next

const node1 = new StackNode('A')
const node2 = new StackNode('B')
const node3 = new StackNode('C')
const node4 = new StackNode('D')
const node5 = new StackNode('E')

const stack = new Stack()

stack.push(node1)
stack.push(node2)
console.log(stack.pop())

console.dir(stack, { depth: 6 })