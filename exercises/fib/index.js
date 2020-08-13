// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {

     if (n == 1)return 1;
     if (n == 2)return 1;
	 let prev = 1;
	 let cur = 1;
     n-=2;
     while(n > 0){
     	let temp = cur + prev;
     	prev = cur;
     	cur = temp; 
     	n--;
     }
     return cur;
}

module.exports = fib;
