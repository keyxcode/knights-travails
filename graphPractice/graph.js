class Graph {
  constructor() {
    // Map is an ES6 object
    // here we use the key of the map to hold a vertex
    // and the value holds an array of an adjacent nodes
    this.adjList = new Map();
  }

  addVertex(v) {
    // init a vertex with no connection to any other nodes
    this.adjList.set(v, []);
  }

  addEdge(v, dest) {
    // create undirected connections between 2 vertices
    this.adjList.get(v).push(dest);
    this.adjList.get(dest).push(v);
  }

  printGraph() {
    // get all the vertices
    const vertices = this.adjList.keys();

    for (const vertex of vertices) {
      // get the corresponding adjacencies for each vertex
      const adjacencies = this.adjList.get(vertex);
      let printedAdjacencies = "";
      adjacencies.forEach(
        (adjacency) => (printedAdjacencies += `${adjacency} `)
      );
      console.log(vertex + " -> " + printedAdjacencies);
    }
  }

  bfs(startingVertex) {
    const queue = [startingVertex];
    const visitedVertices = new Set(startingVertex);

    while (queue.length) {
      // Visit and log out the current vertex
      const visitedVertex = queue.shift();

      console.log(visitedVertex);

      // Enqueue its adjacencies
      const adjacencies = this.adjList.get(visitedVertex);
      adjacencies.forEach((adjacency) => {
        if (visitedVertices.has(adjacency)) return;
        queue.push(adjacency);
        visitedVertices.add(adjacency);
      });
    }
  }

  dfs(startingVertex) {}
}

module.exports = Graph;
