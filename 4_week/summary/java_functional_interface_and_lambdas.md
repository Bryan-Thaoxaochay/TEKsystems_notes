# Functional Interfaces + Lambda Expressions
## Functional Interface
Purpose
- can be instantiated easily w/ the use of a lambda expression  

Rules
- allows only 1 abstract method
- other methods must be default or static  

*Java 8 comes w/ built-in functional interfaces*
- Consumer, Supplier, etc.  

## Lambda Expressions
Purpose
- provide inline implementation w/o having to instantiate a class + call a method  

Rules
- name
  - shouldn't be assigned to a var name on its' own
- params
  - datatype not specified
  - 1 param: () unnecessary
- body
  - 1 statement: {} unnecessary
- return value
  - 1 statement: implicit return
  - 2+ statements: explicit return keyword  

## Syntax of Functional Interface + Lambda Expression
```
@FunctionalInterface
public interface FunctionalInterfaceName {
  public String abstractMethod(String s);
  
  default void defaultMethod() { ... }
  
  static default void staticMethod() { ... }
}

// Outside functional interface
FunctionalInterfaceName example = (s) -> s;

example.abstractMethod("Hello");
```
