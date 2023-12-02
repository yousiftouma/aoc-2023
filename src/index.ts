import * as fs from 'fs';
import * as path from 'path';

const readInput = (filename: string): string => {
  try {
    const data = fs.readFileSync(filename, 'utf8');
    return data.trim();
  } catch (error) {
    if (error instanceof Error) {
        console.error(`Error reading input from ${filename}: ${error.message}`);
      } else {
        console.error(`Error reading input from ${filename}`);
      }
      process.exit(1);
  }
};

const main = () => {
  const args = process.argv.slice(2);

  if (args.length !== 1) {
    console.error('Usage: npm start <day>');
    process.exit(1);
  }

  const day = args[0];
  const inputPath = path.join(__dirname, day, 'input.txt');
  const codePath = path.join(__dirname, day, 'index.js');

  if (!fs.existsSync(codePath)) {
    console.error(`Code file not found for day ${day}`);
    process.exit(1);
  }

  const input = readInput(inputPath);

  // Dynamically import and run the code for the specific day
  import(codePath)
    .then((dayModule) => {
      if (dayModule.solve) {
        const result = dayModule.solve(input);
        console.log(`Day ${day} - Solution: ${result}`);
      } else {
        console.error(`Day ${day} - solve function not found`);
        process.exit(1);
      }
    })
    .catch((error) => {
      console.error(`Error running code for day ${day}: ${error.message}`);
      process.exit(1);
    });
};

main();
