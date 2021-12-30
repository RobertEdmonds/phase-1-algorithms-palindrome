function isPalindrome(word) {
  let length = word.length
  for (i=0;i<word.length;i++){
      if(word.charAt(i) != word.charAt(length-1-i)){
        return false
      }else{
        return true
      }}

}

/* 
  Add your pseudocode here
  check array for a string
  check to see if the string is greater than one
  check to see if the first and last letter are equal to each other
  return true
  all else return false
*/

/*
  Add written explanation of your solution here
  if the string is all alone the string will be the same forward and backwards. if the strings first and
  last letter match then there is a high probability of it matching.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log('=>', isPalindrome('tattarrattat'))

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
