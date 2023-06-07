type QNode<T> = {
    value: T,
    next?: QNode<T>
}

class Queue<T> {
    public length: number;
    private head?: QNode<T>;
    private tail?: QNode<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    log(): void {
        let node = this.head;
        while (node) {
            console.log(node.value);
            node = node.next;
        }
    }
    enqueue(item: T): void {
        const node = { value: item } as QNode<T>
        this.length++;
        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }
        this.tail.next = node;
        this.tail = node;
    }
    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        this.length--;
        const head = this.head;
        this.head = this.head.next;
        head.next = undefined;
        return head.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}

const list = new Queue<number>();
list.enqueue(5);
list.enqueue(7);
list.enqueue(9);
console.log("Current", list);
console.log("length", list.length);
console.log("deque", list.deque());
console.log("length", list.length);
console.log("deque", list.deque());
console.log("peek", list.peek());
console.log("deque", list.deque());
console.log("length", list.length);
