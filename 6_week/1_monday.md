# Week 1: Monday - JDBC, ORM, Unit Testing
## ORM
### **Steps to Get Data from DB**
```
// 1
SessionFactory factory = new Configuration().configure().buildSessionFactory();

// 2
Session session = factory.openSession();

// 3
Transaction tx = session.beginTransaction();

// 4
String query = "";

// 5
TypedQuery tq = session.createQuery(query);

// 6
WrapperClass result = q.getSingleResult();
List<Object[]> resultList = q.GetResultList();

// 8 
tx.commit();
session.close();
factory.close();
```
1. Create the connection + open a session factory
   - configuration -> activates Hibernate + retrieves info from config file
   - session factory -> creates the connection from the info from config file
2. Open a session
   - allows us to perform CRUD operations on 1 db
   - *EACH DB NEEDS IT'S OWN SESSION*
3. Open a transaction
   - protects our db
   - only needed if the db is getting updated (updates + deletes)
4. Create the query
5. Convert the query to be used by hibernate
   - use TypedQuery or NamedQuery
   - Query class is deprecated
6. Execute the query to get a result
   - If only a single column is returned, WrapperClass is equal to the datatype of that column
   - If 2+ columns is returned, datatype is Object[] since there are 2+ datatypes
7. Loop through the data
   - use any loop that fits the situation
8. Close the transaction, session, + factory  

## Hibernate Mapping
Relationships/Associations btw Tables
- one-to-one
- one-to-many / many-to-one
- many-to-many  

*Unidirectional Association*
- relationship goes 1 way  

*Bidirectional Association*
- relationship goes both ways

*Target Table*
- where annotation should go
- Department is target table for One-to-Many
- Teacher is target table for Many-to-One  

*Source Table*
- where annotation doesn't go

### **Annotations**
- @ManyToOne (many staff -> 1 department)
- @OneToMany (1 department -> many staff)
- @OneToOne (1 student -> 1 book & VV)
- @ManyToMany (many teachers -> many courses & VV)  

Additional Annotations
- cascade: if a department is deleted, what happens to it's staff?
  - ALL
  - PERSIST
  - MERGE
  - REMOVE
  - REFRESH
  - DETACH  

### **ManyToOne**
Many Teachers -> One Department
```
public class Department {
  @Id
  @GeneratedValue( strategy = Generation.Type.IDENTITY )
  private int did;

  public Department (int did) {
    this.did = did;
  }
  ...
}

public class Teacher {
  @Id
  @GeneratedValue( strategy = GenerationType.IDENTITY )
  private int tid;
  
  @ManyToOne // <-------------------------------------------------------------
  private Department department; // <-----------------------------------------

  public Teacher(int tid) {
    this.tid = tid;
  }
  ... getter + setter for Department
}
```
- automatically creates a FK in Teacher, pointing to Department ID (tablename_idname)
  - department_did  

### **OneToMany**
One Department -> Many Teachers
```
public class Department {
  @Id
  @GeneratedValue( strategy = Generation.Type.IDENTITY )
  private int did;

  @OneToMany( targetEntity = Teacher.class, cascade = {CascadeType.ALL} )
  private List teachers

  public Department (int did) {
    this.did = did;
  }
  ... getter + setter for Teacher
}

public class Teacher {
  @Id
  @GeneratedValue( strategy = GenerationType.IDENTITY )
  private int tid;

  public Teacher(int tid) {
    this.tid = tid;
  }
  ...
}
```
- creates a join table that connects department + teacher (department_teacher) w/ 2 FKs
  - department_did
  - teachers_tid
- child entities must be stored in some kind of Collection (List, Set, Map)  