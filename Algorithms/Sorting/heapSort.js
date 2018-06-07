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

/**
 * Using the implementation of Maxheap above for HeapSort
 * Because the built-heap process take O(nlog(n)), and the extract take O(nlog(n))
 * So, the performance of heap sort will be O(2nlog(n)) ~ O(nlog(n))
 */
 function heapsort(arr) {
    /**
     * Build the heap first
     * bigO = nlog(n)
     */
    let heap = new MaxHeap();
    arr.forEach(element => {
        heap.insert(element);
    });
    console.log("Built Heap:");
    heap.display();

    /**
     * Extract the heap and append to array
     * bigO = nlog(n)
     */
    let result = [];
    while(!heap.isEmpty()) {
        result.push(heap.extract());
    }
    return result;
 }

 // Test the implementation
arr = [5, 9, 8, 7, 6, 5, 4, 2, 1];

console.log("Origin Array:");
console.log(arr);

arr = heapsort(arr);

console.log("Result Array:");
console.log(arr);