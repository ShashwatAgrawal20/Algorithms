# Linear Search

## What is Linear Search?
**Linear Search** is defined as a **sequential** search algorithm that starts at one end and goes through each element of a list until the desired element is found, otherwise the search continues till the end of the data set.

##  How Does Linear Search Algorithm Work?

- Every element is considered as a potential match for the key and checked for the same.
- If any element is found equal to the key, the search is successful and the index of that element is returned.
- If no element is found equal to the key, the search yields “No match found”.

## Complexity Analysis of Linear Search:
**Time Complexity:**

-   **Best Case:** In the best case, the key might be present at the first index. So the best case complexity is O(1)
-   **Worst Case:** In the worst case, the key might be present at the last index i.e., opposite to the end from which the search has started in the list. So the worst-case complexity is O(N) where N is the size of the list.
-   **Average Case:** O(N)

## Code Example

``` typescript
export default function linear_search(haystack: number[], needle: number): boolean {
    for (let i = 0; i < haystack.length; ++i){
        if (haystack[i] === needle){
            return true;
        }
    }
    return false;
}
```
