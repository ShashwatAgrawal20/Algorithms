export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.data = [];
        this.length = 0;
    }

    insert(value: number) {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }

    delete(): number {
        if (this.length === 0) {
            return -1;
        }
        const out = this.data[0];
        this.length--;
        if (this.length === 0) {
            this.data = [];
            return out;
        }
        this.data[0] = this.data[this.length];
        this.heapifyDown(0);
        return out;
    }

    private heapifyDown(index: number): void {
        const lIdx = this.leftChild(index);
        const rIdx = this.rightChild(index);
        if (index >= this.length || lIdx >= this.length) {
            return;
        }

        const lValue = this.data[lIdx];
        const rValue = this.data[rIdx];
        const value = this.data[index];

        if (lValue > rValue && value > rValue) {
            this.data[index] = rValue;
            this.data[rIdx] = value;
            this.heapifyDown(rIdx);
        } else if (rValue > lValue && value > lValue) {
            this.data[index] = lValue;
            this.data[lIdx] = value;
            this.heapifyDown(lIdx);
        }
    }

    private heapifyUp(index: number): void {
        if (index === 0) {
            return;
        }

        const parentIndex = this.parent(index);
        const parentValue = this.data[parentIndex];
        const value = this.data[index];

        if (parentValue > value) {
            this.data[index] = parentValue;
            this.data[parentIndex] = value;
            this.heapifyUp(parentIndex);
        }
    }

    private parent(index: number): number {
        return Math.floor((index - 1) / 2);
    }

    private leftChild(index: number): number {
        return (index * 2 + 1);
    }

    private rightChild(index: number): number {
        return (index * 2 + 2);
    }
}
