# General Info
## Data Types
*There are 6 primitive data types that a value in JavaScript can be:*
- number
  - float-point: number has a decimal
  - integer: number has no decimal
- string
  - any character text
- boolean
  - true or false
- null
  - no value
- undefined
  - no value
- symbol

*Objects*
- another data type, but not primitive
- more complex than the other data types  

## Variables
- like storage containers for our values  

Purpose
- allow us to use our values more easily in the code  

*Types of Variables*
- var
  - similar to let, but w/ a different scope
- let
  - used w/ all values
- const
  - if the value shouldn't change, use const  

Examples
```
var tired = true;
let string = "This is a string";
const PI = 3.14;
```

### **Scope**
- area of code that a variable can be used  

*Types of Scope*
- global: variable can be used anywhere in the code
- local: variable can only be used in the block of code where it is defined  

*Why is local preferred over global?*
- it is better to keep variables local because we don't want to accidentally change them in our program
  - that is only possible if the variable is available to use where it should not be used (global)  

*let vs var*
- use let over var because var isn't block-scoped  

Example
```
let globalVar = true;

function variables() {
  let localVar = true;
  // both variables are available to use in variables(), but localVar can't be used outside of it
  var variable = "use anywhere"; // this variable can be used outside of variables()
}
```

## Comments
- allow us to put text in our code that won't be executed when we run the program  

Purpose
- has many purposes, but the main one is to help explain the code and how it works  

Syntax
```
// single-line comment

/*
  multi-line
  comment
*/
```

## Debugger
- tool in JS that allows us to control the process of our program  

Purpose
- mainly to see what is wrong w/ our code + figure out why there are errors  

Syntax
```
// code
debugger
// code
```
- debugger keyword let's us choose a spot in our code to stop the process + find out info about our code  

## Errors
*2 Main Types of Errors*
- runtime error
  - occurs while program is running
- compile error
  - occurs while program is trying to be built  

*Runtime errors can be handled w/ try..catch blocks*
```
try {
  let a = 1;
} catch (e) {
  console.log(e);
}
```
- finally block can also be used
- errors can also be throwned
