# Recursion

## What is Recursion?
In computer science, recursion is a method of solving a computational problem where the solution depends on solutions to smaller instances of the same problem. Recursion solves such recursive problems by using functions that call themselves from within their own code. The approach can be applied to many types of problems, and recursion is one of the central ideas of computer science.

**In Short Recursion are functions that call themselves, until the base case is met.**

## Need of Recursion
Recursion is an amazing technique with the help of which we can reduce the length of our code and make it easier to read and write. It has certain advantages over the iteration technique which will be discussed later. A task that can be defined with its similar subtask, recursion is one of the best solutions for it. For example; The Factorial of a number.

## Properties of Recursion
- Performing the same operations multiple times with different inputs.
- In every step, we try smaller inputs to make the problem smaller.
- Base condition is needed to stop the recursion otherwise infinite loop will occur.

Let us consider a problem that a programmer has to determine the sum of first n natural numbers, there are several ways of doing that but the simplest approach is simply to add the numbers starting from 1 to n. So the function simply looks like this,
> approach(1) – Simply adding one by one
> f(n) = 1 + 2 + 3 +……..+ n

>approach(2) – Recursive adding
> f(n) = 1             n=1
> f(n) = n + f(n-1)    n>1

```typescript
function sumRec(n: number): number {
    if (n === 0) {
        return 1;
    }
    return n + sumRec(n - 1);
}
```

- [Maze Solver using recursion](./MazeSolver.ts)
