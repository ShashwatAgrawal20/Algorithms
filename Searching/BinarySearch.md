# Binary Search

## What is Binary Search?
1. In [computer science](https://en.wikipedia.org/wiki/Computer_science "Computer science"), **binary search**, also known as **half-interval search**, **logarithmic search**, or **binary chop**, is a [search algorithm](https://en.wikipedia.org/wiki/Search_algorithm "Search algorithm") that finds the position of a target value within a [sorted array](https://en.wikipedia.org/wiki/Sorted_array "Sorted array"). Binary search compares the target value to the middle element of the array. If they are not equal, the half in which the target cannot lie is eliminated and the search continues on the remaining half, again taking the middle element to compare to the target value, and repeating this until the target value is found. If the search ends with the remaining half being empty, the target is not in the array.

2. Binary search runs in [logarithmic time](https://en.wikipedia.org/wiki/Time_complexity#Logarithmic_time "Time complexity") in the [worst case](https://en.wikipedia.org/wiki/Best,_worst_and_average_case "Best, worst and average case"), making �(log⁡�)![O(\log n)](https://wikimedia.org/api/rest_v1/media/math/render/svg/aae0f22048ba6b7c05dbae17b056bfa16e21807d) comparisons, where �![n](https://wikimedia.org/api/rest_v1/media/math/render/svg/a601995d55609f2d9f5e233e36fbe9ea26011b3b) is the number of elements in the array. Binary search is faster than [linear search](https://en.wikipedia.org/wiki/Linear_search "Linear search") except for small arrays. However, the array must be sorted first to be able to apply binary search. There are specialized [data structures](https://en.wikipedia.org/wiki/Data_structures "Data structures") designed for fast searching, such as [hash tables](https://en.wikipedia.org/wiki/Hash_tables "Hash tables"), that can be searched more efficiently than binary search. However, binary search can be used to solve a wider range of problems, such as finding the next-smallest or next-largest element in the array relative to the target even if it is absent from the array.

## Example
> Suppose we have an array of sorted integers, `[1, 2, 3, 4, 5, 6, 7]`. We want to find the position of the number 5.

1. We start by comparing 5 to the middle element of the array, which is 4. 5 is greater than 4, so we know that it must be in the upper half of the array.

2. We then divide the array in half and look at the middle element of the upper half, which is 6. 5 is less than 6, so we know that it must be in the lower half of the upper half.

3. We continue dividing the array in half and comparing 5 to the middle element until we find the position of 5. In this case, the position of 5 is 5.

**Binary search is a very efficient search algorithm**. Its **time complexity is O(log n)**, where n is the number of elements in the array. This means that the time it takes to search the array increases logarithmically with the number of elements.

> For example, if the array has 100 elements, it will take about 7 steps to find the target value.


## Code Example

```typescript
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
```
