# Incorrect Null Handling in JavaScript Function

This repository demonstrates a common error in JavaScript: incorrect handling of null values in a function.  The `foo` function attempts to add two numbers, but it returns 0 if either input is null. This behavior might be unexpected and can lead to subtle bugs in larger applications.

The `bug.js` file contains the erroneous code. The `bugSolution.js` file demonstrates a more robust approach that addresses the null value issue.

## Problem

The `foo` function in `bug.js` returns 0 when either input is null. This behavior is not always desirable or intuitive. A more appropriate approach would either throw an error or provide a more meaningful default value.

## Solution

The `bugSolution.js` file shows two different ways to improve null handling: 

1. **Throwing an error:** This approach is more suitable when null values are unexpected or indicate a programming error.
2. **Providing a default value:** This approach is more suitable when null values might be expected under certain circumstances, such as optional parameters.

Choose the method that aligns with the specific requirements and context of your application. 