import { min, sum } from "lodash";

export const solve = (input: string): string => {
  //return solveFirst(input);
  return solveSecond(input);
};

const solveSecond = (input: string): string => {
  const words = new Map<string, string>();
  words.set("one", "1");
  words.set("two", "2");
  words.set("three", "3");
  words.set("four", "4");
  words.set("five", "5");
  words.set("six", "6");
  words.set("seven", "7");
  words.set("eight", "8");
  words.set("nine", "9");

  const reversedWords = new Map<string, string>();
  reversedWords.set("eno", "1");
  reversedWords.set("owt", "2");
  reversedWords.set("eerht", "3");
  reversedWords.set("ruof", "4");
  reversedWords.set("evif", "5");
  reversedWords.set("xis", "6");
  reversedWords.set("neves", "7");
  reversedWords.set("thgie", "8");
  reversedWords.set("enin", "9");

  const keys = Array.from(words.keys());
  const values = Array.from(words.values());

  const reversedKeys = Array.from(reversedWords.keys());
  const reversedValues = Array.from(reversedWords.values());

  const lines = input.split("\n").map((line) => {
    const firstNumber = getLineResult(line, words, keys, values);

    const reversedLine = line.split("").reverse().join("");

    const lastNumber = getLineResult(
      reversedLine,
      reversedWords,
      reversedKeys,
      reversedValues
    );

    const result = firstNumber.concat(lastNumber);
    const numberResult = Number.parseInt(result);
    return numberResult;
  });

  return sum(lines).toString();
};

const getLineResult = (
  line: string,
  wordMap: Map<string, string>,
  words: Array<string>,
  numbers: Array<string>
): string => {
  for (let i = 0; i < line.length; i++) {
    // check if it's a number
    if (Number.parseInt(line[i])) {
      return line[i];
    }
    // check if the upcoming chunk contains a number in words
    const chunkSize = min([line.length - i, 5]);
    const chunk = line.substring(i, i + chunkSize!);
    const foundNumbersInChunk = numbers.filter((number) =>
      chunk.includes(number)
    );

    if (foundNumbersInChunk.length > 0) {
      // if we find a number in the chunk, we need to know what to do with it
      // if the chunk has a word before the number, that's the number we want, so let's check a smaller chunk starting before the first number
      const lowestIndex = min(
        foundNumbersInChunk.map((foundWord) => chunk.indexOf(foundWord))
      );

      const newChunk = chunk.substring(0, lowestIndex!);
      const foundWordsInNewChunk = words.filter((k) => newChunk.includes(k));

      if (foundWordsInNewChunk.length > 0) {
        // if we find any words in the smaller chunk, let's pick the first occurence
        let index = 100;
        let length = -1;
        for (let j = 0; j < foundWordsInNewChunk.length; j++) {
          let currentWord = foundWordsInNewChunk[j];
          const currIndex = newChunk.indexOf(currentWord);
          if (currIndex < index) {
            index = currIndex;
            length = currentWord.length;
          }
        }
        const bestWord = newChunk.substring(index, index + length);
        const value = wordMap.get(bestWord);
        return value!;
      }
      // otherwise, we want to return the number we first found
      return chunk[lowestIndex!];
    }

    // no number in the chunk, let's see if there is a word

    const foundWordsInChunk = words.filter((k) => chunk.includes(k));
    if (foundWordsInChunk.length > 0) {
      let index = 100;
      let length = -1;
      for (let k = 0; k < foundWordsInChunk.length; k++) {
        let currentWord = foundWordsInChunk[k];

        const currIndex = chunk.indexOf(currentWord);
        if (currIndex < index) {
          index = currIndex;
          length = currentWord.length;
        }
      }
      const bestWord = chunk.substring(index, index + length);
      const value = wordMap.get(bestWord);
      return value!;
    }
  }
  return "0";
};

const solveFirst = (input: string): string => {
  // Your solution logic for day 1 goes here
  // Parse the input, perform calculations, and return the result
  const lines = input.split("\n").map((line) => {
    let result = "";
    let firstNumber = "";
    let lastNumber = "";
    for (let i = 0; i < line.length; i++) {
      if (Number.parseInt(line[i])) {
        if (!firstNumber) {
          firstNumber = line[i];
          continue;
        }
        lastNumber = line[i];
      }
    }
    result = firstNumber.concat(lastNumber);
    if (result.length === 1) {
      return Number.parseInt(`${result}${result}`);
    }
    return Number.parseInt(result);
  });

  return sum(lines).toString();
};
