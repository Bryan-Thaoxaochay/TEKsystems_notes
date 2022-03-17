# Hibernate Mapping
- setting up relationships/associations btw tables in Hibernate  

## Types of Relationships/Associations
- One-to-One
- One-to-Many
- Many-to-One
- Many-to-Many  

Unidirectional Relationship
- Table A points to Table B  

Bidirectional Relationship
- Table A points to Table B
- Table B points to Table A  

*Unidirectional Relationship > Bidirectional Relationship*  

## Annotations
| Annotation | Purpose |
|-|-|
| @OneToOne | Indicates table will have a FK that points to the PK of another |
| @OneToMany | Creates a join table w/ the PK of both tables as columns |
| @ManyToOne | Indicates table will have a FK that points to the PK of another |
| @ManyToMany | Creates a join table w/ the PK of both tables as columns |  

## Syntax
### **One-to-One**
Person - hasOne - Address
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

### **One-to-Many**
Department - hasMany - Teachers
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

### **Many-to-One**
Many Teachers - hasOne - Department
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

### **Many-to-Many**
Many Teacher - hasMany - Cohorts
```
@Entity
@Table
public class Teacher {
  @Id
  @GeneratedValue( strategy = GenerationType.IDENTITY )
  private int tid;

  @ManyToMany(targetEntity = Cohort.class)
  private Set Cohort

  ...setter + getter for Cohort
}

@Entity
@Table
public class Cohort {
  @Id
  @GeneratedValue( strategy = GenerationType.IDENTITY )
  private int cid;

  ...
}
```
