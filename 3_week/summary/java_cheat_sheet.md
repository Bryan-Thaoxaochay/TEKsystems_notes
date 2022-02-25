# Java Cheat Sheet
## Conditionals
### if/else Statement
```
// one-way
if (conditional) {
  // statements executed if condition is passed
}

// two-way
if (conditional1) {
  // statements for true
} 
else if (condition2) {
  // statements if first condition is false and this one is true
}
else {
  // statements if all conditions are false
}
```
- {} are optional if only 1 statement
- () are required  

### switch case Statement
```
switch (var) {
  case case1:
    // code
    break;
  case case2:
    // code
    break;
  ...
  ...
  default:
    // code
}
```
- must eval to int, string, char, or enum
- cases must be literals/constants + the type matches the var
- break statements are needed
- default case executes if no other cases match  

## Loops
### while Loops
- block of code is executed as long as the condition is true
```
// var used in the condition
while (condition) {
  // statements
  // statement that updates condition
}

int count = 0;
while (count < 100) {
  System.out.println("Hello");
  count ++;
}
```
- var needs to be declared outside while loop, so that it's updated value can be read in the condition
- a statement to update the condition is needed, otherwise we will get an infinite loop  

**DON'T USE FLOATING-POINT VALUES IN CONDITIONS**
- floating-point values use approximations, so unexpected behavior can occur  

### for Loops
- used to iterate over items in a sequence (i.e. elements in array / chars in string)
```
for (initialize var; condition; var value update) {
  // statements
}

for (int i = 0; i < 10; i++) {
  System.out.println("Hello");
}
```
- multiple vars and updates can occur in a for loop (), they need to be separated by a comma  

```
for ( ; ; ) {
  // statements
}
```
- the condition is optional. If omitted -> implicitly true -> infinite loop  

### Enhanced for Loops
- better suited to iterate through arrays + collections
```
int[] values = { 1, 2, 3, 4 };
for (int v : values) {
  // Statements
}
```
- int v: declaring a var that will hold the value of each iteration
- values: the var name of the collection  

## Arrays
- data structure that contains elements of the same data type
- fixed-size: the size of the array is specified and cannot be changed
- an object, because it's superclass is Object (Object < Array)
- reference types -> refer to memories already stored  

### 1-D Arrays
```
datatype[] arrayName = new datatype[size of array];

double[] myList = new double[10]; // Recommended way to create array
myList[0] = 1.9
myList[1] = 2.9
myList[2] = 3.4

double[] myList = { 1.9, 2.9, 3.4, 3.5};
```  

### Multidimensional Arrays
- array of arrays
```
// 2D
int[][] arrOfArrays = new int[# of inner arrays][length of inner arrays];
int[][] matrix2d = new int[4][2] {
  {1, 2},
  {3, 4}, 
  {5, 6}, 
  {7, 8}
}; // 4 Rows + 2 Columns

//3D
int[][][] threeDArray = new int[# 2d arrays][# of 3d arrays][length of 3d arrays];
int[][][] matrix3d = new int[2][2][2] {
  {
    {1, 2}, {3, 4}
  }, 
  {
    {5, 6}, {7, 8}
  }
};
```
- w/ each dimension added, 1 more [] is needed  

## Getter + Setter Methods
```
public class Person {
  private String name;

  // setter method for name
  public void setName(String name) {
    this.name = name;
  }

  // getter method for name
  public String getName() {
    return name;
  }
}
```

## Parent + Child Classes
```
public class Parent {}

public class Child extends Parent {}
```
- extends: keyword to create child class from parent class  