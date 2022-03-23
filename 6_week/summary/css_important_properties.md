# Important 
[Docs for CSS Properties](https://www.w3schools.com/cssref/default.asp)

## Display
- specifies what type of box the element is rendered in  

*Each value given has it's own purpose. Click [here](https://www.w3schools.com/cssref/pr_class_display.asp) to see more.*  

## Position
- specifies the type of positioning method of an element  

**Types**
1. static - (default) element renders as the usual document flow
2. relative - element can be adjusted based on it's normal (static) position
3. absolute - element can be adjusted based on it's parent's element
4. fixed - element can be adjusted based on the browser window

## Color
- specifies the color of text  

*Multiple Ways to give a Value*
1. rgb()
2. rgba() - similar to rgb(), but can specify opacity
3. hex #
4. color name  

```
color: rgb(23, 0, 3)
color: rgba(23, 0, 3, .33)

color: #A9F // short version of rgb
color: #AA99FF // long version of rgb

color: #A9FB // short version of rgba
color: #AA99FFBB // long version of rgba

color: blue
```

## Background
- shortcut property to handle all background properties
- specify how the background of an element looks  

*Additional Properties*
- background-color
- background-image
- background-position
- background-size
- background-repeat
- background-origin
- background-clip
- background-attachment  

## Border
- shortcut property to handle some border properties
- specify how the border of an element looks  

*Additional Properties*
- border-width
- border-style (required)
- border-color
- border-radius: can't be defined in border property  

## Float
- determine if an element is placed to the left, right, neither
- turns element into a float element, so other elements that aren't floats will flow around it  

*Elements w/ position: absolute can't be float elements*

## Object-Fit
- specifies how an image or video is resized within it's container when screen size changes  

*Each value given has it's own purpose. Click [here](https://www.w3schools.com/cssref/css3_pr_object-fit.asp) to see more.*  
