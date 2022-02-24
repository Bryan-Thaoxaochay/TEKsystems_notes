# Week 3: Thursday - Java Core Programming
## Arrays
### Multi-dimensional Arrays
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

## Object-Oriented Programming
- helps us organize our programs around objects
- this helps w/ organization, reusability, scalability, + efficiency  

*Classes* - container for the code  
*Methods* - functions of the class  
*Variables* - values used in the methods  

**Create instance of class -> fill w/ data -> execute logic w/ the data**  

### Encapsulation
Data Hiding
- Vars of a class are hidden from other classes + can only be accessed via the methods of the class they belong to

*Keeps the data from being interfered w/ + misused*  

Getter + Setter Methods
- used to modify and view var values
- should have 1 of each for each class var
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

### Static Keyword
Determines if a var or method belongs to a class and not to an instance of the class
- if it belongs to a class, a new instance of the var or method doesn't have to be created -> this saves memory

Modify static var -> changes all instances  
Modify non-static var -> changes for only that instance  

When to Use Static Method
- all instance methods share a specific piece of code
- call a method w/o creating an instance of the class
- the utility class cannot change
- you don't want the static method to be overridden
- method isn't instance vars + doesn't depend on instance creation

## Classes
- classes model the real world
- *Well-designed class -> reusable units of work* (i.e. String class provides all functions needed to work w/ string data)  

```
public class ClassName {

}
```
- public: (optional) classes w/o access specifier have access to packages
- class: keyword to declare a class  

**Object**  
- instance of a class, acting as a var
- allow us to access vars + methods within the class  

### Components of a Class
fields
- class vars that are available anywhere in the class, giving the object state  
- Usually declared at the top of the class  
- Numeric types automatically initialized to 0  
- Reference types automatically initialized to null  
- *Access specifier usually private or protected*  
```
access_specifier datatype varName;
access_specifier datatype varName = value;
```

methods
- work w/ the fields + manage the state of the object

constructors
- method to initialize a class
```
// Class
public class ClassName {
  // class vars

  // constructors
  public ClassName() {...}

  public ClassName(params...) {...}
}

// In main() method: creating instances of class
ClassName varName = new ClassName();
ClassName varName = new ClassName(args...);
```
- Constructor Overloading: calling multiple constructors w/ varying parameter list
- *if a constructor isn't created, Java will automatically create one w/ no arguments*  

finalizer 
- special methods called by the Garbage Collector  

**Access Specifiers**  
Control access to a class + its members
- public: class + member available everywhere
- private: member available only to class
- default (no specifier): class + member is available to the class + classes defined within same package
- protected: member available to class + all subclasses  

### this Keyword
- allows us to access vars and methods from the current object

## Methods
- block of code that can be reused
- accepts 0+ params
- return value is optional based on return type
```
(access specifier) (return type) methodName (params) {...}
```
- Access Specifier: public, private, protected, default
- Return Type: void or datatype
- Params: (datatype paramName)  

*Method Overloading* - having 1+ methods w/ the same name, but varying parameter lists or different data types
- use informative param names
- overloading can be useful when there are multiple scenarios w/ the params  

*Entry Point* - the first method to be executed when running a Java program
- main() method  

*Call Chain* - the execution of method after method after method, beginning w/ the entry point
- method -> method -> method -> method -> ...  

*Dead Code* - methods called nowhere  
- static code analyzers: can find dead code  

## Inheritance
A class can use the vars + methods of another class by inheriting from that class
- parent/super class: original class
- child/subclass: new class
- *constructors + static methods/fields are not inherited*
- every class has 1 parent (Object class is the default)
- child classes can also be inherited

*Child class can also have new vars + methods that the parent class doesn't have*  
*Inheritance is a one-way relationship. The parent class cannot use vars + methods of the child class*  

```
public class Parent {}

public class Child extends Parent {}
```
- extends: keyword to create child class from parent class  

### super Keyword
Allows us to access constructors, methods, + vars from the parent class
```
super(); // calls parent constructor
super.fieldName; // access parent var
super.methodName(); // access parent method
```  

### Overriding Parent Methods
Method in a child class can replace the logic of a parent method
- STAYS THE SAME: method name, return type, params
- *only the logic changes*
- changing the method in the child class doesn't affect the method in the parent class
```
public class Child extends Parent {
  @Override
  public (same return type) sameMethodName (same params...) {
    // different logic
  }
}
```  

