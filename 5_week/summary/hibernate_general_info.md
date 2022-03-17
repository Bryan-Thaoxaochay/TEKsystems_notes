# Hibernate
## Model Classes
- persistence objects
  - java classes whose instances will be stored in the db as a row (record)  
  - i.e. w/ a User class, we can create a user by invoking a constructor, + then store it into the db w/ another method

### **Optional Rules**
1. Contains default constructor
2. Variables must be private
3. Each attribute has a getter + setter method
4. Class + it's methods are public + non-final  

## Setting up Hibernate
### **1. Provide Info for DB Connection**
- info required to setup the connection are placed in the hibernate.cfg.xml file OR hibernate.properties

### **2. Creating Connection within Classes**
Code Syntax
```
Configuration c = new Configuration().configure(); // Activate hibernate + reads .cfg file

SessionFactory f = c.buildSessionFactory(); // Retrieves JDBC info to create connection

Session s = f.openSession(); // Allows us to perform a single CRUD operation

Transaction t = s.beginTransaction(); // Use when updating or deleting the db. Gives us the option to rollback in case of an error

String query = "";
TypedQuery q = s.createQuery(query); // Converts the string query into a HQL statement

t.commit(); // Closes transaction
s.close(); // Closes session
f.close(); // Closes factory
```  

Shortcut Syntax to Establish Connection
```
SessionFactory f = new Configuration().configure().buildSessionFactory();
```
