// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, node = null){
		this.data = data;
		this.next = node;
	}

}

class LinkedList {
	constructor(){
		this.head = null;
		
	}
	insertFirst(data){
		if(this.head == null){
			this.head = new Node(data);
		}
	}
	size(){
		let length = 0;
		let tempHead = this.head;
		while(tempHead != null){
			tempHead = tempHead.next;
			length++;
		}
		return length;;
	}
	getFirst(){
		let prev = this.head;
		let tempHead = this.head;
		tempHead = tempHead.next;
		while(tempHead != null){
			prev = tempHead;
			tempHead = tempHead.next;

		}
		return prev;
		
	}
	getLast(){
		return this.head;
	}
	clear(){
		this.head = null;
	}
	removeFirst(){

		if(head.next == null){
			head == null;
		}
		else{
			let prev = this.head;
			let tempHead = this.head;
			tempHead = tempHead.next;
			while(tempHead.next != null){
				prev = tempHead;
				tempHead = tempHead.next;
			}
			prev.next = null;
		}

	}
	removeLast(){
		this.head = this.head.next;
	}
	insertLast(data){

		let tempHead = this.head;
		
		while(tempHead.next != null){
			tempHead = tempHead.next;
		}
		tempHead.next = new Node(data);
	}
	getAt(index){
		if(index >= 0){
			let tempHead = this.head;
			while(index > 0){
				index--;
				tempHead = tempHead.next;
			}
			return tempHead;
		}


	}
	removeAt(index){
		if(this.size() >= (index+1)){
			if(this.size() == 1){
				this.head = null;
			}
			else{
				

				let tempHead = this.head;
				let prev = this.head;
				tempHead = tempHead.next;
				index--;
				while(index > 0){
					prev = tempHead;
					tempHead = tempHead.next;
				}
				prev.next = tempHead.next;
			}
		}
	}
	insertAt(data,index){
		if(this.size() >= (index+1)){
			if(this.size() == 1){
				this.head.next = new Node(data);
			}
			else{
				

				let tempHead = this.head;
				let prev = this.head;
				tempHead = tempHead.next;
				index--;
				while(index > 0){
					prev = tempHead;
					tempHead = tempHead.next;
				}
				prev.next = new Node(data);
				prev.next.next = tempHead;
			}
		}
	}
}

module.exports = { Node, LinkedList };
