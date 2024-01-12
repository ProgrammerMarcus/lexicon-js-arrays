const numbers = [2, 6, 12, 7, 22, 35]

// 1
const first = numbers[0]
console.log(first)

// 2
const last = numbers[numbers.length - 1]
console.log(last)

// 3
const fourth = numbers[3] // the fourth has index 4 - 1
console.log(fourth)

// 4
const second = numbers[1]
const fifth = numbers[4]
const secondAndFifth = [second, fifth]
console.log(secondAndFifth)

// 5
const length = numbers.length
console.log(length)

// 6
const pushed = numbers.push(77) // new length
console.log(pushed)

// 7
const unshifted = numbers.unshift(99) // new length
console.log(unshifted)

// 8
const popped = numbers.pop() // last element
console.log(popped)

// 9
const shifted = numbers.shift() // first element
console.log(shifted)

// 10
console.log(numbers)