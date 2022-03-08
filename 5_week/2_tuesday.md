# Week 5: Tuesday - JDBC + Maven
## OOP + Java DB Connectivity
Purpose
- help organize the parts to our java DB  

1. Start w/ AbstractDAO
  1. Register driver
  2. Connect to db
  3. Safely close connection
2. Create interface for each DAO
  - contain queries
  - create structure for methods
3. Implement DAO
  - logic for interface methods
  - start w/ register/connect method
  - end w/ close method  

**AbstractDAO Syntax**
```
public class AbstractDAO {
   // Variables
   private final String url = "jdbc:mariadb://localhost:3305/school";
   private final String user = "root";
   private final String password = "password";
   private final Driver driver = new oracle.jdbc.driver.OracleDriver();

   protected Connection conn = null;
   protected PreparedStatement ps = null;
   protected ResultSet rs = null;

   public void connectToDB() throws SQLException {
   DriverManager.registerDriver(driver);
   conn = DriverManager.getConnection(url, user, password);
   }

   public void closeDBConnection() {
   if (!rs.equals(null) && !rs.isClosed()) rs.close();

   if (!ps.equals(null) && !ps.isClosed()) ps.close();

   if (!conn.equals(null) && !conn.isClosed()) conn.close();
   }
}
```

**DAO Interface**
```
public interface StudentDAO {
  enum SQL {
    GET_ALL_STUDENTS ("select * from student"),
    GET_STUDENT_BY_ID ("select * from student where id = ?");

    private final String query;
    private SQL(String s) {
      this.query = s;
    }

    public String getQuery() {
      return query;
    }
  }

//  List<Student> getAllStudents();
  public void getStudentById(int id) throws SQLException;
}
```

**Implement DAO**
```
public class Student implements StudentDAO {
  AbstractDAO db = new AbstractDAO();

   public void getStudentById(int id) throws SQLException {
     db.connectToDB();

     db.ps = conn.prepareStatement(SQL.GET_STUDENT_BY_ID.getQuery());
     db.ps.setInt(1, 1);

     db.rs = db.ps.executeQuery();

     while (db.rs.next()) {
       // look through code
     }

     db.closeDBConnection();
   }
}
```  

**Call in main()**
```
public class Main {
    public static void main(String[] args) throws SQLException {
        Student s = new Student();
        s.getStudentById(1);
    }
}
```