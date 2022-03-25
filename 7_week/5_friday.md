# Week 7: Friday - JavaScript
## Events
- actions that take place in the browser
- can occur based on browser or user  

### **Event Handlers**
- block of code that will execute when an event occurs  

*3 Ways to Assign Event -> Element*
```
object.EventName() = function() {};
object.EventName() = methodname();
object.addEventListener("EventName", function); // <--- preferred way
```
- removeEventListener(): removes event from an element
- the 1st arg in .addEventListener accepts "click" but not "onclick"  

### **Mouse Events**
- clicking or moving of the mouse over specific elements  

| Event Handler | Description |
| - | - |
| onclick | mouse clicks on element |
| onmouseover | mouse moves over element |
| onmouseout | mouse leaves an element |
| onmousedown | mouse clicking down on an element |
| onmouseup | mouse releasing click on an element |
| onmousemove | mouse moving in element |
| onmouseenter | mouse moves over element + it's descendants |
| onmouseleave | mouse leaves an element + it's descendants |  

### **Form Events**
- actions related to forms  

| Event Handler | Description |
| - | - |
| onsubmit | when a form is submitted |
| onfocus | when an element is selected |
| onblur | when an element loses focus |
| onchange | when user changes the value of a form element |  

### **Keyboard Events**
- keyboard actions  

| Event Handler | Description |
| keydown | when key is pressed |
| keyup | when key is released |
| keypress | continuous execution when key is pressed |  
- *keypress doesn't work w/ keys that don't produce a character*  

*There are properties available for keyboard events*
- keycode: # related to the key
- key: character name of the key
- code: physical key being pressed  
```
document
  .addEventListener("keydown", function() {
    let keyCode = event.keyCode;
    let key = event.key;
    let code = event.code;
  });
```