# Chapter 6:

## What is a graph:

A graph is a data structure has a set of connections (nodes). Each graph is made up nodes and edges a node can be directly connected to many other nodes. Those nodes are called its neighbors.

### Types of graph:

- Directed graph: (u,v) !== (v,u)
- Un-directed graph: (u,v) == (v,u )

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
