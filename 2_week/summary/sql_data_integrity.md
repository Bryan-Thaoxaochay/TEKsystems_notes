# SQL Data Integrity
- improving a dbs value by choosing well-chosen constraints  

**GOOD DATA INTEGRITY**
- correct relationships
- correct columns
- correct data type
- correct constraints  

## 4 ways DB enforces data integrity
### Entity
Each row is unique
- enforced w/ constraints: PRIMARY KEY + UNIQUE  
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
Each column has the right data type  

**Constraints to Consider**
- NOT NULL: should this data type ever be empty?
- DEFAULT: adding a default value if none is entered
```
CREATE TABLE tableName(
  date datetime NOT NULL DEFAULT current_date()
)
```  

### Referential
Tables have the right relationships between them
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