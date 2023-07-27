# Graphs

## What is Graph?
- A Graph is a non-linear data structure consisting of vertices and edges. The vertices are sometimes also referred to as nodes and the edges are lines or arcs that connect any two nodes in the graph. More formally a Graph is composed of a set of vertices( V ) and a set of edges( E ). The graph is denoted by G(E, V).

![Graph](../../Images/Graph.jpg)

## Components of Graph
1. **Vertices:** Vertices are the fundamental units of the graph. Sometimes, vertices are also known as vertex or nodes. Every node/vertex can be labeled or unlabelled.
2. **Edges:** Edges are drawn or used to connect two nodes of the graph. It can be ordered pair of nodes in a directed graph. Edges can connect any two nodes in any possible way. There are no rules. Sometimes, edges are also known as arcs. Every edge can be labeled/unlabelled.

## Some Useful Graph Terms
1. **Cycle:** A path that starts and ends at the same node.
2. **Acyclic:** A graph that contains no cycles.
3. **Connected:** When every node has a path to another node.
4. **Directed:** When there is a direction to the connections.
5. **Undirected:** When there is no direction to the connections.
6. **Weighted:** The edges have some weight associated to them.
7. **DAG:** A directed acyclic graph.

## Real-World Applications
Graphs are incredibly versatile and find applications in various domains:

- **Social Networks:** Social media platforms use graphs to model connections between users and recommend friends or connections.
- **Routing Algorithms:** Graphs are essential in finding the shortest path between locations in navigation systems and optimizing network routing.
- **Dependency Resolution:** Graphs are used in software development to manage dependencies between different modules or packages.
- **Recommendation Systems:** Graphs help build recommendation engines by analyzing connections and interactions between users and items.

## The Story of Euler and the Seven Bridges of Königsberg.
In the 18th century, the city of Königsberg (now Kaliningrad, Russia) had seven bridges connecting four land masses. The citizens wondered if it was possible to take a walk through the city, crossing each bridge exactly once and returning to the starting point. This puzzle, known as the "Seven Bridges of Königsberg problem," stumped everyone.

### The problem
The Seven Bridges of Königsberg problem can be modeled as a graph, with each land mass represented by a vertex and each bridge represented by an edge. The problem asks whether there is a path that starts and ends at the same vertex, and crosses each edge exactly once.

![Seven Bridges Of Konigsberg](../../Images/SevenBridgesOfKonigsberg.png)

### Euler's Solution
Leonhard Euler, a brilliant mathematician, solved the Seven Bridges of Königsberg problem in 1736. He showed that there is no path that crosses all bridges exactly once if each land mass has an odd number of bridges connected to it. This is because the sum of the degrees of the vertices in a graph must be even, so if there are two vertices with an odd degree, then the other vertices must have an even degree. This means that there must be a path that starts at one of the vertices with an odd degree, crosses all the bridges, and ends at the other vertex with an odd degree.

### The Significance of Euler's Work
Euler's solution to the Seven Bridges of Königsberg problem was a major breakthrough in the development of graph theory. It showed that the degree of a vertex in a graph can be used to determine whether or not there is a path that crosses all the edges exactly once. This insight has been used to solve many other problems in graph theory, and it continues to be an important tool in the study of networks today.

### Additional Resources
- [The Seven Bridges of Königsberg](https://en.wikipedia.org/wiki/Seven_Bridges_of_K%C3%B6nigsberg)
- [Eulerian Path](https://en.wikipedia.org/wiki/Eulerian_path)
- [Graph Theory](https://en.wikipedia.org/wiki/Graph_theory)
