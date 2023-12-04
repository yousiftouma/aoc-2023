// const rsync = require("rsync");
//
// rsync()
//   .flags("a") // Archive mode (recursive copy + retain attributes)
//   .source("src/")
//   .destination("dist/")
//   .exclude("**/*.ts") // Exclude TypeScript files
//   .exclude("**/*.map") // Exclude source maps
//   .execute((error, code, cmd) => {
//     if (error) {
//       console.log(code, cmd);
//       console.error(`Error copying input files: ${error}`);
//       process.exit(1);
//     } else {
//       console.log("Input files copied successfully.");
//     }
//   });

const copyfiles = require("copyfiles");

copyfiles(["src/**/*.txt", "dist"], { all: true, up: 1 }, (error) => {
  if (error) {
    console.error(`Error copying input files: ${error}`);
    process.exit(1);
  } else {
    console.log("Input files copied successfully.");
  }
});
