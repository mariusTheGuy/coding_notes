// You can try this in the debugger:
// put the code in the 'source' and create a breakpoint
// or http://latentflip.com/loupe/
function multiply(x, y) {
  return x * y;
}

function square(x) {
  return multiply(x, x);
}

function isRightTriangle(a, b, c) {
  return square(a) + square(b) === square(c);
}

isRightTriangle(3, 4, 5);
