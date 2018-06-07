let arr = [];

function getRandomArray(length) {
    for(let i = 0; i < length; i++) {
        arr.push(Math.random());
    }
    return arr;
}

function pushBenchMark(arr) {
    let start = (new Date()).getTime();
    arr.push(Math.random());
    let end = (new Date()).getTime();
    return (end - start);
}

function unshiftBenchMark(arr) {
    let start = (new Date()).getTime();
    arr.unshift(Math.random());
    let end = (new Date()).getTime();
    return (end - start);
}

function popBenchMark(arr) {
    let start = (new Date()).getTime();
    arr.pop();
    let end = (new Date()).getTime();
    return (end - start);
}

function indexBenchMark(arr) {
    let start = (new Date()).getTime();
    arr[Math.floor(Math.random()*arr.length)];
    let end = (new Date()).getTime();
    return (end - start);
}

function searchBenchMark(arr) {
    let start = (new Date()).getTime();
    arr.indexOf(Math.floor(Math.random()*arr.length));
    let end = (new Date()).getTime();
    return (end - start);
}

let min = 10;
let max = 10000000;
let avg = {
    push : {},
    unshift: {},
    pop: {},
    index: {},
    search: {}
}
for(let i = min; i <= max; i=i*5) {
    let arr = getRandomArray(i);
    avg.push[i + ' elements'] = pushBenchMark(arr);
    avg.unshift[i + ' elements'] = unshiftBenchMark(arr);
    avg.pop[i + ' elements'] = popBenchMark(arr);
    avg.index[i + ' elements'] = indexBenchMark(arr);
    avg.search[i + ' elements'] = searchBenchMark(arr);
}

for(key in avg) {
    console.log(key + " performance:");
    console.log(avg[key]);
}