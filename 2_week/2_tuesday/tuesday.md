# Week 2: Tuesday - SQL
## Data Integrity
### Referential Integrity
- enforcing relationships between tables
- enforced w/ foreign key constraints  

Creating a Foreign Key
- foreign keys are not unique
```
// table level
CREATE TABLE childTable(
  ...
  parentId int NOT NULL,
  constraint fk_child_parent FOREIGN KEY(parentId)
    REFERENCES parentTable(id)
    reference_option: { RESTRICT | CASCADE | SET NULL | NO ACTION | SET DEFAULT }
)
```
- constraint fk_child_parent: this part is optional, but the rest isn't
- FOREIGN KEY(column_name): indicates which column is the FK
- REFERENCES parentTable(column_name): indicates what table is the parentTable and which column on that table
- reference_option: gives actions when something on the parent table changes  
a. ON DELETE { RESTRICT | CASCADE | SET NULL | NO ACTION | SET DEFAULT }  
b. ON UPDATE { RESTRICT | CASCADE | SET NULL | NO ACTION | SET DEFAULT }  
c. CASCADE - records related to the key will be deleted  
d. SET NULL - related key fields will be set to null  
e. SET DEFAULT - related key fields will assume the default value  
f. RESTRICT - exception will be raised  
g. NO ACTION - nothing on the related table is changed  

### User-Defined Constraints
Choosing custom constraints for a field
- enforced w/ CHECK constraint
```
CREATE TABLE tableName(
  ...
  amount decimal CHECK(amount >= 10.0)
)
```
- amount has to be greater than or equal to 10 in order to get into the db
- condition can be any SQL boolean expression


## Joining Tables
- pulling data from 2+ tables  
```
...FROM (left table) (join type) JOIN (right table) ON (key relationship)
```  

### Inner Join
- retrieves common data
- rows from both table appear in output if both satisfy the condition
```
SELECT (left table column), (right table column) FROM (leftTable) INNER JOIN (rightTable) ON leftTable.id = rightTable.id (column matching on both tables)

SELECT (left table column), (right table column) FROM (leftTable) INNER JOIN (rightTable) USING (column that is the same on both tables)
```
- **DOESN'T MATTER WHICH TABLE IS LEFT OR RIGHT**  

### Left Join
- all rows from left table are returned, with matching data from right table if available (otherwise NULL)
```
...FROM (left table) LEFT JOIN (right table) ON (matching columns on both tables)
```
- **RIGHT JOINs do the same as LEFT JOINs, except all the data from the right table will be returned, w/ matching data from the left table**  

### Using Left/Right + Inner Joins
- INNER JOIN is completed first, then LEFT/RIGHT JOIN  

### Self Join
- when a table has a foreign key referenced to a primary key on the same table
```
...FROM (left table) JOIN (right table) ON fk_id = pk_id
```
- since the left and right table are the same, make sure to give each a different alias name  

### Full Join
- combining LEFT/RIGHT JOINs, pulling all data from both tables whether or not they satisfy the condition
```
...FROM (left table) LEFT JOIN (right table) USING(id)
UNION
...FROM (left table) RIGHT JOIN (right table) USING(id)
```
- mariaDB doesn't support FULL JOIN, but using UNION accomplishes the same thing  

### Cross Join
- no join condition given, because there isn't any relationship between the 2 tables
```
...FROM tableOne CROSS JOIN tableTwo
```
- produces a cartesian product (every combination between the rows of the 2 tables is produced)