// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
	for(let i = 0; i < str.length; i++){
		if(str.charAt(i) != str.charAt(str.length - i - 1))return false;
	}
	return true;
}

module.exports = palindrome;
