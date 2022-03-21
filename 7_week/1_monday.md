# Week 7: Monday - CSS
## CSS
### **Viewport**
- what can be seen of a webpage on a device  
- the viewing area of a webpage on a device

Controlled by
- short tag in the head of the HTML
```
<meta name = "viewport" content = "width=device-width, initial-scale=1">
```
- width=device-width: screen's width = device width
- initial-scale=1: 1:1 relationship btw CSS + device pixels

Purpose
- allows the browser to control the width + scaling of the screen  

### **Media Query**
Purpose
- allow us to control how a webpage looks at different levels of pixels  

Syntax
```
@media (min-width: px) and (max-width: px) {
  selector {
    property: value;
  }
}
```

Options to Use in Media Query
- min-width
- max-width
- min-height
- max-height
- orientation=portrait: rules to apply if browser height >= width
- orientation=landscape: rules to apply if browser width > height

- all: works w/ all devices
- print: material + documents viewed on a screen
- screen: for screens
- speech: for speech synthesizers  

Best Practices
1. Use relative units (i.e. %)
2. Design for mobile, then expand
3. Create stylesheets for major breakpoints mainly  

### **Flex Box**
- layout model  

Purpose
- helps us create the layout of our webpage easier than just using float and position properties  

Properties + Values
```
display: flex; /* Change this div into a flex container + child elements into flex items */

flex: 1 /* Determine the space taken by a flex item (higher -> more space) */

flex-wrap: [value] /* Determines the lines taken up by flex items */
flex-direction: [value] /* Determines order of flex items + if row or column */

flex-flow: [flex-direction flex-wrap] /* Combo of flex-wrap + flex-flow */

order: [#] /* Determine order of flex item */

flex-grow: [value] /* Allow flex item to take up available space in line */

justify-content: [value] /* Shift flex items vertically */

align-items: [value] /* Shift flex items horizontally */
```

[Extra Resource](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-background)
