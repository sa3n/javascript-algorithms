class Tower {
    constructor(...values) {
        this.values = [...values]
    }
    moveTopTo(target) {
        if (this.top < target.top || !target.top) {
            target.push(this.pop())
        }
    }
    push(value) {
        this.values.push(value)
    }
    pop() {
        return this.values.pop()
    }
    get top() {
        return this.values.at(-1)
    }
}

function towerOfHanoi(n, srcRod, targetRod, helperRod) {
    if (n === 0) return
    if (n === 1) return srcRod.moveTopTo(targetRod)
    towerOfHanoi(n - 1, srcRod, helperRod, targetRod)
    srcRod.moveTopTo(targetRod)
    towerOfHanoi(n - 1, helperRod, targetRod, srcRod)
    return [srcRod, helperRod, targetRod]
}

module.exports = {
    Tower,
    towerOfHanoi
}