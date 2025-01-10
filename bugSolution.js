function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed.'); // Throw error for null values
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
//console.log(foo(null, 2)); // Throws Error
//console.log(foo(1, null)); // Throws Error
//console.log(foo(null, null)); // Throws Error

//Alternative solution with default values
function foo2(a = 0, b = 0) {
    return a + b;
}
console.log(foo2(1,2)); //Output: 3
console.log(foo2(null, 2)); //Output: 2
console.log(foo2(1, null)); //Output: 1
console.log(foo2(null, null)); //Output: 0