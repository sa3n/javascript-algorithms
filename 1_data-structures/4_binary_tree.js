class BinaryTreeNode {
    constructor (value = null) {
        this.value = value
        this.parent = null
        this.leftChild = null
        this.rightChild = null
    }

    get isLeaf() {
        return this.leftChild === null && this.rightChild === null
    }

    get hasChildren() {
        return !this.isLeaf
    }
}


class BinaryTree {
    constructor() {
        this.root = null
    }

    insert(binaryTreeNode, parentNode) {
        if (!this.root) return this.root = binaryTreeNode
        if (!parentNode) throw new Error('Specify parent node!'), null
        const canInsertLeft = parentNode.leftChild === null 
        const canInsertRight = parentNode.rightChild === null
        if (!canInsertLeft && !canInsertRight) throw new Error('Cant insert!'), null
        if (canInsertLeft) {
            parentNode.leftChild = binaryTreeNode
            binaryTreeNode.parent = parentNode
            return true
        }
        if (canInsertRight) {
            parentNode.rightChild = binaryTreeNode
            binaryTreeNode.parent = parentNode
            return true
        }
    }

    * preorderTraversal(root = this.root) {
        yield root
        if (root.leftChild) yield * this.preorderTraversal(root.leftChild)
        if (root.rightChild) yield * this.preorderTraversal(root.rightChild)
    }

    * inorderTraversal(root = this.root) {
        if (root.leftChild) yield * this.inorderTraversal(root.leftChild)
        yield root
        if (root.rightChild) yield * this.inorderTraversal(root.rightChild)
    }
    
    * postorderTraversal(root = this.root) {
        if (root.leftChild) yield * this.postorderTraversal(root.leftChild)
        if (root.rightChild) yield * this.postorderTraversal(root.rightChild)
        yield root
    }

    find(targetValue) {
        const it = this.preorderTraversal()
        for (const node of it) {
            if (node.value === targetValue) {
                return node
            }
        }
        return null
    }

    getMax() {
        let max = this.root.value
        const it = this.preorderTraversal()
        for (const node of it) {
            if (node.value > max) {
                max = node.value
            }
        }
        return max
    }

    getMin() {
        let min = this.root.value
        const it = this.preorderTraversal()
        for (const node of it) {
            if (node.value < min) {
                min = node.value
            }
        }
        return min
    }

    remove(targetValue) {
        const node = this.find(targetValue)
        if (node) {
            if (node.isLeaf()) {
                // TODO: проверить левый это лист или правый и удалить!
            }
            if (!node.leftChild || !node.rightChild) {
                // TODO: если только один ребёнок, убрать эту вершину как промежуточную
            }
            // TODO: если два ребёнка...
        }
    }
}

const binaryTree = new BinaryTree()
const nodeA = new BinaryTreeNode('A')
const nodeB = new BinaryTreeNode('B')
const nodeC = new BinaryTreeNode('C')
const nodeD = new BinaryTreeNode('D')
const nodeE = new BinaryTreeNode('E')
const nodeF = new BinaryTreeNode('F')
const nodeG = new BinaryTreeNode('G')
const nodeH = new BinaryTreeNode('H')
const nodeI = new BinaryTreeNode('I')
const nodeJ = new BinaryTreeNode('J')
const nodeK = new BinaryTreeNode('K')
const nodeL = new BinaryTreeNode('L')
const nodeM = new BinaryTreeNode('M')
const nodeN = new BinaryTreeNode('N')
const nodeO = new BinaryTreeNode('O')
const nodeP = new BinaryTreeNode('P')

binaryTree.insert(nodeA)
binaryTree.insert(nodeB, nodeA)
binaryTree.insert(nodeC, nodeB)
binaryTree.insert(nodeD, nodeC)
binaryTree.insert(nodeE, nodeC)
binaryTree.insert(nodeF, nodeB)
binaryTree.insert(nodeG, nodeF)
binaryTree.insert(nodeH, nodeG)
binaryTree.insert(nodeI, nodeA)
binaryTree.insert(nodeJ, nodeI)
binaryTree.insert(nodeK, nodeJ)
binaryTree.insert(nodeL, nodeK)
binaryTree.insert(nodeM, nodeL)
binaryTree.insert(nodeN, nodeK)
binaryTree.insert(nodeO, nodeI)
binaryTree.insert(nodeP, nodeO)

// console.dir(binaryTree, { depth: Infinity })


// const preorderIt = binaryTree.preorderTraversal() // ABCDEFGHIJKLMNOP

// for (const node of preorderIt) {
//     console.log(node.value)
// }

// const inorderIt = binaryTree.inorderTraversal() // DCEBHGFAMLNKJIPO

// for (const node of inorderIt) {
//     console.log(node.value)
// }

// const postorderIt = binaryTree.postorderTraversal() // DECHGFBMLNKJPOIA

// for (const node of postorderIt) {
//     console.log(node.value)
// }

console.dir(binaryTree.find('B'), { depth: 1 })

console.log(binaryTree.getMax())
console.log(binaryTree.getMin())

module.exports = {
    BinaryTreeNode,
    BinaryTree
}