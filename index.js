function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
}

/*
  Add your pseudocode here:
  1. Split the input word into an array of characters.
  2. Reverse the array of characters.
  3. Join the reversed array into a string.
  4. Check if the original word is equal to the reversed word.
  5. Return true if they are equal (palindrome), else return false.
*/

/*
  Add written explanation of your solution here:
  The function takes an input word and checks if it reads the same forwards and backwards by
  reversing the word and comparing it to the original word. If they are the same, it returns
  true; otherwise, it returns false.
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