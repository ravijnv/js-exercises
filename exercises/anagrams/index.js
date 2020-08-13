// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False
function removeExtraCharaters(stringA){
	len=stringA.length;
	let tempStr="";
	for(let i=0;i<len;i++){
		let ch=stringA.charAt(i);
      if(ch >= 'a' && ch <= 'z'){
       tempStr+=String(ch);
      }
	}
	return tempStr;
}


function sortString(stringA){
	return stringA.split('').sort().join('');
}


function anagrams(stringA, stringB) {
	let lenA = stringA.length;
	let lenB = stringB.length;
	if(lenA != lenB){
		return false;
	}
	stringA=stringA.toLowerCase();
	stringB=stringB.toLowerCase();
	
	
stringA=removeExtraCharaters(stringA);
stringB=removeExtraCharaters(stringB);

stringA=sortString(stringA);
stringB=sortString(stringB);

for(let i=0;i<lenA;i++){
	if(stringA.charAt(i) != stringB.charAt(i)){
		return false;
	}
}
return true;
}
module.exports = anagrams;
