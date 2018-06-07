/**
 * Quick Sort Performance for following implemetation
 * Average Big O: nlog(n)
 * Worst case Big O: n^2 (when the array is already sorted) --> the partition will break the origin array into two parts (1: one element, 2: the rest)
 * Space Complexity: O(1)
 */

/**
 * Partition implementation base on Hoare Partition Scheme
 * @param {Array} a 
 * @param {Integer} lo 
 * @param {Integer} hi 
 */
function partition(a, lo, hi) {
    let pivot = a[lo];

    let i = lo - 1;
    let j = hi + 1;

    while(true) {
        do
            i += 1;
        while(a[i] < pivot);
        do
            j -= 1;
        while(a[j] > pivot);

        if(i >= j) {
            return j;
        }

        // swap arr[i] and arr[j]
        let tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
}

/**
 * Quick Sort Implementation via Recursive
 * @param {Array} a : The array which need to be sorted
 * @param {Integer} lo : The lower index where we want to apply quick sort
 * @param {Integer} hi : The higher index where we want to apply quick sort
 */
function quickSort(a, lo, hi) {
    if(lo >= hi) {
        // done
        return;
    }
    let pivotIdx = partition(a, lo, hi);
    quickSort(a, lo, pivotIdx);
    quickSort(a, pivotIdx + 1, hi);
}

// Test the implementation
arr = [5, 9, 8, 7, 6, 5, 4, 2, 1]

console.log("Origin Array:");
console.log(arr);

quickSort(arr, 0, arr.length - 1);

console.log("Result Array:");
console.log(arr);
