# Collection Interface
Purpose
-  provides data structures + methods to work on data structures  

## Children of Collection
### **List Interface**
- ordered collection w/ functions of storing + accessing elements  

ArrayList Class  
- Purpose: resizable -> elements can be removed/added
- Rules
  - values can be duplicates
  - values can be null  

*3 Ways to Declare*
```
... = new ArrayList<>(); // Default Size = 10 elements

... = new ArrayList<>(size); // size = any number you choose

... = new ArrayList<E> (Collection<? extends E> values); // ArrayList w/ default values from E
```

LinkedList Class  
- Purpose: works better for data manipulation
- contains nodes that are chained together via links  

*Singularly-Linked List* - nodes linked in 1 direction  
*Doubly-Linked List* - nodes linked in both directions  

*2 Ways to Declare*
```
... = new LinkedList<>(); // empty linked list

... = new LinkedList<>(c); // linked list containing elements from c
```


### **Queue Interface**
- store elements about to be processed
- elements processed -> First In, First Out (i.e. first come, first serve)

Deque Interface -> LinkedList Class  


### **Set Interface**
- collection of unique elements  

HashSet Class  
```
... = new HashSet<>();
```

SortedSet Interface -> TreeSet Class  
```
... = new TreeSet<>();
```