const knightsModule = require("./index");
const possibleNextLocations = knightsModule.possibleNextLocations;
const knightMoves = knightsModule.knightMoves;
const knightTours = knightsModule.knightTours;

// Test possibleNextLocations
// console.log(possibleNextLocations([3, 2]));
// console.log(possibleNextLocations([2, 1]));

// Test knight moves
console.log(knightMoves([2, 1], [7, 7])); // expect 5 moves
console.log(knightMoves([2, 5], [5, 0])); // expect 4 moves
console.log(knightMoves([3, 4], [5, 6])); // expect 4 moves
console.log(knightMoves([5, 2], [0, 4])); // expect 3 moves
console.log(knightMoves([7, 5], [1, 4])); // expect 3 moves
console.log(knightMoves([0, 6], [0, 6])); // expect 0 moves
console.log(knightMoves([1, 3], [2, 1])); // expect 1 moves

// Test knight tours
console.log(knightsModule.knightTours([0, 0]));
