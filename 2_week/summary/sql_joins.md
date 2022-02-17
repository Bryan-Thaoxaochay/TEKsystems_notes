# SQL Joins
When we want to pull and display data from 2+ tables  

## INNER JOINs
Retrieves rows from both tables that pass the condition

## LEFT + RIGHT JOINs
LEFT: returns all the rows from the left table + data on the right table if it passes the condition. Otherwise NULL is returned.  

RIGHT: returns all the rows from the right table + data on the left table if it passes the condition. Otherwise NULL is returned.  

## SELF JOINs
When a table has a FK referencing a PK on the same table  

## FULL JOINs
Retrieving all the rows from the left and right table  

## CROSS JOINs
Joining 2 tables that don't have an established relationship
- produces a cartesian product -> **EVERY POSSIBLE COMBO BETWEEN THE ROWS OF THE 2 TABLES IS PRODUCED**  

## JOINS vs Subqueries
JOINS > Subqueries
- faster
- simpler  

but...  
- subqueries are easier to read
- subqueries are more dynamic