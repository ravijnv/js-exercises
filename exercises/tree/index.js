// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
	constructor(data){
      this.data = data;
      this.children = [];
	}
	add(data){

      this.children.push(new Node(data));
	}
	remove(data){
		this.children.splice(this.children.indexOf(new Node(data)),1)
	}
}

class Tree {
	constructor(){
		this.root = null;
	}
	traverseDF(node, array = []){
     array.push(node.data);
     for(let i = 0; i < node.children.length; i++){
     	traverseDF(node.children[i],array);
     }
     return array;
	}
	traverseBF(node){
		let auxArray = [];
		let array = [];
		auxArray.push(node.data);
		while(auxArray.length > 0){
			let tempNode = auxArray.shift();
			array.push(tempNode.data);
			for(let i = 0; i < tempNode.children.length; i++){
				auxArray.push(tempNode.children[i]);
			}
		}
		return array;

	}
	
}

module.exports = { Tree, Node };