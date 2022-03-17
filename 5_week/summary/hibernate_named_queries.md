# Named Queries
- area in our code where we can store queries

Purpose
- allows us to organize our queries
- makes using a query multiple times easier  

Where to put in your code?
- usually stored in the model class related to it's query, right above the class signature
  - i.e. queries related to user should be stored in the User class  

## Annotations
| Annotation | Purpose |
|-|-|
| @NamedQuery | Container for a 1 query |
| @NamedQueries | Container for 1+ named queries |  

## Syntax
Defining NamedQueries
- **NamedQueries SHOULD NOT HAVE THE SAME NAME**  
```
@NamedQuery( name = "getAllUsers", query = "select u from Users" )

@NamedQueries({
  @NamedQuery( name = "getUserById", query = "select u from Users where id = :id"
  @NamedQuery( name = "getUserByName", query = "select u from Users where name = :name"
  ...
})
```  

Calling a NamedQuery
```
TypedQuery q = s.getNamedQuery("getUserByName");
q.setString("name", "Bryan");

List result = q.getResultList();
```
