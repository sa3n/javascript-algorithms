class LinkedList {
    constructor() {
        this.head = null
    }

    insert(node) {
        node.next = this.head
        this.head = node
    }

    delete() {
        if (this.head) {
            this.head = this.head.next
        }
    }

    display() {
        const list = []
        let current = this.head
        while (current !== null) {
            list.push(current)
            current = current.next
        }
        return list
    }

    search(value) {
        let current = this.head
        while(current !== null) {
            if (current.value === value) {
                return current
            }
            current = current.next
        }
        return null
    }

    update(oldValue, newValue) {
        const targetNode = this.search(oldValue)
        if (targetNode) {
            targetNode.value = newValue
        }
    }
}

class LinkedListNode {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

module.exports = {
    LinkedListNode,
    LinkedList
}