# Week 7: Wednesday - JavaScript
## JavaScript
### **Functions**
- block of code that is defined once, but can be invoked multiple times  

Syntax
```
function identifier(param1, param2) {
  // code to invoke
}
```
- function: keyword
- identifier: name of the function
- params: variables we want to use in the function (optional)
- {}: container for the code that will run every time the function is invoked   

Invoking a Function
```
identifier(arg1, arg2);
identifier(arg1, arg2);
identifier(arg1, arg2);
identifier(arg1, arg2);
```
- identifier: function name
- arguments: values passed to the parameters to use in the function  

*Parameters + Arguments*
- Parameters are like variables w/ no value until the function is called + arguments are given. Arguments are the values that the parameters will be assigned to.
- *The order of params + args must match in order*  

Function Return Value
- return type does not need to be specified
- any code after the return keyword will not be ran  

### **Variable Scope**
- where in the source code that a variable can be used  

*Types of Scope*
1. Global - variable can be used anywhere in the file
2. Local - variable can be used only in the block of code that it is defined in  

```
let scope = "global";

function localScope() {
  let scope = "local";
}
```  

### **Hoisting**
- JavaScript brings all object declarations (i.e. function invocation) to the top so that they are declared before being used  

*JS files are read from top to bottom by the interpreter.*
- things that will be used by other things must be declared above it to avoid errors  

### **Debugger**
- gives us control of the execution of the program  

Purpose
- helps us figure out issues w/ our code, by allowing us to see the values of things within our code  

Syntax
```
// code
debugger;
// code
```
- placing the debugger in the middle of our code will stop execution there, and allow us to see the value of things before the debugger  

### **Errors**
Runtime Error
- error that occurs while program is running
- Multiple types of errors
  - logic error: wrong output
  - memory leaks: program takes up too much RAM  
- can be handled w/ try...catch blocks
  - throw: keyword to throw custom errors  

```
try {
  // code
} catch (e) {
  console.log(e);
}
```

Compile Time Error
- error when building the program to run  

Syntax Error
- error w/ the syntax of the code  

### **Objects**
- non-primitive data-type to store data
- *unordered collection of key-value pairs*
  - key + value = property
  - key: must be a string
  - value: any data type  

*Creating Objects*
```
let object = {
  key1: "value:,
  key2: 1,
  key3: true,
  key4: null,
  key5: function() {},
  key6: { object: "this is an object" },
  key7: ["array"]
}

let string = new String();
let array = new Array();
```

*Accessing the Values in an Object*
```
object.key1;

// OR

object["key1"];
```

*for...in Loop*
- for loop to loop through objects  

Syntax
```
for (var in object) {
  let key = var[0];
  let value = var[1];
}
```  

*Deleting Properties*
```
delete object.key;

// OR 

delete object["key"];
```  

*Adding Properties*
```
object.newKey = "new value";

// OR

object["newKey"] = "new value";
```

*Constructors*
this
- allows us to set variables within the object equal to args passed to a constructor
```
function Person(firstName) {
  this.firstName = firstName;
}
```  

