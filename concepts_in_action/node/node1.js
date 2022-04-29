// https://nodejs.org/docs/latest-v14.x/api/

// RUN IT
// >node node1.js
console.log("Testing");

// global
// same concept as Window object in the browser
// console.log(global);

// process
// Big object associated with the global scope with a bunch of methods
//      console.log(process);

//      '/Users/marius/Desktop/code_notes/concepts_in_action/node'
//      process.cwd();

//      proccess.argv
//      console.log(process.argv);
//      [
//                                      executable path
//          '/usr/local/bin/node',
//                                      path to the target file to be executed
//          '/Users/marius/Desktop/code_notes/concepts_in_action/node/node1.js'
//       ]
//
//      We can pass our own arguments
//      >node node1.js puppie toy place time
const args = process.argv.slice(2);
console.log(
  `the ${args[0]} has a ${args[1]} but it is ${args[3]} to ${args[2]} it back`
);
