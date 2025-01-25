function foo(a, b) {
  // Strict type checking
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers');
  }
  return a + b;
}
console.log(foo(1, 1)); // Output: 2
console.log(foo(1, "1")); // Throws an error

function foo2(a, b) {
  // Explicit type conversion
  return Number(a) + Number(b);
}
console.log(foo2(1, "1")); // Output: 2