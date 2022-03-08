# JDBC
## Connecting to a Database
1. Add JDBC
  - Download JDBC if needed
  - Add as a dependency
    1. File < Project Structure
    2. Click on 'Modules'
    3. Click on 'Dependencies'
    4. Click on '+' and search for the folder to add
    5. Add the folder
2. Add Java Connector for the DB (i.e. mariadb java 8)
  - Download connector if needed
  - Add as a dependency
    1. File < Project Structure
    2. Click on 'Modules'
    3. Click on 'Dependencies'
    4. Click on '+' and search for the folder to add
    5. Add the folder
3. Register a driver
4. Establish a connection
   - url: jdbc:mariadb//localhost:port/name
   - user: username on the db
   - password: password on the db

```
import java.sql.*;
...

// Register Driver
DriverManager.registerDriver(new oracle.jdbc.driver.OracleDriver());

// Establish Connection
String url = "jdbc:mariadb://localhost:3305/classicmodels";
final String USER = "root";
final String PASSWORD = "password";

Connection conn = DriverManager.getConnection(url, USER, PASSWORD)
```