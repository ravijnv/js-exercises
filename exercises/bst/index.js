// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {

constructor(data){
	this.data = data;
	this.left = null;
	this.right = null;
}
insert(data){
let tempRoot = this;

while(true){
if(data < tempRoot.data ){
if(tempRoot.left == null){
	
	tempRoot.left = new Node(data);
	break;
}
else{
	tempRoot = tempRoot.left;

}

}
else{
	if(tempRoot.right == null){
		tempRoot.right = new Node(data);
		break;
	}
	else{
		tempRoot = tempRoot.right;
	}
}
}

}
 contains(data){
 	let tempRoot = this;
 	
 	while(tempRoot != null){
 		if(data < tempRoot.data){
 			tempRoot = tempRoot.left;
 		}
 		else if(data > tempRoot.data){
 			tempRoot = tempRoot.right
 		}
 		else{
 			return tempRoot;
 		}
 	}
 	return null;
 }
}

module.exports = Node;
