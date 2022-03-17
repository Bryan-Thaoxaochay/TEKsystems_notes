# Week 6: Thursday - HTML
## HTML
- markup language that tells the browser how to structure a web page  

### **Tags**
- the parts that determine the structure of the web page
- includes opened + closed tag:
- some tags are self-closed
  - they only need 1 tag to open + close  
```
<p>Open + Close Tag</p>

<img />
```  

### **HTML Base Template Code**
```
<!DOCTYPE html>
<html>
<head>
  <title></title>
</head>

<body>

</body>
</html>
```
- DOCTYPE: tells which version of html to use
- html: tells browser that this is a html document
- head: contains metadata
  - metadata: data about the html document (i.e. document title)
- title: name of the webpage
- body: contains tags that will structure the web page  

### **Block-Level vs Inline Elements**
Block-Level
- tags that take up a whole block on a webpage
  - block: the whole width of a webpage
  - any tags that come after this tag will appear on the next line

Inline
- tags that don't take up a whole block on a webpage
  - can be placed inside block-level elements  

### **Attributes**
- extra info to give to an element  

Purpose
- varies w/ the tag it is placed in
  - i.e. src attribute in an img tag determines where a picture is  

Syntax
```
<img src="http://url-to-image.com" />
```
- src: attribute name
- =
- "": value (in "")  

### **Class + Id Attribute**
Class Attribute
- can be placed in multiple tags, w/ the same values  

Id Attribute
- can be placed in multiple tags, but the values must differ  

Purpose
- helps us find tags that we want to use within a CSS or JavaScript file  

Syntax
```
<h1 class="header">Header 1</h1>
<h2 class="header">Header 2</h2>
<h3 class="header">Header 3</h3>

<p id="myName">Bryan</p>
<p id="someoneElse">Who Knows</p>
```  

### **HTML Table**
```
<table>
  
  <tr>
    <th></th>
    <th></th>
    <th></th>
  </tr>
  
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>

</table>
```
- table: indicates browser that this is a table
- tr: row of table
- th: column name
- td: table data  

### **HTML Form**
Multiple components
- text fields
- select boxes
- checkboxes
- buttons
- radiobuttons  

**Important way to retrieve user data**  

### **Browser Inspector**
- tool on browsers

Purpose
- allows us to see the structure + setup of a web page  

### **Document Object Model (DOM)**
- programming interface of HTML + XML
- structure of a web page  

Purpose
- allows us to manipulate the structure of a web page w/ a scripting language (i.e. JavaScript)  

### **Box Model**
- every element that exists will have a box model

Includes
- content
  - padding
    - border
      - margin  

### **Inline Styling**
- adding CSS in the tag of an element  
```
<div style="width: 200px"> ... </div>
```  

## CSS
- style sheet language  

Purpose
- allows us to change the display of elements  

Selectors
- elements we want to change  

Properties
- things we want to change of the element  

### **Internal Styling**
- adding CSS within the head tag of an HTML file

```
<style>
  ...css
</style>
```  

### **Selectors**
- elements we want to change  

Simple Selectors
- selecting via element's name, class, or id  

Attribute Selectors
- selecting via element's attribute/attribute value  

Pseudo-Class
- selecting via element's current state
- i.e. hovering over element  

Pseudo-Element
- selecting via the position of the element  

Combinators
- combining 2+ selectors for specific selections
- i.e. children of a div  

Multiple Selectors
- Using multiple selectors, separated by a comma
- useful when applying the same changes to multiple elements  

### **Properties + Values**
Properties
- things we want to change about the element  

Values
- what we want the element to be changed to  

### **CSS Syntax**
```
selector {
  propertyName: value;
  propertyName: value;
}
```

### **CSS Units**
| Unit | Description |
|-|-|
| px | pixels |
| em | current font * # specified |
| % | % of the width |  

### **Display Property**
2 ways to display an element
1. outer: how elements outside of it should be displayed around it
2. inner: how children of the element should be displayed  

Outer Values
- block
- inline
- run-in  

Inner Values
- flow
- flow-root
- table
- flex
- grid
- ruby  

*To save space, we can combine the outer + inner value on 1 line*
```
display: block flow;
```  

*If the element is a list, place list-item in the value*
```
display: list-item block;
```  

### **Class + Id**
- attributes given to elements so we can select them w/ CSS  

Rules
- don't start w/ # or special char
- start w/ letter or _
- separate words w/ -, _, or w/ lower camelCase
  - mainContainer
  - main-container
  - main_container
- names should be descriptive  

### **Selector Precedence**
- CSS starts from the top left + ends at the bottom right  

Precedence Order
- Inline Style
  - ID
    - Child to Parent
      - Class + Pseudo Class
        - Elements + Pseudo Elements  

### **Position Property**
- where an element is placed on the webpage  

Values
- static: element is placed based on other elements
- relative: element is placed relative to parent container
- fixed: element is stuck on the screen
- absolute: element placed relative to nearest positioned ancestor  

*Static doesn't have additional properties it can use, unlike the other valeus*