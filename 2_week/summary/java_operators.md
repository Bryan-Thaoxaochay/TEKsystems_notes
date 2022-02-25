# Java Operators

## Operator Precendence
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

## Arithmetic
- addition: +
- subtraction: -
- multiplication: *
- division: /
- modulo: %  

## Relational
- equal: ==
- not equal: !=
- greater than: >
- less than: <
- greater than or equal to: >=
- less than or equal to: <=
- instanceOf: is var a specific type of class/subclass
```
Student s = new Student();
s instanceOf Student;
```  

## Conditional
- combine conditional statements
- return boolean value
- short circuit  

- && AND
- || OR
- ! NOT
- & AND w/o short-circuiting
- | OR w/o short-circuiting
- ^ exclusive OR: takes 2 boolean operands and returns true if the operands are different + vv

## Assignment Operator
- assign result of operation back to same var  

- addition: +=
- subtraction: -=
- multiplication: *=
- division: /=
- remainder: %=  

## Unary Operators
- 1 operand only
```
-(operand) // minus
--(operand) // decrement by 1
+(operand) // plus
++(operand) // increment by 1
!(operand) // not
```  

## Ternary Operator
- shorter if-else statement
- 3 operands
```
(condition) ? statement if true : statement if false;

50 < 100 ? "less than 100" : "greater than 100";
```