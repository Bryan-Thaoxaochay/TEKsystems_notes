# Java Data Types
## Primitives
### Nums w/o decimals
- byte: 1 byte
- short: 2 bytes
- int: 4 bytes
- long: 8 bytes  

### Nums w/ decimals
- float: 4 bytes
- double: 8 bytes  

### Booleans
- boolean  

### Single Char Strings
- char  

## Reference / Non-Primitive
- String
- Array
- Classes  

## Type Casting
- converting data types  

Rule: data type must be compatible
- numeric data types + char
- boolean isn't compatible w/ anything  

*There are 4 ways of conversion*  

### Widening / Auto Type Conversion
*byte -> short -> int -> long -> float -> double*
- smaller data type -> bigger data type
- long can go to float because long can be approximated to fit in float
```
(bigger data type) (var name) = (bigger data type) (var name of smaller data type);

byte dtax = 25;
double btax = (double) dtax;
```

### Narrowing / Explicit Type Conversion
*double -> float -> long -> int -> short -> byte*
- bigger data type -> smaller data type
- truncates the data value
```
(smaller data type) (var name) = (smaller data type) (var name of bigger data type);

double dtax = 2598.321;
byte btax = (byte) dtax;
```

### Automatic Type Promotion
- sometimes the value returned after an arithmetic expression is bigger than the data type, so Java automatically changes the data type into a bigger one  

### Explicit Type Casting
- preparing to change the data type before an expression executes
```
byte b = 50;
b = (byte) b * 2;
```  