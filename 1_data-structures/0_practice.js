// IMPLEMENT:

// 1. LinkedList class
// methods: 
//  insert(node):void, 
//  delete():void, 
//  search(value):node, 
//  update(value):void

// 2. Stack class
// methods:
//  push(node):void
//  pop():void
//  pick():node

// 3. Queue class
// methods:
//  enqueue(node):void
//  dequeue():node
//  pick():node

// 4. BinaryTree class
// methods:
//  insert(node):void
//  preOrderTraversal():iterator
//  inOrderTraversal():iterator
//  postOrderTraversal():iterator
//  BFS():iterator
//  find(value):node
//  getMax():node
//  getMin():node
//  removeByValue(value):void
//  removeRightMostNode():node
// getters: 
//  rightMostNode

// 5. BST (BinarySearchTree) class
// ...

// 6. Heap class
// ...

// removeByValue(value) {
//     const node = this.find(value)
//     if (!node) return false
//     if (node.isLeaf) {
//         if (node.parent.rightChild === node) {
//             node.parent.rightChild = null
//         }
//         if (node.parent.leftChild === node) {
//             node.parent.leftChild = null
//         }
//         return true
//     }
//     if (node.leftChild && node.rightChild) {
//         // TODO: both childs
//     }
//     if (node.rightChild && !node.leftChild) {
//         node.rightChild.parent = node.parent
//         if (node.parent.rightChild === node) {
//             node.parent.rightChild = node.rightChild
//         }
//         if (node.parent.leftChild === node) {
//             node.parent.leftChild = node.rightChild
//         }
//     }
//     if (node.leftChild && !node.rightChild) {
//         node.leftChild.parent = node.parent
//         if (node.parent.rightChild === node) {
//             node.parent.rightChild = node.leftChild
//         }
//         if (node.parent.leftChild === node) {
//             node.parent.leftChild = node.leftChild
//         }
//         return true
//     }
// }