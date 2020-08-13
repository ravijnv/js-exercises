// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
	let tempArr = str.split(' ');
	len = tempArr.length;
	for(let i =0;i<len;i++){
		tempArr[i]=String(tempArr[i].charAt(0)).toUpperCase()+tempArr[i].substr(1,tempArr[i].length-1);


	}
	return tempArr.join(' ');
}

module.exports = capitalize;
