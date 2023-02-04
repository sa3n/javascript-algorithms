const arr = [1, 2, 3]

function subsets(arr) {
    if (arr.length === 0) return
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        const newArr = Array.from(arr)
        newArr.splice(i, 1)
        subsets(newArr)
    }
}

subsets(arr)