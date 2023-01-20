function generate(currString, open, closed, nOfBrackets) {
    if(closed === nOfBrackets) {
        return console.log(currString)
    }
    if (open < nOfBrackets)  {
        generate(currString + '(', open + 1, closed, nOfBrackets)
    }
    if (closed < open) {
        generate(currString + ')', open, closed + 1, nOfBrackets)
    }
}

generate("", 0, 0, 3)