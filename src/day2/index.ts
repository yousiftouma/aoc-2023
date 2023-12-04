export const solve = (input: string): string => {
  // Your solution logic for day 1 goes here
  // Parse the input, perform calculations, and return the result
  const lines = input.split("\n");
  const result = solveFirst(lines);

  return result;
};

const solveFirst = (input: Array<string>): string => {
  // Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
  // return ID when possible, 0 when impossible
  const sum = input.map((line) => {
    const maxRed = 12;
    const maxGreen = 13;
    const maxBlue = 14;
    // get the sets
    const sets = line.split(":")[1].split(";");
    // a set 1 blue, 2 green
    for (let i = 0; i < sets.length; i++) {}

    return getGameId(line);
  });

  return sum.toString();
};

const getGameId = (line: string): number => {
  return Number.parseInt(line.split(":")[0].split(" ")[1]);
};
