# Map Interface
Purpose
- works w/ data structures that have Keys + Values  

Key Rules
- unique
- only connected w/ 1 value
- immutable
- available datatypes
  - Enum
  - Wrapper classes of primitives
  - String
  - No floating-point nums  

## Children of Map
### **EnumMap**
Works w/ maps w/ key datatype being Enum  

Syntax
```
EnumMap<Key, Value> example = new EnumMap<>(Key.class);
```

### **HashMap**
- map w/ its' key-value pairs unsortable  

Syntax
```
Map<Key Datatype, Value Datatype> example = new HashMap<>(); // default capacity + load factor

... = new HashMap (Map<? extends K, ? extends V>); // create copy of given map
```

### **SortedMap -> TreeMap**
- map w/ its' key-value pairs sorted + sortable  

Syntax
```
... = new TreeMap(); // default TreeMap w/ order based on keys

... = new TreeMap(Comparator<K> comparator); // TreeMap w/ custom comparison for sorting

... = new TreeMap(Map< ? extends K, ? extends V> m); // create copy of given map
```