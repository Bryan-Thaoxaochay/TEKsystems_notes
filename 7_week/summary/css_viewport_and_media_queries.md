# Viewport + Media Queries
## Viewport
For web browsers
- the area of the browser window where the web page is displayed  

*In the HTML file, we can specify some values for the viewport.*
```
<head>
  <meta name = "viewport" content = "width=device-width, initial-scale=1">
</head>
```
- width = device-width
  - tells the browser to set the width of the viewport to the width of the device that is viewing the web page
- initial-scale = 1
  - CSS pixel = device pixel (1:1 relationship)  

## Media Queries
Purpose
- allows us to change how a web page looks when the viewport increases or decreases  

*Elements move around when the size of a web page changes. Media queries are how we can control how elements look when this occurs.*  

Syntax
```
@media not|only mediatype and (mediafeature) and|or|not (mediafeature) {
  // which elements need to change
  selector {
    // which properties need to change
    property: value;
    ...additional properties
  }
  ...additional selectors
}
```
- should be placed at the bottom of the CSS file  

Media Types
- all: works w/ all devices
- print: material + documents viewed on a screen
- screen: for screens
- speech: for speech synthesizers

Media Features
- min-width
- max-width
- min-height
- max-height
- orientation  

[Resource for Explanations + Examples of Media Types + Features](https://www.w3schools.com/cssref/css3_pr_mediaquery.asp)
