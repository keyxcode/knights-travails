const Graph = require("./graph");

const g = new Graph();
const vertices = ["A", "B", "C", "D", "E", "F"];

// adding vertices
vertices.forEach((vertex) => g.addVertex(vertex));

// adding edges
g.addEdge("A", "B");
g.addEdge("A", "D");
g.addEdge("A", "E");
g.addEdge("B", "C");
g.addEdge("D", "E");
g.addEdge("E", "F");
g.addEdge("E", "C");
g.addEdge("C", "F");

g.printGraph();
// g.bfs("A"); // expect A B D E C F
g.dfs("A"); // expect A B C E D F
