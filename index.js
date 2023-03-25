function possibleNextLocations(current) {
  // current is an array of 2 elements representing x and y. Ex: [0, 1]
  const LOWER_LIMIT = 0;
  const UPPER_LIMIT = 7;
  const KNIGHT_MOVES = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];
  const possibleNextLocations = [];
  KNIGHT_MOVES.forEach((move) => {
    const nextMoveX = move[0] + current[0];
    const nextMoveY = move[1] + current[1];
    if (
      nextMoveX < LOWER_LIMIT ||
      nextMoveX > UPPER_LIMIT ||
      nextMoveY < LOWER_LIMIT ||
      nextMoveY > UPPER_LIMIT
    ) {
      return;
    }
    possibleNextLocations.push([nextMoveX, nextMoveY]);
  });
  return possibleNextLocations;
}

function knightMoves(current, destination) {
  const queuedMoves = [{ location: current, pathToHere: [[current]] }];
  const visitedLocations = new Set(JSON.stringify(current));

  while (queuedMoves.length) {
    const currentMove = queuedMoves.shift();
    const currentLocation = currentMove.location;
    const currentPathToHere = currentMove.pathToHere;
    if (JSON.stringify(currentLocation) === JSON.stringify(destination)) {
      return currentPathToHere;
    }

    const nextLocations = possibleNextLocations(currentLocation);
    nextLocations.forEach((location) => {
      if (visitedLocations.has(location)) return;
      queuedMoves.push({
        location: location,
        pathToHere: [...currentPathToHere, location],
      });
      visitedLocations.add[JSON.stringify(currentLocation)];
    });
  }
}

module.exports = { possibleNextLocations, knightMoves };
