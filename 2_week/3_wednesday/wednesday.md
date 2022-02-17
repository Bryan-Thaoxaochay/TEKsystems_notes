# Week 2: Wednesday - SQL
## Subprograms
- SQL blocks that can be invoked w/ a set of parameters
- 2 TYPES: functions + store procedures  

### Stored Function
- store program that always returns a single value
- similar purpose of JavaScript functions
```
DELIMITER $$
CREATE FUNCTION function_name(params)
RETURNS datatype
DETERMINISTIC or [NOT] DETERMINISTIC

BEGIN
  -- statements
END $$
DELIMITER ;

SELECT function_name(args)
```
- we have to specify what datatype we should expect to receive
- deterministic: given input returns the same output
- not deterministic: given input returns various output  

### Store Procedures
- reusable unit
- invoked via triggers, stored procedures, + applications languages
```
DELIMITER $$
CREATE PROCEDURE procedureName(param1 IN datatype, param2 OUT datatype...)
BEGIN
 -- statements
END $$
DELIMITER ;

CALL procedureName(args);
```
- parameters have 3 modes:  
a. IN - send values to stored procedures + execute queries (default)  
b. OUT - get values from stored procedures  
c. INOUT - combo of IN + OUT  

### Triggers
- set of statements that run when an event occurs on a table
- helpful to run scheduled tasks
- events include: inserted, updated, deleted
- triggers can occur BEFORE or AFTER these events
```
CREATE TRIGGER triggerName
[BEFORE | AFTER] [INSERT | UPDATE | DELETE]
  ON tableName FOR EACH ROW
BEGIN
  -- things to run
END;
```

## Subqueries
- queries within another query
- the inner query is executed before the outer query
- makes queries dynamic  

### 3 Types
- Scalar subquery - only return single row or column
- Row subquery - return a single row but 1+ columns
- Table subquery - return multiple rows and columns  

**ONLY SCALAR SUBQUERIES CAN BE USED W/ COMPARISON OPERATORS**
- =, =<, <, >, >=
- having more than a single row or column doesn't work w/ comparison operators  

### Joins vs Subqueries
It is preferred to use JOINS then subqueries
- JOINS are faster
- JOINS can be simpler without as many queries
- Subqueries are easier to read
- Subqueries are more dynamic  

**Subqueries are the fallback if a JOIN isn't possible**  

### W/ WHERE clause
- using the subquery to compare the result of the subquery
```
WHERE column_name {comparison operator} (subquery)
WHERE column_name IN (subquery)
```

### W/ HAVING clause
- using the subquery to compare the result of the subquery w/ something else
```
HAVING agg_function(column_name) {comparison operator}
  (subquery)
```  

### W/ FROM clause
- instead of retrieving from a table already created, we can select data from a 'derived table' via subquery in FROM clause
```
FROM (subquery) AS derivedTableName
```  

### Correlated Subqueries
- when the subquery references the table from the outer query
- because of this, the correlated subquery executes for each row from the outer query -> this leads to poor performance
```
SELECT *
	FROM products p1
	WHERE buyprice > (
		SELECT AVG(buyprice)
		FROM products
		WHERE productline = p1.productline
  );
```
- the subquery references p1, which is from the outer query