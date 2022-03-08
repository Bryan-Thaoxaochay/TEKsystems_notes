# Java Streams
- sequence of elements  

Purpose
- gives us access to new methods
- i.e. filter(), sorted(), map()  

Vocab  
*Intermediate Operation* - returns a stream + allows chaining  
*Terminal Operation* - returns a non-stream + no chaining  

*Intermediate operations only execute if a terminal operation is present*  

## Data Structure -> Stream
```
List<String> names = new ArrayList<String>();
names.add("Larry");
names.add("Ellen");

names.stream()
  .filter( lambda expression) // intermediate operation
  .forEach(s -> System.out.println(s)); // terminal operation
```


## Creating a Stream
```
Stream.of("d2", "a2", "b1", "b3", "c")
  // intermediate operation
  .filter(s -> {
    System.out.println("filter: " + s);
    return true;
  })

  // terminal operation
  .forEach(s -> System.out.println(s));
```