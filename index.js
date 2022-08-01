// Write a function `isPalindrome` that will receive one argument, a string. Your
// function should return `true` if the string is a palindrome (that is, if it
// reads the same forwards and backwards, like `"mom"` or `"racecar"`), and return
// `false` if it is not a palindrome.

function isPalindrome(word) {
  // Write your algorithm here
  if(word.length % 2 === 0) {
    let wordArray = word.split("")
    let midNumOne = wordArray.length / 2 - 1
    let midNumTwo = wordArray.length / 2
    let middle = (midNumOne + midNumTwo) / 2
    let devArray = []
    let letterArray = []
    let letterString = []

    for (i = 0; i < wordArray.length; i++) {
      let deviation = Math.abs(i - middle)
      devArray.push(wordArray[i], deviation)
    }
    letterArray = createGroups(devArray, wordArray.length)
    for (let letter of letterArray) {
      letterString.push(letter.join())
    }
    let palindrome = true
    let j = 0
    while (palindrome === true && j < letterString.length / 2) {
      let slicedLetterString = letterString.slice(j + 1)
    // const equalString = (element) => element === letterString[j]
      palindrome = slicedLetterString.some((element) => element === letterString[j])
      j++
    }
  return(palindrome)
  } else {
    let wordArray = word.split("")
    let middle = Math.floor(wordArray.length / 2)
    let devArray = []
    let letterArray = []
    let letterString = []
    
    for (i = 0; i < wordArray.length; i++) {
      let deviation = Math.abs(i - middle)
      devArray.push(wordArray[i], deviation)
    }
    letterArray = createGroups(devArray, wordArray.length)
    for (let letter of letterArray) {
      letterString.push(letter.join())
    }
    let palindrome = true
    let j = 0
    while (palindrome === true && j < Math.floor(letterString.length / 2)) {
      let slicedLetterString = letterString.slice(j + 1)
      palindrome = slicedLetterString.some((element) => element === letterString[j])
      j++
    }
    return palindrome
  }
}



function createGroups(arr, numGroups) {
  const perGroup = Math.ceil(arr.length / numGroups);
  return new Array(numGroups)
    .fill('')
    .map((_, i) => arr.slice(i * perGroup, (i + 1) * perGroup));
}





/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
