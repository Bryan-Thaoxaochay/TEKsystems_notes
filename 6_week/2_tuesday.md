# Week 6: Tuesday - ORM
## ORM
### **OneToOne**
Table A has a FK that references the PK of Table B.
- Table A: child table
- Table B: parent table
- Person -> Address  
```
@Entity
@Table
public class Person {
  @Id
  @GeneratedValue( strategy = GenerationType.IDENTITY )
  private int PersonId;

  @OneToOne(cascade = CascadeType.ALL)
  private Address address;

  public Address getAddress() {
    return address;
  }

  public void setAddress(Address address) {
    this.address = address;
  }

...
}

@Entity
@Table
public class Address {
  @Id
  @GeneratedValue ( strategy = GenerationType.IDENTITY )
  private int AddressId
}

...
```

### **ManyToMany**
1+ rows from Table A are associated to 2+ rows in Table B
```
@Entity
@Table
public class Teacher {
  @Id
  @GeneratedValue( strategy = GenerationType.IDENTITY )
  private int tid;

  @ManyToMany(targetEntity = Cohort.class)
  private Set CohortSet

  ...setter + getter for CohortSet
}

@Entity
@Table
public class Cohort {
  @Id
  @GeneratedValue( strategy = GenerationType.IDENTITY )
  private int cid;

  ...setters + getters
}
```
- will generate a join table
  - contain the PK of each table in their own columns  

## H2 DB
- RDBMS
- in-memory db
  - live only during the execution of the app

In-Memory DB Advantages
1. zero project setup
2. zero configuration
3. zero maintenance
4. easy + quick to use
5. works well w/ Spring Boot  

3 Modes of H2 DB
1. Embedded Mode: *better performance than other modes*
2. Server Mode
3. Mixed Mode  

### **H2 DB Maven Dependencies**
```
<dependency>
    <groupId>com.h2database</groupId>
    <artifactId>h2</artifactId>
    <scope>runtime</scope>
</dependency>

<dependency>
    <groupId>com.h2database</groupId>
    <artifactId>h2</artifactId>
    <version>1.4.194</version>
</dependency>
```  

## JUnit
Unit Test
- testing a single unit of work
- i.e. testing a method
- Purpose
  - verify code is doing what is expected
  - helps find bugs as early as possible  

JUnit
- testing framework for Java
- **uses annotations**  

### **Adding JUnit to the Project**
Website: [junit.org](https://junit.org/junit5/)  
Help: [Adding JUnit to Project](https://www.jetbrains.com/help/idea/junit.html)

### **Example**
```
public class Example {
  protected static String returnName() {
    return "John";
  }
}


import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class ExampleTest {
  @Test
  protected void testReturnName() {
    assertEquals(Example.returnName(), "John");
  }
}
```

### **Assert Methods**
- used in tests to compare values
  - if value doesn't pass -> test fails
  - if test executes all the way -> test passes  

*Value must pass the the assert method in order to pass the test*  

### **Annotations**
- specify the order of running a test  

@BeforeAll - run this method once b4 the other tests
- method must be static  

@AfterAll - run this method once after all other tests
- method must be static  

@BeforeEach - run this method before every test  

@AfterEach - run this method after every test  

@Test - defines method as test  

[More Annotations](https://junit.org/junit5/docs/current/user-guide/#writing-tests-annotations)

