# Relational Databases
## Database Management System (DBMS)
- tool used to manage the data in the database  

Manages 3 Things
- data
- database engine: how data can be used
- database schema: structure and relationships  

## Relational DBMS
- DBMS using a relational data model  

### Data Modeling
- diagram showing the dataflow and relationships between tables  

**3 Types**
- Relational
- Network
- Hierarchical  

*Relational Data Modeling = Entity Relationship Diagram (ERD)*

### Advantages + Disadvantages of Relational Data Modeling
**Advantages**
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

**Disadvantages**
- Few limits on field lengths (amount of chars possible)
- Becomes complex as more data is needed and the relations becomes complicated
- May lead to isolated databases: info can't be shared from one system to another  

### Levels in Relational Data Modeling
1. Conceptual Data Model  
Define table names and the relationships between them  

1. Logical Data Model  
Include all the data needed (tables, relationships, columns, primary/composite keys, foreign keys)  

1. **Normalization occurs after logical data modelings and before physical data modeling**  

1. Physical Data Model  
Translating the logical data model into the blueprint for the physical data model  

**Logical vs Physical**
- physical constraints are taken into consideration when transferring the logical data model to the physical data model
- i.e. restriction of the DBMS  

### Normalization
- process used to reduce redundancies of data in a database
- accomplishes the process w/ *normal forms*  

**Normal Forms**
- each form is a stage of the database, w/ goals to meet by the end of the stage
- there are 12 forms, but it isn't necessary to go through all of them
- each form builds off of the previous form  

1. 1st Normal Form  
Having all the data and separating into the right tables  

1. 2nd Normal Form  
*What columns of data makes sense to stay together?*  
Break down the tables into more distinct tables  
*Columns that are slightly dependent on the primary key can be moved*  

1. 3rd Normal Form  
Remove columns from tables that don't need to be there (i.e. same column on 2 tables)  