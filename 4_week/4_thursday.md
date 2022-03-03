# Week 4: Thursday - Java Core Programming
## Java Collection Classes
### Queues
- interface
- First-In First-Out  

Children
- ArrayDeque
- PriorityQueue
- LinkedList  

**Linked List**
- data structure containing nodes chained together via links  
- child of List + Queue interface

singularly-linked list: nodes linked in 1 direction
doubly-linked list: nodes linked in both directions  

2 Constructors
```
LinkedList<datatype> varName = new LinkedList<datatype>();
// empty linked list

LinkedList<datatype> varName = new LinkedList<datatype>(c);
// linked list filled w/ all elements from c in the same order
```

*ArrayList* - better for storing + accessing data
*LinkedList* - better for data manipulation

### Set
- interface
- collection w/ unique elements -> no duplicate elements  

Children
- SortedSet -> TreeSet
- HashSet
- LinkedHashSet  

Syntax
```
Set<datatype> hashExample = new HashSet<datatype>();
Set<datatype> treeExample = new TreeSet<datatype>();
```  
- if no datatype specified, then any datatype can go into the set  

**TreeSet**
- elements ordered via ASCII
- has methods that can sort the element in different orders

**HashSet**
- elements not ordered in any particular way
- unable to sort elements  

## Map
- mapping of Keys + Values  

Children
- SortedMap -> TreeMap
- HashedMap
- LinkedHashedMap  

**Keys**
- unique
- has 1 value
- immutable  

Datatypes
- Enum
- integer (not floating-point)
- String
- *Wrapper Class*

Syntax
```
Map<Datatype of Key, Datatype of Value> map1 = new HashMap<>();
```  

## Stack
- data structure
- Last-In First-Out