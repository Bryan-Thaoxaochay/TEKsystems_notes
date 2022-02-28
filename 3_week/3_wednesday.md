# Week 3: Wednesday - Java Core Programming
## Loops
- allows us to execute a block of code a certain amount of times  

### while Loops
- block of code is executed as long as the condition is true
```
// var used in the condition
while (condition) {
  // statements
  // statement that updates condition
}

int count = 0;
while (count < 100) {
  System.out.println("Hello");
  count ++;
}
```
- var needs to be declared outside while loop, so that it's updated value can be read in the condition
- a statement to update the condition is needed, otherwise we will get an infinite loop  

*Sentinel Value* - input value used to signify the end of the loop  

**DON'T USE FLOATING-POINT VALUES IN CONDITIONS**
- floating-point values use approximations, so unexpected behavior can occur  

### do-while Loops
- block of code is executed at least once, then the condition gets checked
```
do {
  // statements
} while (condition);

int i = 1;
do {
  System.out.println(i);
  i++;
} while (i <= 10);
```

### for Loops
- used to iterate over items in a sequence (i.e. elements in array / chars in string)
```
for (initialize var; condition; var value update) {
  // statements
}

for (int i = 0; i < 10; i++) {
  System.out.println("Hello");
}
```
- multiple vars and updates can occur in a for loop (), they need to be separated by a comma  

```
for ( ; ; ) {
  // statements
}
```
- the condition is optional. If omitted -> implicitly true -> infinite loop  

### Enhanced for Loops
- better suited to iterate through arrays + collections
```
int[] values = { 1, 2, 3, 4 };
for (int v : values) {
  // Statements
}
```
- int v: declaring a var that will hold the value of each iteration
- values: the var name of the collection  

### Which Loop to Use
for Loops - if the # of reps is known  
while Loops - if the # of reps is unknown + is based more on a sentinel value  

*Each loop can accomplish what the others can, so use the one that helps you the most*  

### Loop Control Statements
*break* - stops the loop entirely and moves onto the next statement outside and after the loop
*continue* - skips the rest of the statements in the loop body, and moves onto the next iteration  

## Arrays
- data structure that contains elements of the same data type
- fixed-size: the size of the array is specified and cannot be changed
- an object, because it's superclass is Object (Object < Array)
- reference types -> refer to memories already stored
```
datatype[] arrayName = new datatype[size of array];

double[] myList = new double[10]; // Recommended way to create array
myList[0] = 1.9
myList[1] = 2.9
myList[2] = 3.4

double[] myList = { 1.9, 2.9, 3.4, 3.5};
```
- elements are accessed via index (starting w/ 0)
- *Array declaration + initialization must be done in 1 statement*  

### Array Methods
- arrays have built-in methods
```
Arrays.method();
```  

### Copying an Array
```
list2 = list1;
```
- this doesn't copy the array, because list2 is pointing to the same array as list1
- 2 reference points, but 1 array  

**Copying w/ a loop**
```
int[] sourceArray = { 2, 3, 4 };
int[] newArray = new int[sourceArray.length];

for (int i = 0; i < sourceArray.length; i++) {
  newArray[i] = sourceArray[i];
}
```  

**Copying w/ array's clone method**
```
int[] values = { 1, 2, 3 };
int[] copy = values.clone(); // [1, 2, 3]

values[0] = 2 // [2, 2, 3]
```  

**Copying w/ System.arraycopy method**
```
System.arraycopy(sourceArray, sourcePosition, destinationArray, destinationPosition, length);

int[] arr1 = { 1, 2, 3 };
int[] arr2 = { 4, 5, 6 };

System.arraycopy(arr1, 0, arr2, 3, 1);
```
- lets us copy a portion of one array from a specific spot and add it to another array in a specific spot
- length: how many elements to copy
- sourcePosition: index to start copying, including index
- destinationPosition: index to start copying over, not including index  

**Copying w/ Arrays.copyOf method**
```
int[] values = { 1, 2, 3 };
int[] expandedValues = Arrays.copyOf(values, 6);
```
- creates copy of the array and allows us to define a new length
- values will be removed or added depending on the length  

### Processing Arrays
**Deleting + Inserting**
- this is accomplished w/ shifting elements
- delete: shift all elements w/ a higher index to the left
- insert: shift all elements w/ a higher index to the right
```
array[i] = array[i + 1] // shift left
array[i + 1] = array[i] // shift right
```  

**Finding Array Elements**
If value is known, but not index: 2 search algorithms
- linear search  
a. Compares value against every single value in array starting from the beginning  
b. index returned if value found, or -1 if value not found  
c. Performance = O(N)  

- binary search  
a. **Requires array to be sorted**  
b. array length / 2, then test value at that index  
c. value = array[ index ] -> return index  
d. value > array[ index ] -> binary search bottom-half of the array  
e. value < array[ index ] -> binary search top-half of the array  
f. Performance = O(log N)

*Recursion* - method calling itself
- binary search can be implemented w/ recursion
- negative is that it builds a deep call stack (by calling the method multiple times)
- iterative binary search are usually better instead (while loop > method invocation)