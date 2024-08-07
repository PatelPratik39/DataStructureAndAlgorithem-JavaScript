class Node{
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
        }else{
            let currentNode = this.root;
            while(true){
                if(value < currentNode.value){
                    // left
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this;    //return this means return binarysearch tree
                    }
                    currentNode = currentNode.left
                }else {
                    // right
                    if(!currentNode.right){
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    lookup(value){
        if(!this.root){
            return false;
        }
        let currentNode = this.root;
        while(currentNode ){
            if(value < currentNode.value){
                currentNode = currentNode.left;
            } else if( value > currentNode.value){
                currentNode = currentNode.right;
            } else if( currentNode.value === value){
                return currentNode;
            }
        }
        return false;
    }
    remove(value){
        if(!this.root){
            return false;
        }
        let currentNode = this.root;
        let parantNode = null;

        while(currentNode){
            if(value < currentNode.value){
                parantNode = currentNode;
                currentNode = currentNode.right;  
            } else if( value > currentNode.value){
                parantNode = currentNode;
                currentNode = currentNode.right;
            } else if( currentNode.value === value){
                if( currentNode.right === null){
                    if(parantNode === null){
                        this.root = currentNode.left;
                    } else {
                        if(currentNode.value < parantNode.value){
                            parantNode.left = currentNode.left;
                        } else if(currentNode.value > parantNode.value){
                            parantNode.right = currentNode.left;
                        }
                    }
                }else if(currentNode.right.left == null) {

                }
            }
        }
    }
}

const tree = new BinarySearchTree();

tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

console.log(tree.lookup(4));
// console.log(JSON.stringify(traverse(tree.root)));


function traverse(node){
    const tree = { value: node.value};
    tree.left = node.left === null ? null : traverse(node.left); 
    tree.right = node.right === null ?  null : traverse(node.right);
    return tree;
}