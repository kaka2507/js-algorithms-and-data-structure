class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    /**
     * Insert a value to the binary tree
     * @param {Number} value 
     */
    insert(value) {
        if(value <= this.value) {
            if(this.left === null) {
                this.left = new BinaryTree(value);
            } else {
                this.left.insert(value);
            }
        } else {
            if(this.right === null) {
                this.right = new BinaryTree(value);
            } else {
                this.right.insert(value);
            }
        }
    }

    /**
     * Convert tree to array with first left traversal
     */
    toArray() {
        let arrLeft = this.left !== null ? this.left.toArray() : [];
        let arrRight = this.right != null ? this.right.toArray() : [];
        return arrLeft.push(this.value).concat(arrRight);
    }

    toString() {
        if(this.left === null && this.right === null) {
            return "(" + this.value + ")";
        } else if(this.left === null) {
            return "(" + this.value + ", ()," +  this.right.toString() + ")";
        } else if(this.right === null) {
            return "(" + this.value + "," + this.left.toString() + ",())";
        } else {
            return "(" + this.value + "," + this.left.toString() + "," + this.right.toString() + ")";
        }
    }
}

// Test Binary Tree
let tree = new BinaryTree(10);
tree.insert(1);
tree.insert(2);
tree.insert(11);
tree.insert(3);
tree.insert(15);
tree.insert(12);
tree.insert(13);

console.log(tree.toString());
console.log(tree.toArray());