/* 1. Create the file `solution.js`
2. Import the function you created in `stars.js`
3. Read the arguments from the terminal with `process.argv` and run the function you just imported, passing in those arguments */

import stars from './stars.js';

const args = process.argv.slice(2);
stars(...args);

