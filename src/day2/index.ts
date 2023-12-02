export const solve = (input: string): string => {
    // Your solution logic for day 1 goes here
    // Parse the input, perform calculations, and return the result
    const numbers = input.split('\n').map(Number);
    const sum = numbers.reduce((acc, num) => acc + num, 0);
  
    return sum.toString();
  };