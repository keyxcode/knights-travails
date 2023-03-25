const knightsModule = require("./index");
const possibleNextLocations = knightsModule.possibleNextLocations;
const knightMoves = knightsModule.knightMoves;

// Test possibleNextLocations
// console.log(possibleNextLocations([3, 2]));
// console.log(possibleNextLocations([2, 1]));

// Test knight moves
console.log(knightMoves([2, 1], [7, 7]));
