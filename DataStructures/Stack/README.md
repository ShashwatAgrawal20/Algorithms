# Stack

## What is Stack?
A stack is a linear data structure in which the insertion of a new element and removal of an existing element takes place at the same end represented as the top of the stack.

In computer science, a stack is an abstract data type that serves as a collection of elements, with two main operations:

- Push, which adds an element to the collection, and
- Pop, which removes the most recently added element that was not yet removed.

## LIFO(Last In First Out)
This strategy states that the element that is inserted last will come out first. You can take a pile of plates kept on top of each other as a real-life example. The plate which we put last is on the top and since we remove the plate that is at the top, we can say that the plate that was put last comes out first.

![Stack](../../Images/Stack.png)

Your email is a form of a stack, new mail comes in and is placed on top. When you finish reading the latest email, you remove it from the top. In development, whenever you call a function, that is placed on a stack in the engine that processes the code.


```typescript
type QNode<T> = {
    value: T,
    prev?: QNode<T>
};

class Stack<T> {
    public length: number;
    private head?: QNode<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const node = { value: item } as QNode<T>;
        this.length++;
        if (!this.head) {
            this.head = node;
            return;
        }
        node.prev = this.head;
        this.head = node;
    }

    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1);
        if (this.length === 0) {
            const head = this.head;
            this.head = undefined;
            return head?.value;
        }
        const head = this.head as QNode<T>;
        this.head = head.prev;
        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
```
