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

const list = new Stack<number>();

list.push(5);
list.push(7);
list.push(9);

console.log("Current", list);
console.log("length", list.length);
console.log("pop", list.pop());
console.log("length", list.length);
console.log("push 11"); list.push(11);
console.log("pop", list.pop());
console.log("pop", list.pop());
console.log("peek", list.peek());
console.log("length", list.length);
console.log("push 69"); list.push(69);
console.log("peek", list.peek());
console.log("length", list.length);
console.log("pop", list.pop());
console.log("pop", list.pop());
console.log("length", list.length);
console.log("pop", list.pop());
