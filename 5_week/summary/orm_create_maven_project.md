# Creating a Maven Project on intelliJ + Setting up the configuration file
- On intelliJ
  1. File -> New -> Project
  2. Select 'Maven' on left side
  3. Check 'Create from archetype'
  4. Select a maven archetype (i.e. maven-archetype-quickstart)
  5. Click 'Next'
  6. Write a name for the project (i.e. MavenProject1)
  7. Fill in GroupId: usually company domain
  8. Fill in ArtifactId: usually name of project (i.e. MavenProject1)
  9. Click 'Finish'  

**This will create a new project w/ some files + packages set up after intelliJ is finished loading.**  

- In pom.xml
  1. Add necessary dependencies within the dependency tags
  2. Download the dependencies  

*Dependencies*
```
// Hibernate Dependency
 <!-- https://mvnrepository.com/artifact/org.hibernate/hibernate-core -->
<dependency>
    <groupId>org.hibernate</groupId>
    <artifactId>hibernate-core</artifactId>
    <version>5.5.7.Final</version>
</dependency>

// Hibernate Annotations Dependency
<dependency>
    <groupId>org.hibernate</groupId>
    <artifactId>hibernate-annotations</artifactId>
    <version>3.5.5-Final</version>
</dependency>

// MariaDB Dependency
<!-- https://mvnrepository.com/artifact/org.mariadb.jdbc/mariadb-java-client -->
<dependency>
    <groupId>org.mariadb.jdbc</groupId>
    <artifactId>mariadb-java-client</artifactId>
    <version>2.7.4</version>
</dependency>
```  

- In config file (hibernate.cfg.xml)
  1. If no resource folder, create one under 'src/main'
  2. Within resource folder, create hibernate.cfg.xml file
  3. Paste this code within the folder:
```
<hibernate-configuration>  
    <session-factory>  

    <!-- Drop and re-create the database schema on startup -->
    <property name="hibernate.hbm2ddl.auto"> update </property>   

    <!-- Database connection settings -->
<property name="connection.driver_class">org.mariadb.jdbc.Driver</property>   
<property name="connection.url">jdbc:mysql://localhost:3306/userdb</property> // Port # + DB name must match mariadb
<property name="connection.username">root</property> // username must match mariadb
<property name="connection.password">password</property> // password must match mariadb

    <!-- Maria DB dialect -->
<property name="dialect">org.hibernate.dialect.MariaDB53Dialect</property>
  <!-- Echo all executed SQL to stdout -->
   <property name="hibernate.show_sql" >true </property>
   <property name="hibernate.format_sql" >true </property>

   <!--   Mapping entity file -->
   <mapping class="com.test.hib.model.User"/> // Must add table classes here

    </session-factory>  
</hibernate-configuration>  
```

- Add models + controllers
```
src
-> main
  -> java
    -> models
      - User.java
    -> controllers
      - UserController.java
```
