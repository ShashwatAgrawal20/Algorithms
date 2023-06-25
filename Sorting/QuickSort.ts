function qsr(arr: number[], lo: number, hi: number): void {
    if (lo >= hi) {
        return;
    }
    const pivotIdx = partition(arr, lo, hi);

    qsr(arr, lo, pivotIdx - 1);
    qsr(arr, pivotIdx + 1, hi);
}

function partition(arr: number[], lo: number, hi: number): number {
    const pivot = arr[hi];
    let idx = lo - 1;
    for (let i = lo; i < hi; ++i) {
        if (arr[i] <= pivot) {
            idx++;
            const tmp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = tmp;
        }
    }
    idx++;
    arr[hi] = arr[idx];
    arr[idx] = pivot;
    return idx;
}

function quick_sort(arr: number[]): void {
    qsr(arr, 0, arr.length - 1);
}


const arr: number[] = [8, 2, 7, 4, 69, 420, 96];
const expected: number[] = [2, 4, 7, 8, 69, 96, 420];

quick_sort(arr);
if(arr.every((value, idx) => value === expected[idx])){
    console.log("test passed");
}
else{
    console.log("test failed");
}
