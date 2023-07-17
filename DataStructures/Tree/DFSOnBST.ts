function search(curr: BinaryNode<number> | null, key: number): boolean {
    if (!curr) {
        return false;
    }

    if (curr.value === key) {
        return true;
    }

    if (curr.value < key) {
        return search(curr.right, key);
    }
    return search(curr.left, key);
}

export default function dfs(head: BinaryNode<number>, key: number): boolean {
    return search(head, key);
}
