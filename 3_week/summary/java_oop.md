# Object-Oriented Programming
We organize our programs around objects  

Why?
- Organization
- Reusability
- Scalability
- Efficiency  

**Classes** - containers for the code  
**Methods** - functions of the class  
**Variables** - where the data used in the class methods are stored  

## Encapsulation
For data hiding
- Vars of a class can only be accessed via the methods of that class  

Why?
- Keeps data from being interfered w/ + misused  

### Getter + Setter Methods
Methods dedicated to retrieving and modifying the values of vars
- each class var should have a getter + setter method  

### static Keyword
Determines if a var or method belongs to a class or an instance of a class
- Belongs to Class: instance of the var or method isn't created when an object is created  
a. static  
b. Modify static var -> affects all instances  

- Belongs to Instance: instance of the var or method is created every time an instance is  
a. not static  
b. Modify non-static var -> affects only for that instance  

### Access Specifiers
Control access of classes, methods, + vars  

For methods + vars
- private: only available in class defined
- default (none given): available in any class of the same package
- protected: only available in class defined + its children within current + different package
- public: available in any class of any package

## Inheritance
The methods + vars of a class can be passed down to a child class
- Parent (super) Class -> Child (subclass) Class  

Why?
- Helps w/ the reusability + organization of our code  

### Parent + Child Relationship
- every class has at least 1 parent
- child classes can also be a parent
- child classes can have additional vars + methods that aren't in the parent
- parent classes cannot use the vars + methods in the child  

### super Keyword
Allow us to access constructors, methods, + vars of the parent class
```
super(); // calls parent constructor
super.fieldName; // access parent var
super.methodName(); // access parent method
```  

### Overriding Parent Methods
Child class method can replace the parent method
- STAYS THE SAME: method name, return type, params
- *only the logic changes*
```
public class Child extends Parent {
  @Override
  public (same return type) sameMethodName (same params...) {
    // different logic
  }
}
```  

## Polymorphism
Vars, methods, + objects can change to complete various tasks  

Why?
- Works well w/ inheritance to improve reusability + efficiency of our code  

## Abstraction
Specifying the essential vars + methods needed for a class  

Why?
- Improves efficiency of our code  

Accomplished w/:
- abstract methods
- abstract classes
- interfaces  

### Abstract Methods
Declaring the method in the abstract class, but providing the logic in the child class  

Why?
- we do this because the logic might have to change w/ each child class, saving us time  

Syntax
```
accessModifier abstract returnType methodName(params...);
```
- no body statements  

### Abstract Classes
Classes that contain abstract and regular methods
- no instances of the class can be created
- methods are accessible via the child class  

Why?
- allows us to specify which methods are essential for the purpose of the class  

Syntax
```
accessModifier abstract class ClassName {
  // abstract + regular methods
}
```

### Interfaces
Similar to an abstract class, but only contains abstract methods + final vars
- no instances or constructors available  

By default:
- vars are public, static, + final
- methods are public + abstract
- *WHEN DEFINING VARS + METHODS, THOSE KEYWORDS DON'T NEED TO BE EXPLICITLY TYPED*  

Syntax
```
accessModifier interface InterfaceName {

}

accessModifier class ClassName implements InterfaceName {

}
```  

### Abstract Classes vs Interfaces
Abstract class if
- logic for some methods will be the same in all child classes
- vars will be used + changed for all child classes  

Interface if
- vars in all child classes will be constant