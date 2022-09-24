// 1. define a function that takes two numbers: lower and upper.
// The function should return an array containing all the numbers between
// lower and upper, including lower and upper.
//
// Example Input and Output:
// Input        | Output
// 1, 3         | [1,2,3]
// 10, 13       | [10, 11, 12, 13]
// -1, 1        | [-1, 0, 1]
//
// TODO: write code below
function range(lowerNum, upperNum) {
  let list = []
  for (let i = lowerNum; i <= upperNum; i++) {
    list.push(i)
  }
  return list
}
console.log(range(22, 40))
// 2. define a function that takes two arguments: a string and a number.
// The function should return the same string but in upper case with exclamation
// marks appended to the end. The number of exclamation marks should be
// determined by the number argument.
//
// Example Input and Output:
// Input        | Output
// disaster, 5  | DISASTER!!!!!
// error, 10    | ERROR!!!!!!!!!!
//
// TODO: write code below
function shout(string, Num) {
  const upperString = string.toUpperCase()
  let exclamation = ''
  for (let i = 0; i < Num; i++) {
    exclamation += '!'
  }
  return `${upperString + exclamation}`
}
const result = shout('disaster', 5)
console.log(result)

// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: range, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: shout // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
}
