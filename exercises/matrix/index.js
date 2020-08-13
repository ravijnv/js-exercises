// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]
function matrixUtil(row,col,count,n,m,array){
	
	if(row < n && col < m){
		for(let i = col; i < m; i++){
			console.log([row,i,count])
		   
			array[row][i] = count;
			count++;
		}
		for(let j = row + 1; j < n; j++){
			console.log([j,m-1,count]);
			array[j][m-1] = count++;
		}

		if(row != (n - 1)){
			for(let i = m-2; i >= col; i--){
				console.log([n-1,i,count]);
				array[n-1][i] = count++;
			}
		}
		if(col != (m - 1)){
			for(let i = n - 2; i > row; i--){
				console.log([i,col,count]);
				array[i][col] = count++;
			}
		}

	
	matrixUtil(row + 1, col + 1, count, n - 1, m - 1, array);
}
}

function matrix(n) {
	let finalArray = [];
	for(let i = 0; i < n; i++) {
		let tempArray = []
		for(let j = 0; j < n; j++){
			tempArray.push(0);
		}
		finalArray.push(tempArray);
	}
	matrixUtil(0, 0, 1, n, n, finalArray);
    return finalArray;
} 


module.exports = matrix;
