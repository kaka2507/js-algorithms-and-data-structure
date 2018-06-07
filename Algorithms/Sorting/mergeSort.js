/**
 * Implemente the Merge Sort base on the spec: https://en.wikipedia.org/wiki/Merge_sort
 */
var recursive = 0;

/**
 * MergeSort Implementation base on TopDown approach.
 * MergeSort will sort the Array arr from lo to hi, including lo and hi position.
 * @param {Array} arr 
 * @param {Integer} lo 
 * @param {Integer} hi 
 */
function TopDownMergeSort(arr, lo, hi) {
    let middle = Math.floor((hi - lo) / 2) + lo;
    // if the partition just have one element
    if (hi - lo < 1) {
        return;
    }
    TopDownMergeSort(arr, lo, middle);
    TopDownMergeSort(arr, middle + 1, hi);
    TopDownMerge(arr, lo, middle, hi);
}

/**
 * Merge function to merge two sub arrays which is sorted.
 * The first sub array from lo -> middle (including middle)
 * The second sub array from middle + 1 -> hi (including hi)
 * @param {Array} a 
 * @param {Integer} lo 
 * @param {Integer} middle 
 * @param {Integer} hi 
 */
function TopDownMerge(a, lo, middle, hi) {
    console.log("TopDownMerge lo: " + lo + " middle:" + middle + " hi:" + hi);
    console.log(a);
    let i = lo;
    let j = middle + 1;
    let result = [];
    while(true) {
        if(i > middle && j > hi) {
            break;
        }
        if(i <= middle && j <= hi) {
            if(a[i] < a[j]) {
                result.push(a[i]);
                i += 1;
            } else {
                result.push(a[j]);
                j += 1;
            }
        } else {
            if(i <= middle) {
                result.push(a[i]);
                i += 1;
            } else {
                result.push(a[j]);
                j += 1;
            }
        }
    }
    for(let i = 0; i < result.length; i++) {
        a[i + lo] = result[i];
    }
    console.log("After TopDownMerge:");
    console.log(a);
}

// Test the implementation
arr = [5, 9, 8, 7, 6, 5, 4, 2, 1]

console.log("Origin Array:");
console.log(arr);

TopDownMergeSort(arr, 0, arr.length - 1);

console.log("Result Array:");
console.log(arr);