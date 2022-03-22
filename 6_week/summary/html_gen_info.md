# HTML
- markup language that tells the browser how to structure a web page
  - accomplished via tags + elements  

Stored in an HTML File
```
index.html

<!DOCTYPE html>
<html>
<head>
  <title></title>
</head>

<body>

</body>
</html>
```

## Tags
- help build the components of a web page  

Open + Close Tag
```
<p>Text</p> 
```

Self-Closed Tag
```
<img />
```

## Attributes
- extra info given to an element  

*Each attribute has it's own purpose. Some elements need specific attributes to work properly. Other attributes can be added optionally.*
- i.e. anchor tag needs a href attribute to fully work, but not all tags need a class attribute  

Syntax
```
<a href = "#">Dead Link</a>
```

## Element
- component of a web page  

Includes
- tag
- attributes + values
- any optional text  

Example
```
<h1 class = "title">My Title</h1>
```
- the whole line is considered the element  

## Block-Level + Inline Elements
*Each element has a default amount of space it can take in a web page, based on it's tag.*  
- block-level: the element takes the whole width of the web page
  - other block-level elements won't be able to stay on the same line  
- inline: the element only takes the width necessary to fit it's content
