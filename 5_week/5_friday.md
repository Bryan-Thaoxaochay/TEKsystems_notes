# Week 5: Friday - JDBC, ORM, Unit Testing
## ORM
- helps manage the database through our code  

```
Java Objects <-> ORM/Hibernate -> RDBMS
```

Mapping
- Class -> Table
- Java Object -> Row
- Class Attribute -> Column  

### **JPA**
Java Persistence API
- ORM for Java in a relational db  

Purpose
- allows developer to work w/ objects rather than w/ SQL statements

Types of JPA
- Hibernate
- EclipseLInk
- Apache OpenJPA
- etc.  

### **Hibernate**
- implementation of JPA + uses ORM techniques  

![Hibernate Architecture](summary/hibernate_architecture.jpg)

*Persistence Objects*
- Java classes whose objects will be stored in the db  

Some Optional Rules
1. need default constructor
2. contain an ID
3. attributes stored in db must be private + have getters + setters
4. public methods + class non-final  

*Configuration*  
- class from the org.hibernate.cfg package  

2 Key Components
- DB Connection: hibernate.properties OR hibernate.cfg.xml
- Class Mapping Setup: creates connection btw Java classes + db tables  

Syntax
```
Configuration cfg = new Configuration(); // activates Hibernate
cfg.configure(); // reads cfg + mapping files
```  

*Session Factory*
- interface from org.hibernate package
- created at app start-up
- 1 session factory per db  

Syntax
```
SessionFactory factory = cfg.buildSessionFactory();
```
- retrieves JDBC info from cfg object to create connection  

*Session*
- created so we can perfrom CRUD operations on the db
- requires SessionFactory
- can be created + destroyed as needed  

Syntax
```
Session session = factory.buildSession();
```  

*Transaction*
- achieve data consistency + allows rollback
- **ACID**  

Syntax
```
Transaction tx = session.beginTransaction();
tx.commit();
```  

*Query*
- interface from org.hibernate package

Purpose
- allows us to create SQL or HQL strings to retreive data from the db  

```
Query query = session.createQuery();
```

### **Hibernate App Stages**
*Phase 1*
1. Create java classes
2. Create methods within each class related to CRUD

*Phase 2*
1. Set up config file - db connection + entity classes  

### **Set Up Hibernate**
1. Create Java Maven Project
2. Config dependencies for hibernate + db in pom.xml  
```
<!-- https://mvnrepository.com/artifact/org.hibernate/hibernate-core -->
<dependency>
    <groupId>org.hibernate</groupId>
    <artifactId>hibernate-core</artifactId>
    <version>5.5.7.Final</version>
</dependency>

<dependency>
    <groupId>org.hibernate</groupId>
    <artifactId>hibernate-annotations</artifactId>
    <version>3.5.5-Final</version>
</dependency>

<!-- https://mvnrepository.com/artifact/org.mariadb.jdbc/mariadb-java-client -->
<dependency>
    <groupId>org.mariadb.jdbc</groupId>
    <artifactId>mariadb-java-client</artifactId>
    <version>2.7.4</version>
</dependency>
```  

### **Hibernate Annotations**
- helps connect the config file + java classes  

*Annotations*
- @Entity: indicate java class related to db table
- @Table: indicate if class name is different than db table name
- @Id: indicate var related to PK on table
- @Basic: indicate var is a regular attribute
- @Column: map instance var to a column
- @JoinColumn: map FK of a managed association
- @GeneratedValue: if primary column is auto-increment w/ additional strategy types
  - AUTO: generated value unique at db level
  - IDENTITY: generated value unique at table level
  - SEQUENCE
  - TABLE

## Hibernate Query Object + HQL
HQL
- Hibernate's version of SQL
- Class name REPLACES table name
- Property name REPLACES column name
- Class + property names are case-sensitive  

Supports...
- SELECT
- FROM
- WHERE
- ORDER BY
- GROUP BY
- subqueries
- aggregate functions
- JOINS
- aliases
- expressions + operators

Syntax
```
Query query = session.createQuery();
TypedQuery query = session.createQuery();
NamedQuery query = session.createQuery();
```
- TypedQuery + NamedQuery are children of Query

### **Running HQL Queries**
Run SELECT queries
```
Query.getSingleResult // 1 column
Query.getResultList // 2+ columns
```  

Run DELETE or UPDATE queries
```
Query.executeUpdate
```

EXAMPLE
```
String hql = "from User";
Query query = session.createQuery(hql);
List results = query.getResultList();
```

### **Named Parameters**
- passing in params for queries

EXAMPLE
```
String hql = "from User u where u.id = :id";
Query query = session.createQuery(hql);
query.setParameter("id", 2);

List results = query.getResultList();
```

### **Named Queries**
- storing a query so that it can be used multiple times more easily
- helps w/ organizing queries  

Annotations
- @NameQuery: single-named query
- @NameQueries: multiple-named queries  

EXAMPLE
```
// Creating a named query
@NamedQueries({
    @NamedQuery(  name = "findStockByStockCode", query = "from Stock s where s.stockCode = :stockCode" )
    ...other @NamedQuery
})

// Calling a named query
Query query = session.getNamedQuery("findStockByStockCode")
  .setString("stockCode", "7277");
```
- **MAKE SURE THAT NAMED QUERIES DON'T HAVE THE SAME NAME