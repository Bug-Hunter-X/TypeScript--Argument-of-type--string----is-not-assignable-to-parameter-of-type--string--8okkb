# TypeScript Type Error: Argument of type 'string[]' is not assignable to parameter of type 'string'

This repository demonstrates a common TypeScript error: passing an array of strings to a function expecting a single string.  The `greeter` function expects a single string, but the code attempts to pass an array. This leads to a type error.

The solution shows how to correctly handle this situation, either by modifying the function signature or by iterating over the array and calling the function for each element.