function BinarySearch(array: number[], key: number): boolean {
    let lo = 0;
    let hi = array.length - 1;
    do {
        let mid = Math.floor((lo + (hi - lo) / 2));
        if (array[mid] === key) {
            return true;
        } else if (array[mid] > key) {
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    } while (lo <= hi)
    return false;
}

const foo = [1, 3, 4, 69, 77, 81, 93, 99, 420, 1387, 696969];
console.log("Got = ", BinarySearch(foo, 69), " Expected = ", true);
console.log("Got = ", BinarySearch(foo, 83), " Expected = ", false);
console.log("Got = ", BinarySearch(foo, 420), " Expected = ", true);
console.log("Got = ", BinarySearch(foo, 78), " Expected = ", false);
console.log("Got = ", BinarySearch(foo, 696969), " Expected = ", true);
