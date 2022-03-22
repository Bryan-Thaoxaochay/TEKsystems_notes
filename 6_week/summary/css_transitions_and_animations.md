# Transitions + Animations
## Transitions
Purpose
- control the animation speed of an element

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
Explanation
- when the mouse hovers over the .box element, it'll increase and finish at 2 seconds  

## Animations
- control the animation of an element  

Keyframes
- allows us to specify properties of the element at specific points of the animation
- points are chosen by %
  - 0% => beginning of animation
  - 100% => end of animation  

Example
```
#square {
  background-color: orange;
  position: absolute;

  animation-name: move;
  animation-delay: 1s;
  animation-duration: 4s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
}

@keyframes move {
  0% {
    height: 100px;
    width: 100px;
    left: 0%;
  }

  50% {
    height: 20px;
    width: 20px;
    left: 50%;
  }

  100% {
    height: 100px;
    width: 100px;
    left: 90%;
  }
}
```
Explanation
- 0%: square is at it's beginning phase
- 50%: square has shrunk and moved to the right
- 100%: square has enlarged and moved further to the right
