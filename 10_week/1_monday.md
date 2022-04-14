# Week 10: Monday
## JPA w/ Spring Boot
*Spring Data*
- project developed to simplify data access operations  

**Spring Data JPA**
- builds upon JPA  

*dependency*
 ```
 <dependency>
   <groupId>org.springframework.boot</groupId>
   <artifactId>spring-boot-starter-data-jpa</artifactId>
 </dependency>
 ```  
 
 *configuration*
 ```
spring.jpa.database=mysql
spring.jpa.database-platform=org.hibernate.dialect.MariaDBDialect
spring.jpa.hibernate.ddl-auto=validate
spring.datasource.url=jdbc:mysql://localhost:3306/dbname
spring.datasource.username=
spring.datasource.password=
 ```  
 
 **Spring Data Repositories**  
 *3 Interfaces*
 - Repository
 - CrudRepository
 - JpaRepository  

Purpose
- provides built-in methods that we don't have to create (i.e. findOne(), findAll())  

**@Repository Annotation**
- indicates that a class is a repository  

*Repository*
- contains code that communicates directly w/ the db  

*Examples*
```
@Repository
public interface BookDAO extends JpaRepository{}

@Repository
public interface BookDAO extends CrudRepository{}
```

**@Service Annotation**
- indicates that a class is a service  

*Service*
- contains business logic code separated from the controller classes  

*Examples*
```
public interface ProductService{}

@Service
public class ProductServiceImpl implements ProductService{}
```

## Spring Security
- framework that helps w/ authentication + access-control (authorization)  

*Dependencies*
```
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-security</artifactId>
</dependency>

<dependency>
  <groupId>org.springframework.security</groupId>
  <artifactId>spring-security-test</artifactId>
  <scope>test</scope>
</dependency>
```

**Authentication + Authorization**
- WHO ARE YOU AND WHAT CAN YOU DO????  

**How Spring Security works**
- protects the HTTP requests w/ 3 lvls of protection  

*Lvls of Protection*
1. HTTP Firewall: block sus requests
2. Proxy Design Pattern: delegates HTTP requests to the right servlet filters
3. Filters: checks all HTTP requests + makes sure they are secure  

**Authentication Process in Spring Security**
1. HTTP request reaches server
2. HTTP request loops through filters till it gets to the right one
3. Supplied credentails are extracted from the HTTP request
4. Authentication object is created w/ the credentials
5. Authentication method is called on the authentication object















