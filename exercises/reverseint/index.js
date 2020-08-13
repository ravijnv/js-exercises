// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
	let digitArray = [];
	let isNegative = 0; 
	if( n < 0){
		isNegative = 1;
		n = -n;

	}
	while(n > 0){
		digitArray.push(n % 10);
		n =Math.floor(n / 10);
	}
	digitArray.reverse();
	let power = 1;
	let ans = 0;
	for(let i = 0; i < digitArray.length; i++){
		
       ans += (digitArray[i]*power);
       power *= 10;
	}
	if(isNegative){
		return -ans;
	}
	return ans;
}

console.log(reverseInt(125));
module.exports = reverseInt;
