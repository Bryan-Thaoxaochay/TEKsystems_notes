# Week 5: Wednesday - JDBC, ORM, Unit Testing
## Maven: Creating a hibernate maven project
1. Manually create a SQL db
```
CREATE DATABASE exampledb;
```
2. Create Maven Project (intelliJ)
   - File -> New -> Project
   - Select 'Maven' on left side
   - Check 'Create from archetype'
   - Select a maven archetype (i.e. maven-archetype-quickstart)
   - Click 'Next'
   - Write a name for the project (i.e. MavenProject1)
   - Fill in GroupId: usually company domain
   - Fill in ArtifactId: usually name of project
   - Click 'Finish'
3. In pom.xml
   - add the necessary dependencies within the dependency tags
   - download the dependencies
```
 <!-- https://mvnrepository.com/artifact/org.hibernate/hibernate-core -->
<dependency>
    <groupId>org.hibernate</groupId>
    <artifactId>hibernate-core</artifactId>
    <version>5.5.7.Final</version>
</dependency>
<!-- https://mvnrepository.com/artifact/org.mariadb.jdbc/mariadb-java-client -->
<dependency>
    <groupId>org.mariadb.jdbc</groupId>
    <artifactId>mariadb-java-client</artifactId>
    <version>2.7.4</version>
</dependency>

<dependency>
    <groupId>org.hibernate</groupId>
    <artifactId>hibernate-annotations</artifactId>
    <version>3.5.5-Final</version>
</dependency>
```
4. Create config file (hibernate.cfg.xml)
   - Create 'resources' folder under src/main
   - Create 'hibernate.cfg.xml' file
   - Paste this code into the file
     - Check url, username, + password match the db  
```
<?xml version="1.0" encoding="UTF-8"?>  
<!DOCTYPE hibernate-configuration PUBLIC  
        "-//Hibernate/Hibernate Configuration DTD 5.3//EN"  
        "http://www.hibernate.org/dtd/hibernate-configuration-3.0.dtd">  

<hibernate-configuration>  
    <session-factory>  

    <!-- Drop and re-create the database schema on startup -->
    <property name="hibernate.hbm2ddl.auto"> update </property>   

    <!-- Database connection settings -->
<property name="connection.driver_class">org.mariadb.jdbc.Driver</property>   
<property name="connection.url">jdbc:mysql://localhost:3306/userdb</property>
<property name="connection.username">root</property>
<property name="connection.password">password</property>

    <!-- Maria DB dialect -->
<property name="dialect">org.hibernate.dialect.MariaDB53Dialect</property>
  <!-- Echo all executed SQL to stdout -->
   <property name="hibernate.show_sql" >true </property>
   <property name="hibernate.format_sql" >true </property>

   <!--   Mapping entity file -->
   <mapping class="com.test.hib.model.User"/> 

    </session-factory>  
</hibernate-configuration>  
```  
5. Add model and controller classes
   - models: src/main/java
   - controllers: src/main/java  


