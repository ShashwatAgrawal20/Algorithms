declare type Point = {
    x: number,
    y: number
}

interface LinkedList<T> {
    get length(): number;
    insertAt(item: T, index: number): void;
    remove(item: T): T | undefined;
    removeAt(index: number): T | undefined;
    append(item: T): void;
    prepend(item: T): void;
    get(index: number): T | undefined;
}

declare type BinaryNode<T> = {
    value: T;
    left: BinaryNode<T> | null;
    right: BinaryNode<T> | null;
};

declare type CompleteGraphEdge = { from: number, to: number, weight: number };
declare type GraphEdge = { to: number, weight: number };
declare type WeightedAdjacencyList = GraphEdge[][];
declare type WeightedAdjacencyMatrix = number[][];

declare type AdjacencyList = number[][];
declare type AdjacencyMatrix = number[][];
