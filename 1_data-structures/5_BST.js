class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }

    insert(value) {
        let node = new Node(value)
        if (this.root === null) {
            this.root = node
            return
        } else {
            let current = this.root
            while (true) {
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = node
                        return
                    } else {
                        current = current.left
                    }
                } else {
                    if (current.right === null) {
                        current.right = node
                        return
                    } else {
                        current = current.right
                    }
                }
            }
        }
    }
    find(value) {
        if (this.root === null) return false
        let current = this.root
        let found = false
        while (current && !found) {
            // console.log(current)
            if (value < current.value) {
                current = current.left
            } else if (value > current.value) {
                current = current.right
            } else {
                found = true
            }
        }
        return found ? current : false
    }
    BFS() {
        const data = []
        const queue = []
        let node = this.root
        queue.push(this.root)
        while (queue.length) {
            node = queue.shift()
            data.push(node.value)
            if (node.left)
                queue.push(node.left)
            if (node.right)
                queue.push(node.right)
        }
        return data
    }
    DFS(order = "pre-order") {
        const data = []
        function traverse(node) {
            if (order === 'pre-order') 
                data.push(node.value)
            if (node.left)
                traverse(node.left)
            if (order === 'in-order') 
                data.push(node.value)
            if (node.right)
                traverse(node.right)
            if (order === 'post-order') 
                data.push(node.value)
        }
        traverse(this.root)
        return data
    }
}

const bst = new BST()

bst.root = new Node(10)
bst.root.left = new Node(5)
bst.root.right = new Node(13)
bst.root.left.left = new Node(2)
bst.root.left.right = new Node(7)
bst.root.right.right = new Node(16)

//      10
//  5       13
// 2 7     - 16

bst.insert(11)
console.log(bst.find(7))
console.log(bst.BFS())
console.log(bst.DFS())
console.log(bst.DFS('in-order'))
console.log(bst.DFS('post  -order'))

// console.dir(bst, { depth: 10 })
