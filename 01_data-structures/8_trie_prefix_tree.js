class TrieNode {
    constructor() {
        this.children = new Map()
        this.end = false
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode()
    }

    add(word, node = this.root) {
        if (!word.length) {
            node.end = true
        } else if (!node.children.has(word[0])) {
            node.children.set(word[0], new TrieNode())
            return this.add(word.substring(1), node.children.get(word[0]))
        } else {
            return this.add(word.substring(1), node.children.get(word[0]))
        }
    }

    isWord(word) {
        let node = this.root
        while (word.length > 1) {
            if (!node.children.has(word[0])) {
                return false
            } else {
                node = node.children.get(word[0])
                word = word.substring(1)
            }
        }
        return node.children.has(word[0]) && node.children.get(word).end
    }

    print() {
        const words = []
        const search = function(node, result) {
            if (node.children.size > 0) {
                for (let letter of node.children.keys()) {
                    search(node.children.get(letter), result + letter)
                }
                if (node.end) {
                    words.push(result)
                }
            } else {
                return words.push(result)
            }
        }
        search(this.root, '')
        return words
    }
}

module.exports = {
    TrieNode,
    Trie
}