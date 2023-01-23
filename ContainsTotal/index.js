// Write a function that will tell you if there are 2 items in the array that add up to the target number
// Rules: 
// A number can only be used once per entry
// However the list may contain repeats

// Examples: 
// containsTotal([1,2,3], 5) => true
// containsTotal([1,2,3], 6) => false
// containsTotal([1,3], 2) => false (the number 1 can only be used one time)
// containsTotal([1,2,1], 2) => true (1 + 1 = 2)

const containsTotal = (numArr, target) => {
  for (let i = 0; i < numArr.length - 1; i++) {
    for (let j = i + 1; j < numArr.length; j++) {
      if (numArr[i] + numArr[j] === target) {
        return true
      }
    }
  }
  return false
};

module.exports = containsTotal;