import {sum} from 'lodash';

export const solve = (input: string): string => {
    //return solveFirst(input);
    return solveSecond(input);
  };

  export const solveSecond = (input: string): string => {
  
    const lines = input.split('\n').map((line) => {
      let result = '';
      let firstNumber = '';
      let lastNumber = '';
    });
      

    return sum(lines).toString();;
  };

  export const solveFirst = (input: string): string => {
  
    // Your solution logic for day 1 goes here
    // Parse the input, perform calculations, and return the result
    const lines = input.split('\n').map((line) => {
      let result = '';
      let firstNumber = '';
      let lastNumber = '';
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

    return sum(lines).toString();;
  };