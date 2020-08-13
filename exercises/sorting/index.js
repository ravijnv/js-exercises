// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
	for(let i = 0; i < arr.length - 1; i++){
		for(let j = 0; j < arr.length - i - 1; j++){
			if(arr[j] > arr[j + 1]){
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr;
}

function selectionSort(arr) {
	for(let i = 0; i < arr.length; i++){
		for (let j = i+1; j < arr.length; j++) {
			if(arr[j] < arr[i]){
				let temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;

			}
		}
	}
	return arr;
}


function mergeSort(arr) {

	if(arr.length <= 1){
		return arr;
	}
	let mid = arr.length / 2;
	let leftArray = mergeSort(arr.slice(0,mid));
	let rightArray = mergeSort(arr.slice(mid));
	return merge(leftArray,rightArray)


}

function merge(left, right) {
	let tempArray = [];
	let leftIndex = 0;
	let rightIndex = 0;

	while(leftIndex < left.length && rightIndex < right.length){
		if(left[leftIndex] < right[rightIndex]){
			tempArray.push(left[leftIndex]);
			leftIndex++;
		}
		else{
			tempArray.push(right[rightIndex]);
			rightIndex++;
		}
	}
	while(leftIndex < left.length){
		tempArray.push(left[leftIndex]);
		leftIndex++;
	}
	while(rightIndex < right.length){
		tempArray.push(right[rightIndex]);
		rightIndex++;
	}
	return tempArray;

}



module.exports = { bubbleSort, selectionSort, mergeSort, merge };
