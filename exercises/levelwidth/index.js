// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]
function dfs(level, root, map){
	if(map.has(level)){
		map.set(level,map.get(level)+1)
	}
	else{
		map.set(level,1);
	}
	for(let i = 0; i < root.children.length; i++) {

		dfs(level+1,root.children[i],map);
	}
}

function levelWidth(root) {
let map = new Map();
let level = 0;
dfs(level, root, map);
level = map.size;
let array = []
for(let i = 0; i < level; i++){
array.push(map.get(i));
}
return array;
}

module.exports = levelWidth;
