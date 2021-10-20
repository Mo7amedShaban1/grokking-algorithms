# Chapter 7:

## Dijkstra Algorithm:

Dijkstra's algorithm is an algorithm which finds the shortest paths between nodes in a graph.
Dijkstra's algorithm works on undirected, connected, weighted graphs.

## Dijkstra algorithm has four steps:

- Find the cheapest node. This is th node you can get to in the least amount of time.
- Check whether there's a cheaper path to the neighbors of this node. If so, update their costs.
- Repeat until you've done this for every node in the graph.
- Calculate the final path.

## Recap:

- Breadth-first search is used to calculate the shortest path for an unweighted graph.
- Dijkstra algorithm is used to calculate the shortest path for a weighted graph.
- Dijkstra algorithm works when all the weights are positive.
- If you have negative weights, use the Bellman-Ford algorithm
