# Cascading Style Sheets (CSS)
- allows us to edit the look of a web page by selecting HTML elements  

## Adding CSS to an HTML File
1. Inline: placing css directly into the opening tag of an element
```
<p style="color: white">Hello</p>
```

3. Internal: placing css between <style></style> tags in the <head></head> of an HTML file
```
<head>
  <style>
    p {
      color: white;
    }
  </style>
</head>
```

5. External: placing css in it's own file + connecting it to an HTML file w/ <link src="">
```
HTML file
<head>
  <link src="./path/to/style.css">
</head>

CSS file
p {
  color: white;
}
```  

## Selectors, Properties, + Values
Selectors
- these are how we select which elements we want to adjust  

Properties
- these are the things we want to adjust on the element  

Values
- these are the values that the properties will be changed to  

**Syntax**
```
selector {
  property: value;
  property: value;
}

selector {
  property: value;
}
```
**Types of Selectors**
1. Simple
  - tag name ```a```
  - id name ```#id```
  - class name ```.class```
3. Attribute ```[attribute="value"]```
4. Pseudo-Selectors ```button:hover```

*Combos of these selectors can also work as well ```a.class```.*
*If you want to select more than 1 element, use a comma to separate selectors ```a, p```.*

