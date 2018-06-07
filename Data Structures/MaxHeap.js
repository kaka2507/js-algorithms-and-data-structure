/**
 * Binary MaxHeap implementation via Array, following the spec: https://en.wikipedia.org/wiki/Binary_heap
 * This implementation is depending on the Array implementation
 * I assumed that the performance of Array implementation as below:
 * []: O(1)
 * pop(): O(1)
 */
class MaxHeap {
    constructor() {
        this._data = [];;
    }

    /**
     * Insert a value into the Maxheap
     * Performance:
     * Best case: O(1)
     * Average case: O(log(n))
     * Worst case: O(log(n))
     * @param {Number} value 
     */
    insert(value) {
        // insert node to the last position of heap
        this._data.push(value);

        /**
         * Re-arrange after push the value to the last of the heap
         */
        let needArrangeIdx = this._data.length - 1;
        while(needArrangeIdx > 0) {
            let parentIdx = (needArrangeIdx % 2 === 0) ? (needArrangeIdx/2 -1): (needArrangeIdx - 1)/2;
            if(this._data[parentIdx] < this._data[needArrangeIdx]) {
                // swap
                let tmp = this._data[parentIdx];
                this._data[parentIdx] = this._data[needArrangeIdx];
                this._data[needArrangeIdx] = tmp;

                // update the needArrangeIdx
                needArrangeIdx = parentIdx;
            } else {
                break;
            }
        }
    }

    /**
     * Return the maximum value on the heap
     * Performance: O(1)
     */
    peek() {
        return this._data[0];
    }

    /**
     * Remove the maximum on the MaxHeap and return it
     * Best case: O(1)
     * Average & Worst case: O(log(n))
     */
    extract() {
        if(this._data.length === 0) {
            return null;
        }
        if(this._data.length === 1) {
            return this._data.pop();
        }
        // get the result as the root
        let result = this._data[0];

        /**
         * Get the last and put it on the top
         */
        this._data[0] = this._data.pop();
        /**
         * Re-arrange
         */
        let needArrangeIdx = 0;
        while(needArrangeIdx < this._data.length - 1) {
            let leftChildIdx = 2*needArrangeIdx + 1;
            let rightChildIdx = 2*needArrangeIdx + 2;
            if(leftChildIdx >= this._data.length || rightChildIdx >= this._data.length) {
                break;
            }
            if(this._data[leftChildIdx] >= this._data[rightChildIdx]) {
                if(this._data[needArrangeIdx] >= this._data[leftChildIdx]) {
                    // finish
                    break;
                } else {
                    // swap the left child with the root
                    let tmp = this._data[needArrangeIdx];
                    this._data[needArrangeIdx] = this._data[leftChildIdx];
                    this._data[leftChildIdx] = tmp;

                    needArrangeIdx = leftChildIdx;
                }
            } else {
                if(this._data[needArrangeIdx] >= this._data[rightChildIdx]) {
                    // finish
                    break;
                } else {
                    // swap the left child with the root
                    let tmp = this._data[needArrangeIdx];
                    this._data[needArrangeIdx] = this._data[rightChildIdx];
                    this._data[rightChildIdx] = tmp;

                    needArrangeIdx = rightChildIdx;
                }
            }
        }
        return result;
    }
    
    display() {
        console.log(this._data);
    }

    isEmpty() {
        return this._data.length === 0;
    }
}

// Test MaxHeap
let arr = [1,2,3,4,5,6,7,8];

let maxheap = new MaxHeap();
arr.forEach(ele => {
    maxheap.insert(ele);
});

console.log("Original Arr:");
console.log(arr);

console.log("Built Heap");
maxheap.display();