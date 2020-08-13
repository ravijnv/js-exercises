// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	let map = new Map();
	for(let i = 0; i < str.length; i++){
		let char = str.charAt(i);
		if(char == ' ')continue;
		if(map.has(char)){
			map.set(char, map.get(char)+1);
		}
		else{
			map.set(char,1);
		}
	}
	let sol;
	let maxOccur = 0;
    for(let key of map.keys()){
    	if(map.get(key) > maxOccur){
    		maxOccur = map.get(key);
    		sol = key;
    	}
    }
    return sol;

}

module.exports = maxChar;
