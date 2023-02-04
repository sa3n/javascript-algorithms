const board = new Array(8)
    .fill()
    .map(e => new Array(8).fill(false))

class Knight {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    get possibleSteps() {
        const steps = []
        const moves = [
            [1, 2], [1, -2], [-1, 2], [-1, -2],
            [2, 1], [2, -1], [-2, 1], [-2, -1]
        ]
        for (let [dx, dy] of moves) {
            const newX = this.x + dx
            const newY = this.y + dy
            const isNewXValid = newX >= 0 && newX < 8
            const isNewYValid = newY >= 0 && newY < 8
            if (isNewXValid && isNewYValid) {
                steps.push([newX, newY])
            }
        }
        return steps
    }
}

const knight = new Knight(1, 3)

function explore(board, knight) {
    for ([x, y] of knight.possibleSteps) {
        if (board[x][y] === false) {
            knight.x = x
            knight.y = y
            board[x][y] = true
            explore(board, knight)
        }
    }
}