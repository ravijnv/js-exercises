// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {

    let startPos = n;
    let totalSpaces = 2 * n - 1;
  
    let count = 1; 
	for(let i = 1; i <= n; i++){
		let tempStr = '';
     for(let j = 1; j <= totalSpaces; j++){
        if(j < startPos || j >= (startPos + count) ){
        	tempStr += ' ';
        }
        else{
        	tempStr += "#";
        }
        
     }
     count += 2;
     startPos--;
     console.log(tempStr);
	}
}

pyramid(2);

module.exports = pyramid;
