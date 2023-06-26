export default function BinarySearch(array: number[], key: number): boolean {
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
