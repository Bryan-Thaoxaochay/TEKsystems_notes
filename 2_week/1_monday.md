# Week 2: Monday - SQL
## Aggregate Functions
- built-in functions
- cannot be used w/ the WHERE clause
- broken down into 4 common categories  

Built-In Function Docs: https://www.techonthenet.com/mariadb/functions/index.php  

### String Functions
REPLACE()
- replace a string in a column w/ a new string
- replace all occurrences of a substring w/ a new substring
```
SELECT REPLACE('abc.com', 'abc', 'teksystem')
```  
- 'abc.com' - string (can also be a column name)
- 'abc' - old substring
- 'teksystem' - new string
- a table can be selected outside the REPLACE()  

TRIM()
- removes specific characters from beginning or end of a string  
```
TRIM({LEADING | TRAILING} [removed_character] FROM 'string');

TRIM(LEADING '@' FROM '@teksystems.org)
```
- if leading or trailing isn't specified, BOTH is default
- a table can be selected outside the TRIM()  

COUNT()
- returns the total number of records
```
SELECT COUNT(*) FROM table

SELECT COUNT(columnName) FROM table
```  

MAX() and MIN()
- returns the highest/lowest value from a recordset
```
SELECT MAX(columnName), MIN(columnName) FROM table;
```  

AVG()
- returns the average of a set of values
```
SELECT AVG(columnName) FROM table
```
- can use the WHERE clause  

### Numeric Functions
SUM()
- calculates the sum of a set of values
```
SELECT SUM(columnName) FROM table;
```
- can use the WHERE clause  

MOD()
- returns the remainder of one number divided by another (5 % 4 = 1)
```
MOD(number being divided, dividing number)

SELECT MOD(11, 3) -> 2
```  

ROUND()
- rounds a number to a specific number of decimal places
```
ROUND(number to be rounded, number of decimal places to round to)

SELECT ROUND(20.5, 0) -> 21
SELECT ROUND(121.55, -1) -> 120
SELECT ROUND(121.55, -2) -> 100
```
- 0 is default if no decimal place specified
- if the number is negative, numbers rounded start in front of the decimal
- **FLOOR, CEIL, AND CEILING FUNCTIONS ARE SIMILAR**  

TRUNCATE()
- does the same thing as ROUND(), but doesn't do any rounding
```
TRUNCATE(number to be truncated, number of decimals to truncate to)
```
- **DOESN'T DO ANY ROUNDING, JUST REMOVES THE NUMBERS BASED ON DECIMAL VALUE**  

### Date Functions
CURRENT_DATE()
- returns the current date
- 'YYYY-MM-DD' if a string OR YYYYMMDD if a number
```
CURRENT_DATE() or CURDATE()
```  

CURRENT_TIMESTAMP(), CURRENT_TIME()
- first one returns the time and date
- second one returns only the time  

MONTH()
- returns a number corresponding to the month (1 to 12)
```
MONTH(date)

SELECT MONTH("2021-05-93") -> 5
```
- YEAR() does the same function, but returns the year instead  

DATE_FORMAT()
- change the format of a date() value
```
DATE_FORMAT(given date, the type of format)

SELECT DATE_FORMAT('2014-02-01', '%M %e %Y');
```
- multiple formats can be given
- Format Website: https://www.techonthenet.com/mariadb/functions/date_format.php  

DATEDIFF()
- calculates the number of days between two given date() values
```
DATEDIFF(first date, second date)

SELECT DATEDIFF('2014-01-28', '2013-12-31'); Result: 28
SELECT DATEDIFF('2013-12-31', '2014-01-28'); Result: -28
```
- if the first date is after the second date, a positive number is returned + vice versa  

### Advanced Functions
IF()
- returns true or false based on condition
```
IF( condition, true value, false value)

SELECT IF(100 < 200, 'yes', 'no'); -> 'yes';
```
- if the condition is true, the true value is returned
- if the condition is false, the false value is returned  

