# Week 5: Monday - Java Core Programming
## Lambda Expressions
### **Stream**
- sequence of elements  

Purpose
- gives us access to new methods
- i.e. filter(), sorted(), map()  

Data structure to stream
```
List<String> names = new ArrayList<String>();
names.add("Larry");
names.add("Ellen");

names.stream()
  .filter( lambda expression) // intermediate operation
  .forEach(s -> System.out.println(s)); // terminal operation
```
*Intermediate Operation* - returns a stream + allows chaining  
*Terminal Operation* - returns a non-stream + no chaining  

*Intermediate operations only execute if a terminal operation is present*  

Creating a stream
```
Stream.of("d2", "a2", "b1", "b3", "c")
  // intermediate operation
  .filter(s -> {
    System.out.println("filter: " + s);
    return true;
  })
  // terminal operation
  .forEach(s -> System.out.println(s));
```  

## Java DB Connectivity (JDBC)
JDBC API
- manage connections w/ db
  - issue queries + commands
  - handle data from db  

API provides
- initial connection
- querying
- inserting, updating, + deleting of data
- creating, updating, + deleting of tables  

Why an API?
- allows code to access db via queries + loops
- no human error + scalable  

### **JDBC Steps**
*Download JDBC and mariadb connector to java 8*  

1. Register db driver  
```
// Method 1
public static void main(String[] args) throws SQLException {
  DriverManager.registerDriver(new oracle.jdbc.driver.OracleDriver());
}

// Method 2
Class.forName("org.mariadb.jdbc.Driver");
```

2. Initialize connection
  - DB url: location of db
    - Driver
    - Hostname/IP
    - Port: if not default, put in the port
    - DB name
  - username
  - password  
```
public static void main(String[] args) throw Exception {
  Class.forName("org.mariadb.jdbc.Driver");

  String url = "jdbc:mariadb://localhost/classicmodels";
  final String USER = "root";
  final String PASSWORD = "password";
  Connection conn = DriverManager.getConnection(url, USER, PASSWORD);
}
```

3. Prepare statement
```
String query = "SELECT * FROM employees";
```

4. Send statement to db
```
Statement statement = conn.createStatement();
ResultSet result = statement.executeQuery(query);
```

5. Get results from db
```
while (result.next()) {
  System.out.println(result);
}
```  

6. Close db connection
```
conn.close();
```

### **Prepared Statements**
- Object that came w/ the JDBC

Purpose
- add additional features to help us w/ our queries  

Methods
```
public void setInt(int paramIndex, int value);
public void setString(int paramIndex, String value);
public void setFloat(int paramIndex, float value);
public void setDouble(int paramIndex, double value);

public int executeUpdate(); // create, drop, insert, update, delete
public ResultSet executeQuery(); // execute select query
```
- value = paramIndex  

Example
```
String query = "SELECT * FROM employees WHERE id = ?";
PreparedStatement ps = conn.prepareStatement(query);

ps.setInt(1, id);

ResultSet result = ps.executeQuery();

while (result.next()) {
  // result is a table containing all the records that matched the query
  // there are methods available through ResultSet to retrieve info
}
```
- place ? in the query where the condition should change  

### Separate Class
*It is best practice to store all your queries in a separate class*

```
public class SQLQueries {
  public final static String GET_EMPLOYEE_BY_ID = "SELECT * FROM employees WHERE employeeNumber = ?";
}
```