# Week 2: Friday - Intro to Java
## Intro to Java Prez
**Why Java?**
- intended to let developers "write once, run anywhere"  

### Java Development Kit
- software development environment to develop Java apps
- includes: Java Runtime Environment, interpreter (Java), compiler (javac), documentation generator (Javadoc), etc.  

**JRE**
- provides min requirements to execute a Java app
- includes: Java Virtual Machine, core classes, + supporting files  

**JVM**
- manages system memory + provides a portable execution environment  

#### JDK Editions
**Java SE**
- used to develop client-side standalone apps or applets
- applets: desktop apps
- client-side: front-end

**Java EE**
- used to develop server-side apps
- server-side: back-end  

*NEED Java SE + Java EE FOR FULLSTACK APPS*

**Java ME**
- used to develop apps for hand-held devices  

**Java FX**
- used to develop rich internet apps w/ a lightweight user-interface API  

### Creating a Project
Project -> Package -> Class -> main() Method
1. Create Project
1. Create Package  
a. right-click src folder  
b. 'new' > 'create package' + enter  
c. package folder appears under src directory

1. Create Class  
a. right-click package  
b. 'new' > 'create class' + enter  
c. class file appears under package directory  

1. Create main() Method  
a. type the main() method inside the public class  

**Class File after Steps**
```
package (package name);

public class (class name) {
  public static void main(String[] args) {
    // code
  } // end main()
} // end class
```

### Anatomy of Java Program
**Classes**
- classes are files in the src folder
- Upper CamelCase
```
public class ClassName {}
```  

**Main Method**  
- required in a class to run a class
- needs to be named *main*
- program execution begins w/ main()
```
public static void main(String[] args) {}
```  

**Statements**
- action or sequence of actions
```
System.out.println("Welcome to Java");
```  
- *semicolon is needed after every statement*  

**Reserved Words**
- keywords used in Java that can't be used as var names
- i.e. public, class, static, etc.  

**Special Symbols**  
Curly Braces
- forms a block that groups statements  

Parentheses
- used w/ methods  

Square Brackets
- used for arrays  

Comments
- single-line comments use //
- multi-line comments use /* */  

Quotations
- used around a string
```
{
  // multiple statements
}

main()

[]

// single-line comment
/*
many
lines
*/

"strings"
```


### Naming Conventions
**Packages**
- all lowercase
- For small projects: packagename
- For companies + large projects: com.(companyname).(utilities)  
org.teksystem.training.javadeveloper  

**Classes**
- Upper CamelCase  

**Methods**
- lower camelCase
- use verbs related to the purpose

**Variables**
- lower camelCase
- start w/ alphabetical char
- short-lived vars can have very short names (i.e. i for a for loop)
- constants: written in all UPPERCASE (i.e. MAX_HEIGHT)  

### Program Errors
**Syntax Errors**  
Errors w/ the physical typing of the language
- i.e. a missing curly brace  

**Runtime Errors**  
Program runs but doesn't stop, eventually crashing  

**Logic Errors**  
Program runs but produces wrong output  

## Java Programming Fundamentals
### Variable Declaration
```
(datatype) (variable name / identifier) = (value);

// PRIMITIVE
double radius; // declaring var
radius = 20; // assigning var

char singleChar = 'h';

// REFERENCE/NON-PRIMITIVE
ClassName instanceVarName = new ClassName; // creating instance of class
String helloJS = "Hello JS";
```
- if no value given, var assigned to NULL  

**Naming Vars**
- can include: letters, digits, (_), and ($)
- must start w/: letter, (_), ($)
- cannot be: reserved word, true, false, or null
- length can be: 1+ chars  

**Declaring Constant Vars**
```
final (datatype) CONSTANTNAME = (value);
```
- final keyword declares this var as a constant
- names for constants are UPPERCASE  

**Statically Typed**
- every var needs to have a datatype declared
- the var cannot hold data that doesn't match the datatype
- *Java is a statically typed language*
- **Allows compiler to run programs faster + w/ less runtime errors**  

### Data Types  
Primitive  
*Nums w/o decimals*
- byte: 1 byte
- short: 2 bytes
- int: 4 bytes
- long: 8 bytes  

*Nums w/ decimals*
- float: 4 bytes
- double: 8 bytes  

*Boolean values*
- boolean  

*Strings*
- char  

Reference/Non-Primitive
- String
- Array
- Class  

### Type Casting
- Converting Data Types  

*Data types must be compatible*  
- Numeric data types are compatible w/ each other + char. Nothing is compatible w/ boolean  

**Widening / Auto Type Conversion**  
*byte -> short -> int -> long -> float -> double*
- smaller data type -> bigger data type
- long can go to float because long can be approximated to fit in float
```
(bigger data type) (var name) = (bigger data type) (var name of smaller data type);

byte dtax = 25;
double btax = (double) dtax;
```

**Narrowing / Explicit Type Conversion**  
*double -> float -> long -> int -> short -> byte*
- bigger data type -> smaller data type
- truncates the data value
```
(smaller data type) (var name) = (smaller data type) (var name of bigger data type);

double dtax = 2598.321;
byte btax = (byte) dtax;
```

**Automatic Type Promotion**
- implicit type conversions w/ arithmetics in expressions
- sometimes the value returned after an arithmetic expression is bigger than the data type, so Java automatically changes the data type into a bigger one  

**Explicit Type Casting**
- preparing to change the data type before an arithmetic expression executes
```
byte b = 50;
b = (byte) b * 2;
```  

### Operators
**Arithmetic**
- addition: +
- subtraction: -
- multiplication: *
- division: /
- modulo: %  

**Relational**
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

**Conditional**
- combine conditional statements
- return boolean value
- short circuit  

- AND: &&
- OR: ||  

**Assignment Operator**
- assign result of operation back to same var  

- addition: +=
- subtraction: -=
- multiplication: *=
- division: /=
- remainder: %=  

**Unary Operators**
- 1 operand only
```
-(operand) // minus
--(operand) // decrement by 1
+(operand) // plus
++(operand) // increment by 1
!(operand) // not
```  

**Ternary Operator**
- shorter if-else statement
- 3 operands
```
(condition) ? statement if true : statement if false;

50 < 100 ? "less than 100" : "greater than 100";
```