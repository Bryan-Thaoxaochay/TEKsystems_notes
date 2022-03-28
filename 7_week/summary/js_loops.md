# Loops
Purpose
- helps us run repeated code w/o having to retype it  

## Types of Loops
1. for loop
  - used if we know how many times we want to loop
  - often used w/ arrays
3. for..in loop
  - similar to the for loop, but used w/ objects instead of arrays
5. while loop
  - used if we don't know how many times we want to loop
7. do..while loop
  - similar to while loop, except it executes once then checks it's condition  

*All these loops can be set up to do the same thing. Some just make it easier to do a certain thing than others.*  

## Syntax
```
let array = [1, 2, 3, 4];
for (let i = 0; i < array.length; i++) {
  // do something w/ array values
}

let object = { 0: nice, 1: not nice };
for (let value in object) {
  // do something w/ object value
}

let i = 0;
while (i < 10) {
  // do something
  i++;
}

let j = 0;
do {
  // do something
  j++
} while (j < 10);
```
