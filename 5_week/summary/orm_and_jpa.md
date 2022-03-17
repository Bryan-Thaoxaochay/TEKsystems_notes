# ORM
- programming technique to convert data between incompatible systems (mariadb + intelliJ)

Purpose
- allows us to manage our DB + it's data without having to physically enter that system
- i.e. through our IDE, we can manage the tables + data that is stored in mariadb w/ the use of objects
  - Model classes represent our tables + it's columns
    - Class -> table
    - Class attributes (variables) -> columns    
    - Instance of Class -> row
  - Controller classes contain methods that we created to manipulate the data within the db
    - Create
    - Read
    - Update
    - Delete
    - etc.  

## JPA
- ORM for Java  

Purpose
- allows us to work w/ classes + their objects in order to communicate w/ the db  

Types of JPAs
- **Hibernate**
- EclipseLink
- Apache OpenJPA
