import { sum } from "lodash";

export const solve = (input: string): string => {
  // Your solution logic for day 1 goes here
  // Parse the input, perform calculations, and return the result
  const lines = input.split("\n");
  //const result = solveFirst(lines);
  const result = solveSecond(lines);

  return result;
};

const solveSecond = (input: Array<string>): string => {
  // Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
  // get max for each color and multiply
  const values = input.map((line) => {
    let maxRed = 0;
    let maxGreen = 0;
    let maxBlue = 0;
    // get the sets, e.g. 1 blue, 2 green; 3 green, 4 blue, 1 red
    const sets = line.split(":")[1].split(";");
    for (let i = 0; i < sets.length; i++) {
      // a set, e.g. 1 blue, 2 green
      const set = sets[i];
      const colors = set.split(",");
      for (let j = 0; j < colors.length; j++) {
        // a color, e.g. " 1 blue"
        const currentColor = colors[j];
        const parts = currentColor.split(" ");
        const name = parts[2];
        const num = Number.parseInt(parts[1]);
        if (name.includes("red") && num > maxRed) {
          maxRed = num;
        }
        if (name.includes("blue") && num > maxBlue) {
          maxBlue = num;
        }
        if (name.includes("green") && num > maxGreen) {
          maxGreen = num;
        }
      }
    }
    return maxRed * maxGreen * maxBlue;
  });

  return sum(values).toString();
};

const solveFirst = (input: Array<string>): string => {
  // Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
  // return ID when possible, 0 when impossible
  const values = input.map((line) => {
    const maxRed = 12;
    const maxGreen = 13;
    const maxBlue = 14;
    // get the sets, e.g. 1 blue, 2 green; 3 green, 4 blue, 1 red
    const sets = line.split(":")[1].split(";");
    for (let i = 0; i < sets.length; i++) {
      // a set, e.g. 1 blue, 2 green
      const set = sets[i];
      const colors = set.split(",");
      for (let j = 0; j < colors.length; j++) {
        // a color, e.g. " 1 blue"
        const currentColor = colors[j];
        const parts = currentColor.split(" ");
        const name = parts[2];
        const num = Number.parseInt(parts[1]);
        if (name === "red" && num > maxRed) {
          return 0;
        }
        if (name === "blue" && num > maxBlue) {
          return 0;
        }
        if (name === "green" && num > maxGreen) {
          return 0;
        }
      }
    }

    return getGameId(line);
  });

  return sum(values).toString();
};

const getGameId = (line: string): number => {
  return Number.parseInt(line.split(":")[0].split(" ")[1]);
};
