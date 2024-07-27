//
let numbers = [3, 8, 1];

let result1 = numbers.reduce((n1, n2) => n1+n2)
// 12
let result2 = numbers.reduce((n1, n2) => n1>n2 ? 'ok' : 'not ok')
// not ok
let resultMin = numbers.reduce(getMin)
// 1
let resultMax = numbers.reduce(getMax)
// 8

function getMin(accumulator, element){
    return Math.min(accumulator, element)
}

function getMax(accumulator, element){
    return Math.max(accumulator, element)
}