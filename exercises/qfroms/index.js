// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
constructor(){
	this.stack_1 = new Stack();
	this.stack_2 = new Stack();
}
add(data){
	
	let size = this.stack_1.data.length;
	for(let i = 0; i < size; i++){
		this.stack_2.push(this.stack_1.peek());
		this.stack_1.pop();
	}
	this.stack_1.push(data);
	for(let i =0; i < size; i++){
		this.stack_1.push(this.stack_2.peek());
		this.stack_2.pop();
	}

    
   
}
remove(){
	let data = this.stack_1.peek();
	this.stack_1.pop();
	return data;
	
}
peek(){
	return this.stack_1.peek();
}

}
/*let q=new Queue();
q.add(1);
q.add(2);
q.add(3);
console.log(q.peek());
console.log(q.remove());

console.log(q.peek());
console.log(q.remove());*/
module.exports = Queue;





