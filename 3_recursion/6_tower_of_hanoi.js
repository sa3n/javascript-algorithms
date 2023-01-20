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

const hanoiRods = [new Tower(5, 4, 3, 2, 1), new Tower(), new Tower()]


function towerOfHanoi(n, srcRod, targetRod, helperRod) {
    // console.log(n, rods)
    if (n === 0) return
    if (n === 1) return srcRod.moveTopTo(targetRod)
    towerOfHanoi(n - 1, srcRod, helperRod, targetRod)
    srcRod.moveTopTo(targetRod)
    towerOfHanoi(n - 1, helperRod, targetRod, srcRod)
    return rods
}

// EXPLANATION

// towerOfHanoi(5)
// 	towerOfHanoi(4, src -> helper)
// 		towerOfHanoi(3, src -> helper)
// 			towerOfHanoi(2, src -> helper) 		...SRC HELPER TARGET
// 				towerOfHanoi(1, src -> helper) 		= SRC -> TARGET
// 				src -> target				   		= SRC -> HELPER
// 				towerOfHanoi(1, helper -> target) 	= TARGET -> HELPER
// 			src -> target							= SRC -> HELPER
// 			towerOfHanoi(2, helper -> target) 	...HELPER TARGET SRC
// 				towerOfHanoi(1, src -> helper)		= HELPER -> SRC
// 				src -> target						= HELPER -> TARGET
// 				towerOfHanoi(1, helper -> target) 	= SRC -> TARGET
// ... 31 вызов в сумме

// * 54321
// *
// *

// * 5432
// *
// * 1

// * 543
// * 2
// * 1

// * 543
// * 21
// * 

// * 54
// * 21
// * 3

// * 541
// * 2
// * 3

// * 541
// * 
// * 32

// * 54
// * 
// * 321
