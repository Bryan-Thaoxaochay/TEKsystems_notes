# Week 3: Wednesday - Java Core Programming
## Collection Classes
Java Collections Framework
- contains interfaces + classes that work on data structures  

Main Interfaces (Super Parents)
- Collection
- Map

### Collection
![Collection Relationships](/4_week/summary/Collection_Interface.png)

Purpose
- +/- elements
- iterate through elements
- determine if collection contains a value
- convert collection to an array  

### Map
![Map Relationships](/4_week/summary/Map_Interface.png)

Purpose
- +/- key/value pairs
- determine if a key or value is present
- viewing key or value pairs as a Collection  

### Generic Interfaces + Classes
- creating interfaces + classes w/o having to specify a specific datatype  
```
public class ArrayList<E> { ... }

ArrayList<Integer> iList = new ArrayList<Integer>();
ArrayList<int> intList = new ArrayList<int>(); // error

ArrayList<Thingy> tList = new ArrayList<Thingy>(); // Thingy is a class
```
- E is a placeholder for the reference data type (classes or wrappers)  

Generics can have multiple params
```
public class Map<A, B> { ... }

Map<String, String> lookup = new Map<String, String>();
```

Generic Param Names
- E -> element
- K -> key
- N -> number
- V -> value
- T -> type  

### List Interface
- ordered collection to store + access elements  

Children
- ArrayList
- Linked List
- Vector
- Stack  

**ArrayList**
- dynamic array: resizable -> elements can be removed + added whenever
- allows duplicate values + null  

3 Constructors
```
ArrayList<E> default = new ArrayList<>(); 
// declare array list w/ default size 10

ArrayList<E> initCapacity = new Arraylist<E>(initialCapacity); 
// declare array list w/ default size specified

ArrayList<E> prePopulate = new ArrayList<E>(Collection<? extends E> values);
// declare array list w/ elements from E in it
```  

Common Methods
- add(element) -> adds single element
- remove(element) -> returns true if element is removed
- remove(index) -> returns removed element at given index
- indexOf() -> returns index of element or -1 if not found
- contains() -> returns true if element is in list  

## Files Class
Delimited File
- file separated into columns + rows  

Delimiter
- char separating each column  

### Reading Delimited File
1. Read a line
1. Split the line by the delimiter
1. Store that line into a String[] array
1. Place String[] array into an ArrayList
```
Scanner input = new Scanner(file);

ArrayList<String[]> data = new ArrayList<String[]>();

while (input.hasNext()) {
  String line = input.nextLine();
  data.add( line.split(", ") );
}
```

### Writing to a Delimited File
- the data entered would just need to be split w/ the delimiter

```
writer.write("column1, column2, column3\n");
```  

