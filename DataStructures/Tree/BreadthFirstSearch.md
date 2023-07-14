# Breadth First Search (Level Order Traversal)

## What is Breadth First Search
1. **BFS** technique is defined as a method to traverse a Tree such that all nodes present in the same level are traversed completely before traversing the next level.
2. It starts at the tree root and explores all nodes at the present depth prior to moving on to the nodes at the next depth level. Extra memory, usually a queue, is needed to keep track of the child nodes that were encountered but not yet explored.
3. In contrast, **depth-first search**, which explores the node branch as far as possible before backtracking and expanding other nodes, may get lost in an infinite branch and never make it to the solution node.

![Breadth First Search](../../Images/BFS.gif)

**Note:- If we use the JavaScript ArrayList(for ease) the Complexity is going to be O(N^2) as the shift and unshift operation costs O(N).**
## Complexity Analysis
**Time Complexity:** O(N) where N is the number of nodes in the binary tree.
**Auxiliary Space:** O(N) where N is the number of nodes in the binary tree.

## More
- [Wiki](https://en.wikipedia.org/wiki/Breadth-first_search)
