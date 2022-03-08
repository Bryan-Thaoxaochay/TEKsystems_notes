# JDBC
## Prepared Statements
Purpose
- class w/ additional methods to help w/ queries  

Methods
```
setInt(a, b);
setString(a, b);
setFloat(a, b);
setDouble(a, b);

executeUpdate(); // if the query is an update
executeQuery(); // if the query isn't an update
```
- a: which ? to substitute
- b: value to substitute ?
- method: based on what you need or doing  

Example
```
String query = "select * from employees where id = ?";

PreparedStatement ps = conn.prepareStatement(query);
ps.setInt(1, 1);

Resultset result = ps.executeQuery();
```
- create query
- convert query into a prepared statement
- fill in the ? w/ values
- execute query + store into a resultset  

**ResultSet**
- class that allows us to handle the data returned from a query
- contains multiple methods to work w/ the data