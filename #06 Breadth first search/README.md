# Chapter 6:

## What is a graph:

A graph is a data structure has a set of connections (nodes). Each graph is made up nodes and edges a node can be directly connected to many other nodes. Those nodes are called its neighbors.

### Types of graph:

- Directed graph: (u,v) !== (v,u)
- Un-directed graph: (u,v) == (v,u )

## A graph can be represented in mainly two ways. They are:

- **Adjacency Matrix:** Adjacency Matrix is a 2D array of size V x V where V is the number of vertices in a graph.

  **Pros:** Representation is easier to implement and follow. Removing an edge takes O(1) time. Queries like whether there is an edge from vertex ‘u’ to vertex ‘v’ are efficient and can be done O(1).

  **Cons:** Consumes more space O(V^2). Even if the graph is sparse(contains less number of edges), it consumes the same space.

  **Example:** var graph = { vertex1: [0,1,0],
  vertex2: [1,0,1],
  vertex3: [1,1,0]
  }

- **Adjacency List:** An Adjacency list is an array consisting of the address of all the linked lists.

## Breadth-first search:

Breadth-first search is a kind of searching algorithm runs on graphs. It can help you answer two types of questions:

- Is there a path from node A to node B?
- What is the shortest path from node A to node B?

## Queues:

A queue is called a FIFO data structure it has only two operations enqueue and dequeue.

## Recap:

- Breadth-first search tells you if there's a path from A to B.
- If there's path breadth-first search will find the shortest path.
- If you have a problem like "find the shortest X" try modeling your problem as a graph and use breadth-first search to solve.
- A directed graph has arrows and the relationship follows the direction of the arrow. rama -> adit "rama follows adit".
- Undirected graph don't have arrows and the relationship goes both way. rama -> adit and adit -> roma (rama follows adit and vice-versa).
- Queues are FILO data-structure.
- Stacks are LIFO data-structure.
- You need to check people in the order they were added to the search list so the search list needs to be a queue
- Once you check someone, make sure you don't check them again. Otherwise, you might end up in an infinite loop.

## Resources:

- [Comparison between Adjacency List and Adjacency Matrix representation of Graph](https://www.geeksforgeeks.org/comparison-between-adjacency-list-and-adjacency-matrix-representation-of-graph/)
- [Graph Adjacency Matrix implementation](https://ide.geeksforgeeks.org/9je5j6jJ13)
