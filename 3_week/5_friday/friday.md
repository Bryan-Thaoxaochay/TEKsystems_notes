# Week 3: Friday - Java Core Programming
## OOP
### Polymorphism
Vars, methods, + objects are able to change to complete various tasks
- works w/ inheritance, because we inherit vars + methods from other classes + we can adjust them  

```
public class MainClass {
    public static void main(String[] args) {
        Animal animal = new Animal();
        Animal dog = new Dog();
        Animal cat = new Cat();
        // best practice to use Class datatype that the class extends from

        animal.animalSound();
        dog.animalSound();
        cat.animalSound();
    }
}
```
- Dog + Cat extend the Animal Class
- the same method is invoked, but different output comes out for each because it is different in each class  

### Abstraction
Hiding unwanted details + only showing the important info  

Implemented w/:
- abstract methods
- abstract classes + interfaces
- abstract keyword: non-access modifier for classes + methods  

Why Abstraction?
- reduces the amount of code since we don't have to create multiple methods for each variation of a function
- gives each class a basic structure  

**Abstract Methods**
```
accessModifier abstract returnType methodName(params...);
```
- no body statements
- body is inherited from its child class
- cannot be final or private  

**Abstract Classes**
- can have abstract + non-abstract methods
- instances can't be made from abstract classes
- child class extends from abstract class to provide logic to the abstract methods  

*CHILD CLASS MUST PROVIDE BODY FOR EVERY ABSTRACT METHOD*  

```
accessModifier abstract class ClassName {
  // Abstract + non-abstract methods
}
```  

Why Abstract Classes?  
- allows us to specify which methods are essential for the classes purpose  

### Interfaces
- only contain abstract methods + final vars
- no instantiating or constructors  

**Variables**
- vars are public, static, + final by default 

**Methods**
- methods are public + abstract by default  

**Classes**
*Interfaces can only extend another interface*  
*Classes can extend an interface*
- must provide body for every method  

```
accessModifier interface InterfaceName {

}

accessModifier class ClassName implements InterfaceName {

}
```  

**Abstract Classes vs Interfaces**  
Abstract Class
- if logic for some methods will be the same in all child classes
- if vars will be used + changed for all child classes  

Interface
- if vars in all child classes will be constants  

1. Create Interface  
a. Essential methods  
b. Constant vars  

1. Create Abstract Class that implements Interface  
a. Vars that all child classes use  

1. Create Class that extends Abstract Class  

## Enums
Small classes to contain a set of constant values
- declared inside or outside of a class
- not declared in a method
- final, public, + static by default

```
accessModifier enum Days {
  SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY
}

public static void getDay(Days day) {
  System.out.println(day);
}

public static void main(String[] args) {
  getDays(Days.MONDAY); // MONDAY
}
```

## Generics
Create classes + methods that work w/ different data types
- generic method: accepts any data type  

```
// generic class
accessModifier class ClassName<anything> {

  accessModifier anything varName;

  // generic method
  accessModifier <anything> returnType methodName(anything paramName) {}
}
```  

### Limiting Data Types
Accomplished by specifying a class or interface to extend from
```
public < T extends Class/Interface > void methodName(T paramName) {}
```
- use extends for class or interface