// A graph is a data structure has a set of connections (nodes).
// Each graph is made up nodes and edges
// A node can be directly connected to many other nodes. Those nodes are called its neighbors.
const graph = {
  Mohamed: ["Ahmed", "Wassem", "Alaa", "Ali"],
  Ahmed: [],
  Wassem: ["Mohamed"],
  Ali: [],
  Alaa: ["Mohamed", "Ahmed", "Wassem"],
};
