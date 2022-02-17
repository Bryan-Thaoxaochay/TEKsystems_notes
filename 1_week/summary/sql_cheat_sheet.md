# SQL Cheat Sheet
## Data Query Language (DQL)
```
SELECT (column names) AS (alias name)

FROM (table) AS (alias name)

WHERE (column_name {comparison operator} data value)
  IN (condition 1, condition 2, condition 3, ...)
  AND | OR {comparison operator} data value
  LIKE (pattern)

GROUP BY (column_name)

HAVING (column_name {comparison operator} data value)

ORDER BY (column_name) [ASC | DESC]

LIMIT (offset, row_count)
```
SELECT
- the columns we want 

FROM
- the table with the columns we want  

WHERE
- filter rows based on the condition
- if the row passes the condition, it is returned  

GROUP BY
- groups the column specified into a single row  

HAVING
- filter the rows returned by GROUP BY, based on the condition
- if the row passes the condition, it is returned  

ORDER BY
- organizes how the rows are returned
- ASC: low to high
- DESC: high to low  

LIMIT
- which rows and the number of rows that are returned
- OFFSET: starting point
- ROW_COUNT: # of rows to return  

## Operators
```
// logical
...WHERE column_name {comparison operator} [ALL | ANY | SOME](...);

...WHERE condition1 [AND | OR] condition2 ...;
...WHERE NOT condition;

...WHERE column_name BETWEEN value1 AND value2;

...WHERE EXISTS(...);

...WHERE column_name IN (...);

...WHERE column_name LIKE pattern [% | _];

// arithmetic
{+ | - | * | / | %}

// comparison
...WHERE column_name {= | > | < | >= | <= | <> OR !=} single_value
```  

## Data Modification Language
```
INSERT INTO (table name) (column names)

VALUES (column values) [, ...]

UPDATE (table name) SET (column name = new value) WHERE (column name = identifying value)

DELETE FROM (table name) WHERE (column name = identifying value)

TRUNCATE (table name)

START TRANSACTION;
  -- DML queries
[ROLLBACK | COMMIT];
```
INSERT INTO
- choose which table and columns to insert data into  

VALUES
- the data we want to insert, in order of the columns  

UPDATE
- choose which table to update  

SET
- the column we want to update and it's new value  

WHERE
- the column and value we will use to choose the right record  

DELETE FROM
- choose which table to delete from  

WHERE
- the column and value we will use to choose the right record  

TRUNCATE
- choose which table to delete all rows from  

## Data Definition Language
```
CREATE DATABASE db_name

DROP DATABASE db_name

USE db_name

CREATE TABLE table_name (
  column_name datatype constrain(s),
  column_name datatype constrain(s)
)

ALTER TABLE table_name [
  ADD column_name datatype constrain(s)
  DROP column_name
  MODIFY column_name change_to_occur
  DROP column_name constraint_to_drop
]

ALTER TABLE table_name RENAME new_name
RENAME TABLE table_name TO new_name

DROP TABLE table_name
```
CREATE
- can be used to create a database or table  

DROP
- can be used to drop a database or table  

USE
- selecting which database to use  

ALTER TABLE
- how to change a table
- there are 4 things we can alter a table

RENAME TABLE
- renaming a table  

## Aggregate Function
https://www.techonthenet.com/mariadb/functions/index.php 
- cheat sheet for aggregate functions available  

## Joining
```
// INNER JOIN
...FROM (leftTable) INNER JOIN (rightTable) ON leftTable.column_name = rightTable.column_name 

...FROM (leftTable) INNER JOIN (rightTable) USING (column_name)

// LEFT JOIN
...FROM (leftTable) LEFT JOIN (rightTable) ON leftTable.column_name = rightTable.column_name

// RIGHT JOIN
...FROM (leftTable) LEFT JOIN (rightTable) ON leftTable.column_name = rightTable.column_name

// FULL JOIN
...FROM (left table) LEFT JOIN (right table) USING(column_name)
UNION
...FROM (left table) RIGHT JOIN (right table) USING(column_name)

// SELF JOIN
...FROM (left table) JOIN (right table) ON fk_id = pk_id

// CROSS JOIN
...FROM tableOne CROSS JOIN tableTwo
```

## Sub-Queries
```
// with WHERE
WHERE column_name {comparison operator} (subquery)
WHERE column_name IN (subquery)

// with HAVING
HAVING agg_function(column_name) {comparison operator} (subquery)

// with FROM
FROM (subquery) AS derivedTableName
```

- distinct