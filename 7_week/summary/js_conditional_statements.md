# Conditional Statements
Purpose
- help us control the flow of our program
- *if this occurs, do this*  

## Types of Statements
1. If
  - allows us to specify instructions for 1 condition
3. If...Else
  - allows us to specify instructions for 2 conditions
5. If...Else If...Else
  - allows us to specify instructions for 2+ conditions
7. switch
  - allows us to specify instructions for 2+ conditions  

*If...else if...else VS switch*
- switch statements don't have as much functionality as if/else if/else because they can only test 1 variable  

## Conditionals + Operators
It is very common to use operators w/ conditionals.
- conditions must evaluate to a boolean value (true/false)
- this is mainly accomplished by using operators  

## Syntax
```
let condition = 10;

if (condition === 10) {
  // do this
} else if (condition < 10) {
  // do this
} else {
  // do this
}

switch (condition) {
  case 1:
    // do this
    break;
  case 2:
    // do this
    break;
  default:
    // do this
}
```
