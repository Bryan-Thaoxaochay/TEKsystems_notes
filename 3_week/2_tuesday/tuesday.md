# Week 3: Tuesday - Java Core Programming
## Classes
- template for creating objects
- contains functions that we make
- there are pre-defined classes that have built-in functions already  

*We create instances of the class called objects in order to use the functions inside the class*  

**Creating an Object**
```
ClassName varName = new ClassName();
```
- new: creates a new object of the class
- constructor: special method that initializes new objects  

## Wrapper Classes
- gives built-in methods to the primitive data types, since they originally don't have them
```
int i = 1;
Integer ii = 1;
i.(// no methods appear);
ii.(// list of methods appear);

(primitive type) -> (wrapper class)
boolean -> Boolean
char -> Character
byte -> Byte
short -> Short
int -> Integer
long -> Long
float -> Float
double -> Double
```
Auto-Boxing - primitive value -> wrapper class  
Un-Boxing - wrapper class -> primitive value
```
int a = 20;
Integer autoBoxing = a;

Integer i = 56;
int unBoxing = i;
```  

## Math Class
- many built-in methods for math calculations
- CONSTANTS, trig methods, exponential methods, rounding methods, min + max + abs methods, etc.

### Syntax
```
Math.methodName(value);

Math.round(2.6) // 3
```

## String Class
- sequence of characters (i.e. "string")
- *immutable*: the object (i.e. "welcome") cannot change, but the reference (i.e. s1) to the object can
- *the string class has many built-in methods available*

### Syntax
```
// String Literal
String s1 = "welcome";
String s2 = "welcome"; // no new instance of String

// new Operator
String s = new String("welcome") // 2 objects + 1 reference var created
```
- bc the string is the same value, a new reference is created that points to that string
- if it wasn't the same value, a new instance would have to be created
- *string literal saves memory compared to new Operator*  

**String methods return a new String object because strings are immutable. They do not modify the original string.**  

### Concatenation
- combining strings and vars
```
String message = "Welcome " + "to " + "Java";
String a = " my Friend";

String concatWithPlus = message + a; // "Welcome to Java my Friend"
String concatWithConcatMethod = message.concat(a); // "Welcome to Java my Friend"
```

### String -> Number
Integer.parseInt() OR valueOf() methods
```
String intString = "1";

int intValue = Integer.parseInt(intString); // String -> Primitive

Integer IntWrapper = Integer.valueOf(intString); // String -> Non-Primitive
```  

### Number -> String
toString()
```
Integer number = 10;
number.toString();

Integer.toString(10);
Boolean.toString(false);
```

### Format Output
System.out.printf(format, items) OR System.out.format(format, items)
- format: string w/ substrings + format specifiers
- format specifiers: how a value should be displayed (i.e. numeric, boolean, string, etc.)
- *specifiers begin w/ %*
```
%b -> boolean
%c -> character
%d -> int w/o decimals
%f -> int w/ decimals
%e -> int in scientific notation
%s -> string

int count = 5;
double amount = 45.56;

System.out.printf(
  "count is %d and amount is %f",
  count, amount
); 

// "count is 5 and amount is 45.56"
```
- %d matches w/ count arg
- %f matches w/ amount arg
- *# of specifiers = # of args*  

## Conditional Statements
### Boolean Operators
- && AND
- || OR
- ! NOT
- & AND w/o short-circuiting
- | OR w/o short-circuiting
- ^ exclusive OR: takes 2 boolean operands and returns true if the operands are different + vv

### Conditional Operator (ternary)
```
condition ? true statement : false statement;
```
- takes 3 arguments  

### Operator Precendence
- when evaluating a statement, there is an order of execution w/ the operands  

1. Parentheses
1. Unary Operators
1. (*) and (/)
1. (+) and (-)
1. bitwise operators
1. logical operators
1. ternary operators
1. assignment operators  

*If the operator is the same, all operators but assignment operators are left -> right*

### If Statements
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

### Switch Case Statements
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