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
  const possibleNextMoves = [];
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
    possibleNextMoves.push([nextMoveX, nextMoveY]);
  });
  return possibleNextMoves;
}

function knightMoves(current, destination) {
  const queuedMoves = [[current]];
  const visitedLocations = [];

  let numMoves = 0;
  while (queuedMoves.length) {
    const moves = queuedMoves.shift();
    // Analyze all the moves in a move array
    while (moves.length) {
      const move = moves.shift();

      let alreadyVisited = false;
      visitedLocations.forEach((location) => {
        if (location[0] === move[0] && location[1] === move[1]) {
          alreadyVisited = true;
        }
      });
      if (alreadyVisited) break;

      if (move[0] === destination[0] && move[1] === destination[1]) {
        return numMoves;
      } else {
        visitedLocations.push(move);
        queuedMoves.push(possibleNextLocations(move));
      }
    }
    numMoves++;
  }
}

// queue
// visited
// while (queue.length)
//    possibleNextMoves = queue[0]
//    while (possibleNextMoves.length)
//        nextMove = possibleNextMoves.shift()
//        if nextMove === destination return
//        else
//            queue.push(nextMove.possibleNextMoves) if not in visited[]

module.exports = { possibleNextLocations, knightMoves };
