# Heap

## What is Heap Data Structure?
1. In computer science, a heap is a specialized tree-based data structure that satisfies the heap property: In a max heap, for any given node C, if P is a parent node of C, then the key (the value) of P is greater than or equal to the key of C. In a min heap, the key of P is less than or equal to the key of C.[1] The node at the "top" of the heap (with no parents) is called the root node.
2. A Heap is a special Tree-based data structure in which the tree is a complete binary tree.

![Min and Max Heap](../../Images/Heap.png)

## Heap property
1. **Heap Order Property:** For a Max Heap, each node's value is greater than or equal to the values of its children, and for a Min Heap, each node's value is less than or equal to the values of its children.
2. **Shape Property:** The heap is a complete binary tree, meaning all levels of the tree are filled except possibly the last one, and the nodes in the last level are aligned to the left.

## Array Representation of a Heap

A heap can be represented as an array. The root element will be at `Arr[0]`. The following table shows indexes of other nodes for the ith node, i.e., `Arr[i]`:

| Index | Parent | Left Child | Right Child |
|-------|--------|------------|-------------|
| `i`   | `(i-1)/2` | `2*i+1` |  `2*i+2`    |


For example, the following array represents a max heap:

```typescript
let arr: number[] = [17, 15, 6, 9, 5, 13, 3, 1, 2, 4]
```
```
      17
     /  \
    15   6
   / \    \
  9   5    3
 / \        \
2   1        4

```

**This will be useful for working with array so we don't have to use `Linked List` for `parent child management`**
1. The root element of the binary tree is located at index `0` in the array, so the root element is `arr[0]`, which is `17`.

2. To find the left child of the element at index `i`, we use the formula `2*i + 1`. For example, to find the left child of `17` (at index `0`), we get `2*0 + 1 = 1`. So, the left child of `17` is `arr[1]`, which is `15`.

3. To find the right child of the element at index `i`, we use the formula `2*i + 2`. For example, to find the right child of `17` (at index `0`), we get `2*0 + 2 = 2`. So, the right child of `17` is `arr[2]`, which is `6`.

4. To find the parent of the element at index `i`, we use the formula `floor((i-1) / 2)`. For example, to find the parent of the element at index `1` (which is `15`), we get `floor((1-1) / 2) = 0`. So, the parent of `arr[1]`, which is `15`, is `arr[0]`, which is `17`.
