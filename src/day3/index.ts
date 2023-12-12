import { forEach, sum } from "lodash";
import * as nj from "numjs";

export const solve = (input: string): string => {
  // Your solution logic for day 1 goes here
  // Parse the input, perform calculations, and return the result
  const lines = input.split("\n");
  const result = solveFirst(lines);
  //const result = solveSecond(lines);

  return result;
};

const solveSecond = (input: Array<string>): string => {
  return "";
};

const solveFirst = (input: Array<string>): string => {
  const signMatrix = nj.zeros([input[0].length, input.length]);
  const indexMatrix = nj.zeros([input[0].length, input.length]).assign(-1);
  console.log(signMatrix);
  console.log(indexMatrix);
  const numbers: Int32List = [];
  let currentNumberIndex = 0;
  // skapa två matrix med bredd = längden på en inputsträng och höjd längden på inputlistan, en med siffror och en med bools
  // skapa en lista som ska hålla alla nummer
  // spara nuvarande nummerindex i listan
  // gå genom varje tecken
  // tom sträng för att hålla reda på nuvarande nummer
  // om det är en siffra, lägg på nuvarande siffra som vi bygger på och spara i matrisen vilket index siffran har och i andra matrisen false
  // om det är ett tecken, spara nuvarande nummer i listan, öka nummerindex med 1 och reset nuvarande nummer
  //   om det är en punkt, spara i andra matrisen false
  //   om det är ett tecken spara i andra matrisen true

  forEach(input, (line, row) => {
    forEach(line, (char, column) => {});
  });

  return "";
};

export const getValue = (line: string): number => 3;
