# Week 1: Friday - SQL
## SQL
### Data Modification Language (DML)
- queries used to modify the data in the database  

INSERT
- INSERT into (table name) (column names)
- allows us to insert data into a table
- inserting multiple records can be done by separating the values by a comma  

VALUES
- VALUES (column values)
- allows us to specify what data we want to insert  

BETWEEN + NOT BETWEEN
- used w/ WHERE
- BETWEEN (condition) AND (condition)  

INSERT INTO payments_high SELECT * FROM payments WHERE amount > 2000;
- this copies data from the payments data and inserts into the payments_high table  

UPDATE
- UPDATE (table name) SET (column name = value) WHERE (column name = specific value)
- modifies existing data
- make sure to always include the WHERE clause
- multiple columns can be updated by using a comma  

DELETE
- DELETE FROM (table name) WHERE (column name = specific value)
- without a WHERE, all records would be deleted
- column names can be specified between DELETE and FROM
- data deleted w/ DELETE can be restored w/ rollbacks

TRUNCATE
- similar to DELETE, but always removes all the records from the table
- unable to do rollbacks with truncate
- doesn't take WHERE clause arguments  

### Data Query Language (DQL)
SELECT + FROM
- mandatory keywords  

WHERE, GROUP BY, HAVING, ORDER BY
- optional keywords  

GROUP BY
- GROUP BY (column name(s))
- returns a set of rows containing each different data value in the table (no repetition)
- appears after WHERE and before HAVING
- also has aggregate functions, that can be specified after SELECT. It will return a column w/ data related to the aggregate function. For instance, count() returns the number of records w/ the data value in the specified column name  

AS
- when used w/ column names of SELECT, allows us to rename the column name only for display reasons
- SELECT orderDate AS order_date  

HAVING
- HAVING condition
- allows us to filter the groups returned by GROUP BY or the records returned by WHERE
- gives us another filtering option  

LIKE
- WHERE column_name LIKE pattern
- used in a WHERE clause to search for a pattern in a column and returning those records
- pattern can use % and _
- %: 0, 1, or multiple characters
- _: any single character
- s% = pattern can be sun, six, seven, store
- se_ = pattern can be sea, see, set
- % and _ can be anywhere in the patter (%s% or _se_)  

LIMIT
- limits the number of rows returned by SELECT
- LIMIT offset, row_count
- offset: starting point
- row_count: number of rows to return starting at the offset