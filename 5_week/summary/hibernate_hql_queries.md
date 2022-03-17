# HQL
- version of SQL that works w/ Hibernate  

Rules for Queries in HQL
1. Model class names replace db table name
2. Model var names replace db column names
3. Class + var names are case-sensitive (User = User | User != user)  

**HQL runs queries through it's classes instead of from the db.**  
Supports
- SELECT, FROM, aliases, aggregate functions
- JOINS
- WHERE, GROUP BY, expressions, operators
- ORDER BY
- subqueries  

## Running HQL Queries
```
String query = "";
// SELECT
TypedQuery q = s.createQuery(query); // Changes query into a HQL statement

List results = q.getResultList(); // 2+ columns
Datatype result = q.getSingleResult(); // 1 column

// UPDATES or DELETES
TypedQuery q = s.executeUpdate(query);
```  

### *Named Parameters**
- specifying places in the query where we can choose the value

```
String query = "select u from User where id = :id";
TypedQuery q = s.createQuery(query);
q.setParameter("id", 1); // Passing 1 where "id" is in the query

Datatype result = q.getSingleResult();
```
