# Flexbox
Purpose
- helps us make structuring our web page easier  

## Key Idea
1. Turn an element into a flex container
2. All it's children elements automatically turn into flex items
3. Easier to organize how children elements look inside the flex container  

## Syntax
```
#parentElement {
  display: flex; // turns into a flex container
}

.childElement {
  // property + values
}
```  

## Common Properties for Flex Container + Items
[Additional Properties + Explanations](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-background)
```
// Parent Element
justify-content: value // move items left-right

align-items: value // move items up-down

flex-direction: value // change the order display of flex items

flex-wrap: value // determine if flex items will wrap to 2nd line if too many items

flex-flow: flex-direction flex-wrap // combo of flex-direction + flex-wrap

// Child Element
order: # value // determine placement of a flex item (default 0)

flex: # value // determine the amount of space a flex item should take (higher -> more space)
```
