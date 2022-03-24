# Week 7: Thursday - JavaScript
## Objects
### **Prototypes**
- how JS objects inherit features from one another
  - features: properties + methods
  - i.e. Array object *inherit from* Array.prototype  

*Adding a New Prototype*
```
Person.prototype.firstName = "Bryan";
```
- same syntax to update a property via prototype  

### **Arrays**
- ordered collection of values
  - element: each item in the collection
    - element can be any data type
  - index: the position of the element in the array (begins at 0)
  - arrays are dynamic: their size can change  

Syntax
```
let arr = [1, "string", true, null, undefined, { key: value }, ["another", "array"]];

// OR

let arr = new Array();
  // 1 arg -> specify a size
  // 2+ args -> specifying initial values in array
```  

*Read Element*
```
let arr = [1, "string", true, null, undefined, { key: value }, ["another", "array"]];

arr[0]; // => 1
arr[arr.length - 1]; // => ["another", "array"]
```  

*Update Element*
```
arr[0] = "updated value";
```

*Add Element*
```
let a = [];
a[0] = 12;
a[0]; // => 12

a.push(23);
a; // => [12, 23];
```
- .push() adds it's arg to the end of the array  

*Delete Element*
```
let a = [2, 3, 4, 5];
delete a[0];
a; // => [undefined, 3, 4, 5]

a.pop();
a; // => [undefined, 3, 4]

a.shift();
a; // => [3, 4]
```
- .pop() removes last element
- .shift() removes first element  

*Methods*
| Name | Function | Parameters | Return Value |
| - | - | - | - |
| .split() | splits string and stores each part in an array | string specifying how to split the string ("") | returns array |
| .length() | counts # of elements | No params | returns # of elements |
| .reverse() | reverses order of element | No params | returns array in reverse order |
| .sort() | sorts array in specific order | function | returns sorted array |
| .join() | joins the elements in an array | string specifying how to join the elements (", ") | returns string of all joined elements |
| .toString() | converts array to a string | No params | returns string version of the array |
| .pop() | removes last element | No params | returns the last element |
| .push() | adds elements to the array | No params | returns new length of the array |
| .splice() | modifies the array | (start index, elements to delete, new element to add, new element to add, ...) | returns updated array |
| .slice() | retrieves a portion of an array | (start index, end index) | portion of array |

[Docs on More Methods + Explanations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)  

### **Date Object**
- methods to retrieve values about the data + time
- *uses the time zone of the computer*  

Syntax
```
let date = new Date();
```
- there are methods available to retrieve day, month, year, time, etc.  

[Docs on Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  

### **Number Object**
- object that let's us work w/ number data types  

[Methods + Properties for Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)  

### **Math Object**
- object that helps us do math calculations + retrieve mathematical constants (i.e. PI)  

Examples
```
Math.PI; // 3.14....
Math.round(4.7); // 5

Math.pow(8, 2) // 64
Math.sqrt(64); // 8
```
- *It isn't necessary to create a math object. It is already built-in by using the Math keyword*

[Methods + Properties for Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)  

## Document Object Model (DOM)
- structure of documents  

Purpose
- allows programs (i.e. JavaScript) to retrieve + update the content, structure, and/or style of a document
  - i.e. updating the text of a ```<p>``` tag  

*JavaScript has a DOM class w/ properties, methods, + events to work w/ the DOM*  
- HTML elements can be objects of the DOM class, therefore methods can be used on them  

[Methods + Properties of DOM Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)  

### **Selecting HTML Element**
- id attribute
- name attribute
- tag name
- class attribute
- CSS selector  

Syntax
```
document
  .getElementById("idName");
  .getElementsByName("element-name");
  .getElementsByTagName("p");
  .getElementsByClassName("class-name");
  .querySelector("#cssSelector");
```
- *methods that return 1+ elements return them in a NodeList*
  - accessing a NodeList is the same as accessing an array
  - NodeLists can't be modified
  - array methods can't be used on NodeLists directly, but can indirectly
    ```
    let li = document.getElementsByTagName("li");
    let myArr = Array.prototype.slice.call(li, 1, 3); 
      // indirectly calling method on NodeList
    ```  

### **Document Structure + Traversal**
*Structure*
- body
  - ul
    - li
    - li
  - ul
    - li
    - li  
```
body -> root node
ul -> sibling node of ul
ul -> parent node of li
li -> child node of ul
li -> sibling node of li
```

*All elements in the document are related: root, parent, child, siblings*
- these help us traverse the DOM
- properties
  - .parentNode
  - .childNodes[]
  - .firstChild
  - .lastChild
  - .nextSibling
  - .previousSibling

### **innerHTML Property**
- retrieve the content of an element
- update the content of an element

Example
```
document.getElementById("name").innerHTML = "Bryan";
```

### **Changing the DOM**
*Creating Nodes*
- createElement("")
- createTextNode();

*Inserting Nodes into the DOM*
- appendChild(new node): attach node as last node to parent node
- insertBefore(sibling node, new node): insert node before a specified sibling node
- replaceChild(current node, new node): replace current node w/ new node  

*Removing Nodes*
- removeChild(parentElement.childToRemove)
  ```
  parentElement.removeChild(parentElement.childElement);
  ```  

*Modifying Style*
- we can modify the style of the element w/ the use of the style attribute

Example
```
let div = document.getElementById("div-id");
div.setAttribute("style", "property: value");

// Further Style Stuff
div.style.property = "value";
...
```