CAST()
- converts a datatype to another datatype
```
CAST(current value AS new datatype)

SELECT CAST(125 AS CHAR) -> '125';
```  

## SQL Operators
- performed w/ WHERE  

### Logical Operators
- ALL
- AND
- ANY
- BETWEEN
- EXISTS
- IN
- LIKE
- NOT
- OR
- SOME  

### Arithmetic Operators
- (+)
- (-)
- (*)
- (/)
- (%)  

### Bitwise Operators
- &
- |
- ^  

### Comparison Operators
- =
- (>)
- <
- (>=)
- <=
- <> OR !=  

### NULL
Testing if a column is or isn't null
- IS NULL
- IS NOT NULL  

## Conditional Statements
Simple CASE
```
CASE selector
	WHEN selector_value_1 THEN statements_1
	WHEN selector_value_2 THEN statements_2
  ELSE else_statements
END

SELECT CASE...
FROM table
```  

## Data Definition Language
- queries related to the schema structure
- create, alter, drop  

CREATE
- creating a database
```
create database db_name
create schema db_name
```  

DROP
- removing a database
```
drop database db_name
```

USE
- selecting which database to use
```
USE db_name;
```  

CREATE TABLE
- creating a table in the database
```
CREATE TABLE tableName (
  columnName datatypes constraints,
  columnName datatypes constraints
)
```
- datatypes: the type of data the column will store
- constraints: rules the data must follow  

ALTER TABLE
- allows us to add, drop, or modify a column
- allows us to add or drop a constraint
```
ALTER TABLE tableName ADD columnName datatype constraints
ALTER TABLE tableName DROP columnName
ALTER TABLE tableName MODIFY columnName change_to_occur
ALTER TABLE tableName DROP columnName constraint
```  

ALTER TABLE...RENAME... or RENAME TABLE...TO...
- 2 ways to rename a table
```
ALTER TABLE oldName RENAME newName
RENAME TABLE oldName TO newName
```
- the 2nd way allows us to rename multiple tables in 1 statement
```
RENAME TABLE oldName TO newName, diffTable TO diffNewTable...
```  

DROP TABLE
- removes the table AND THE DATA
```
DROP TABLE tableName [restrict | cascade];
```
- restrict cascade?  

### Data Types
int(size)
- numbers w/o decimals  

double(size, d)
- numbers w/ decimals  

decimal(size, d)
- numbers w/ decimals  

char(size), nchar(size)
- fixed-length strings  

varchar(size), nvarchar(size)
- variable-length strings  

date, datetime, timestamp
- dates  

BLOB
- binary large object  

null
- null

## Data Integrity
**DBs w/ well-chosen constraints is key to maximizing the DBs value**  

- database w/ the right relationships, columns, and constraints for it's data -> **GOOD DATA INTEGRITY**

Integrity enforced by DB in 4 ways
- entity
- domain
- referential
- user-defined  

### Entity
Each row of the table is a unique entity
- enforced w/ primary key constraint OR unique constraint
```
// field level
CREATE TABLE tableName(
  id int PRIMARY KEY AUTO_INCREMENT,
  name varchar(50) NOT NULL UNIQUE
)

// table level
CREATE TABLE tableName(
  id int,
  name varchar(50) NOT NULL UNIQUE,
  constraint pk_table PRIMARY KEY(id)
)
```
- db ensures PK is NOT NULL + UNIQUE
- AUTO_INCREMENT: generates unique PKs based off the latest one used
- UNIQUE: makes sure the data entered is completely different from the database data, but NULL is allowed

Unique vs Primary Key
- Null is allowed for Unique
- only 1 PK per table
- multiple unique allowed per table  

### Domain
Choosing the right data type for a field  

Constraints to Consider
- NOT NULL: should this data type ever be empty?
- DEFAULT: adding a default value if none is entered
```
CREATE TABLE tableName(
  date datetime NOT NULL DEFAULT current_date()
)
```  
### Referential
Tables have the right relationships between them
- enforced w/ foreign keys
```