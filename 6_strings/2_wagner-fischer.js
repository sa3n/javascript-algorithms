function wagnerFischer (rowStr, colStr) {
    const matrix = Array(rowStr.length + 1)
        .fill(null)
        .map(() => Array(colStr.length + 1).fill(null));

    for (let col = 0; col <= colStr.length; col++) {
        matrix[0][col] = col
    }
    for (let row = 0; row <= rowStr.length; row++) {
        matrix[row][0] = row
    }

    for (let row = 1; row <= rowStr.length; row++) {
        for (let col = 1; col <= colStr.length; col++) {
            const indicator = colStr[col - 1] === rowStr[row - 1] ? 0 : 1

            matrix[row][col] = Math.min(
                matrix[row][col - 1] + 1,               // deletion
                matrix[row - 1][col] + 1,               // insertion
                matrix[row - 1][col - 1] + indicator    // substitution
            )
        }
    }
    return matrix[rowStr.length][colStr.length]
}

console.log(wagnerFischer('kitten', 'hitting'))

module.exports = wagnerFischer