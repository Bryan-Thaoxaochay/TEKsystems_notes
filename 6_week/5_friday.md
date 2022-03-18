# Week 6: Friday - HTML + CSS
## Folder Structure
- the organization of files should be neatly sorted in folders  

*Group HTML files that are similar into the same folder. Group CSS files into their own folder as well*  

### **Path**
- location of a file  

Relative Path
- location of a file relative to another file  

Syntax
```
. - current directory
.. - move back 1 directory
/ - parsing forward or backward of directory  
```

Examples
```
./ - moving forward in directory
../ - moving backward in directory
```
- we can chain these to get to the file we want
  - ./dir1/dir2/dir3/filename
  - ../dir2/dir1  

*Pathing is used in many HTML tags: i.e. link tag, anchor tag, script tag*  

## CSS
### **Color Property**
- defines color of the font
- other properties related to color:
  - background-color
  - border-color  

*There are a couple ways to define the value for color*
- rgb()
- rgba()
- hex
- color  

```
color: rgb(23, 0, 3)
color: rgba(23, 0, 3, .33)

color: #A9F // short version of rgb
color: #AA99FF // long version of rgb

color: #A9FB // short version of rgba
color: #AA99FFBB // long version of rgba

color: blue
```  

### **Background Property**
- modifies background of a container  

*Background is the main property, w/ additional properties**
- background
- background-color
- background-attachment
- background-image
- background-repeat
- background-size
- background-position
- etc  

### **Border Property**
- modify border of a container  

*Values*
- width
- style of border
- color  

*Property*
- border-radius: determines the curvature of the container  
- 
```
border: 4mm ridge rgba(170, 50, 220, .6)
border-radius: 50%
```  

### **Text-align Property**
- modifies where the text is  

*Values*
- center
- left
- right
- justify: stretch lines so each line has = width
- initial: sets property to default value
- inherit: inherit value from parent element  

### **Float Property**
- indicates where an element should be placed in it's container
- other text + inline elements will wrap around it

*Values*
- left
- right  

*Clear Property*
- indicates where the element near the float elements should be placed
- Values
  - none
  - left
  - right
  - both  

### **gradient Value**
- controls the color of an image to transition to another color  

2 Types
- linear
- radial

Arguments
- direction
  - left
  - right
  - bottom
  - top
  - combos (to left bottom, to left top)
- 1st color
- 2nd color  

Example
```
background: linear-gradient(to left bottom, blue, pink);
```  

### **object-fit Property**
- specify how an img or video resizes to fit it's container  

*Values*
- contain: maintain aspec ratio fit in element's content box
- cover: maintain aspect ratio + filling element's content box
- fill: fill element's content box
- none: no resizing
- scale-down: none or contain, whichever leads to a smaller size  

### **Transitions**
- controlling animation speed of a CSS property
- used w/ transition property  

Example
```
.box {
  width: 100px;
  height: 100px;
  transition-property: height, width;
  transition-duration: 2s
}

.box:hover {
  width: 150px;
  height: 150px;
}
```  

### **Animations**
- animate transitions from 1 CSS style to another
- Consist of 2 parts
  1. CSS animation style
  2. keyframes to indicate start + end states of animation  

*Properties + Values*
- animation-name
- animation-delay
- animation-duration
- animation-direction
- animation-iteration-count
- animation-fill-mode  

Keyframes
- indicate specific points in the animation process
- 0%: beginning of animation
- 100%: end of animation  

```
@keyframes animationName {
  0% {}

  ...any other points in the animation process

  100%{}
}
```