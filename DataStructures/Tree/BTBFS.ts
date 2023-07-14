export default function bfs(head: BinaryNode<number>, target: number): boolean {
    const q: BinaryNode<number>[] = [head];
    while (q.length) {
        const curr = q.shift() as BinaryNode<number>;
        if (curr.value === target) {
            return true
        };
        if (curr.left) {
            q.push(curr.left)
        };
        if (curr.right) {
            q.push(curr.right)
        };
    }

    return false;
}
