# Week 1: Thursday - Relational Databases + SQL
## Database Management System (DBMS)
- a tool to help us create, retrieve, update, and manage the data in our databases  

Manages 3 Things
- data
- database engine: allows data to be accessed, locked, and modified
- database schema: structure and connections in the database  

*The 3 above things helps provide concurrency, security, data integrity, and uniform*  
**WE NEVER DELETE DATA**  

## Relational DBMS (RDMS)
- DBMS based on a relational model  
- Relational Model: shows data in the form of a table  

### Terminology
Table - collection of data in rows and columns  
Row - each row represents the data of a single entity (1 student) 
Attribute / Column - different data for a single entity (name, school)  
Primary Key - a default column used to uniquely ID a row  
Composite Key - a primary key, but w/ 2+ columns instead of only 1  
Relation Schema - describes the structure of the relation between 2 tables  

### Data Modeling
- visualizes the dataflow and relationships between the tables

#### 3 Ways of Data Models
- Relational Data Model*
- Network Data Model
- Hierarchical Data Model  

### Relational Data Modeling Diagram or Entity Relationship Diagram (ERD)
- represents the database as a collection of tables related to each other

### ACID Properties
- principles to ensure that database transactions occur reliably  

Transaction - any operation performed within a database (i.e. creating)

1. Atomicity  
If a transaction starts, the whole transaction occurs or none at all  
1. Consistency  
Changes caused by a transaction should affect all the models related to it, within the constraints defined. If it doesn't, the process stops and the database rolls back to a previous stable state  

1. Isolation  
Transactions occur 1 at a time, never together.  

1. Durability  
The database is able to return to a stable state after an unsuccessful transaction or other cases of failure such as crashes and service outages

### Levels in Relational Data Modeling
1. Conceptual Data Model  
a. Define entity names and its relationships (Student - HasA - Address)  
b. These are the highest-level relationships between entities  

1. Logical Data Model  
a. Describes data in as much detail as possible, w/o physical implementation yet  
b. Includes all entities, relationships, attributes for each entity, primary and composite keys, and foreign keys  
c. *Normalization occurs after creating the logical data model via the database developers*  

1. Physical Data Model or Schema of Database  
a. Blueprint for how the database will be built physically  
b. Have to take consideration of the convention and restriction of the DBMS (i.e. data types, reserved words)  
c. Includes: table structures w/ column name, column data type, column constraints, primary key, and foreign keys (relationships)  
d. *Demoralization may occur based on user requirements*  

Logical Data Model vs Physical Data Model
- Physical considerations can change the physical data model from being really different from the logical data model  

### Normalization
- process used to reduce redundancies of data in a database
- uses a set of guidelines called **normal forms**  

*There are 12 normal forms, but it usually isn't necessarily to go that far.*  

**The database should be designed with the end-user in mind**  
- the person who will be using the database  

#### Normal Forms
- used to measure the depth to which a database has been normalized  
- each normal form depends on the normal form before it (**MUST START W/ FORM 1**)  

First Normal Form
- breaking down all the necessary data into tables  

Second Normal Form
- break down the tables into even more distinct tables
- the columns that should move to the new table(s) are the ones that are only slightly dependent on the primary key
- *Take into consideration the end-user*  
- **What columns of data makes sense to stay together?**

Third Normal Form
- remove data from a table that doesn't need to be there (like duplicated columns)  

### Advantages of Relational Data Modeling
- Simplicity  
Easier to read and understand than hierarchical and network model  

- Structural Independence  
We are only concerned w/ the data  

- Easy to Use  
The structure of tables, rows, and columns is simple to understand  

- Query Capability  
We don't have to do complicated SQL queries to retrieve the correct data  

- Data Independence  
Changing the structure of the database doesn't require major changes to the application  

### Disadvantages of Relational Data Model
- Few limits on field lengths (amount of chars possible)
- Becomes complex as more data is needed and the relations becomes complicated
- May lead to isolated databases: info can't be shared from one system to another  

## SQL
5 Sub-Languages
- Data Definition Language
- Data Modification Language
- Data Query Language
- Transaction Control Language
- Data Control Language  

**EACH OF THESE SUB-LANGUAGES DO DIFFERENT QUERIES**

Database Schema
- Diagram that shows us the database data and it's relationships  
- It is how we understand what our database is doing
- Every table should be connected to other tables, via pathing through 1+ tables  

### Data Query Language
SELECT
- specifies which columns to retrieve
- *: retrieves all columns
- DISTINCT: records that have the same data value for the column specified won't be returned multiple times  

FROM
- specifies which table(s) to retrieve  

WHERE
- filters which rows to retrieve based on condition
- WHERE column = 'example'
- AND + OR: specifying multiple conditions on the rows
- IN: easier way to combined multiple conditions for the same column (i.e. if there are 2 conditions for 2 cities)  

GROUP BY
- specifies how to group results  

HAVING
- used w/ GROUP BY, selecting among the group results  

ORDER BY
- changes the order that the rows are returned
- ASC: ascending order
- DESC: descending order  

Alias - similar to a variable, created in the SQL query as a shortcut for the table name
- SELECT c.postalCode FROM customers c;
- c is the alias for the table customers  
