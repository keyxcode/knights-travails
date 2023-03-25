const LOWER_LIMIT = 0;
const UPPER_LIMIT = 7;
const BOARD_SIZE = (UPPER_LIMIT - LOWER_LIMIT + 1) ** 2;

function possibleNextLocations(current) {
  // current is an array of 2 elements representing x and y. Ex: [0, 1]

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
      return formatPathResult(currentPathToHere);
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

function knightTours(start, visitedLocations = new Set()) {
  if (visitedLocations.has(JSON.stringify(start))) return;
  if (visitedLocations.size === BOARD_SIZE) {
    return visitedLocations;
  }

  visitedLocations.add(JSON.stringify(start));
  const nextLocations = possibleNextLocations(start);
  nextLocations.forEach((location) => {
    return knightTours(location, visitedLocations);
  });

  return visitedLocations;
}

function formatPathResult(path) {
  // Takes an array of array for example [[1, 2], [0, 0], [4, 7]]
  let printedPath = "";
  const pathLastIndex = path.length - 1;
  path.forEach((location, i) => {
    if (i === pathLastIndex) {
      printedPath += `[${location}]`;
      return;
    }
    printedPath += `[${location}] -> `;
  });
  return `${pathLastIndex} moves : ${printedPath}`;
}

module.exports = { possibleNextLocations, knightMoves, knightTours };
