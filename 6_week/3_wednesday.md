# Week 6: Wednesday - Unit Testing
## JUnit Unit Testing
### **Whiteboarding**
Keep track of...
- table name
- table fields
- queries  

### **Comparing Models**
Issue: we cannot compare models w/ the regular assertEquals() method  

Why: assertEquals() compares the object hash, not the attribute values of the object  

Solution: override the assertEquals() method w/ a method that compares values + not hashes  

Creating the equals() method in Table class
```
@Override
public boolean equals(Object obj) {
if (obj instanceof Student) {
	Student other = (Student) obj;
	boolean sameId = (this.id == other.getId());
	boolean sameEmail = (this.email.equals(other.getEmail()));
	boolean sameFName = (this.fName.equals(other.getfName()));
	boolean sameLName = (this.lName.equals(other.getlName()));
	if (sameId && sameEmail && sameFName && sameLName) {
		return true;
	}
}
return false;
}
```

Test
```
@Test
public void testStudent() {
  Student a = new Student();
  a.setId(1);
  a.setEmail("mgabriel@perscholas.org");
  a.setfName("Mike");
  a.setlName("Gabriel");

  Student b = new Student();
  b.setId(1);
  b.setEmail("mgabriel@perscholas.org");
  b.setfName("Mike");
  b.setlName("Gabriel");		

  assertEquals(a, b);
}
```

### **Comparing Arrays**
Use assertArrayEquals()
- assertEquals() on each entry
- automatically loops through the array  

*Test fails if the values aren't in the same order*  

For ArrayLists
- convert to array  

### **Exception Testing**
Why test an exception?
- so that we know what the issue is  

Example
```
@Test
public void testNumberFormatException() {
assertThrows(NumberFormatException.class, () -> {
	Integer.parseInt("Five");
}
}
```
- if it throws the right exception, the test passes
- use assertThrows()  

### **Grouping Tests**
Add this dependency in pom.xml
```
<dependency>
	<groupId>org.junit.platform</groupId>
	<artifactId>junit-platform-runner</artifactId>
	<version>1.6.2</version>
	<scope>test</scope>
</dependency>
```

Group Testing w/ Selected Package(s)
```
import org.junit.platform.runner.JUnitPlatform;
import org.junit.platform.suite.api.SelectPackages;
import org.junit.platform.suite.api.SuiteDisplayName;
import org.junit.runner.RunWith;

@RunWith(JUnitPlatform.class)
@SuiteDisplayName("JUnit 5 Test Suite") // Optional
@SelectPackages("com.perscholas.junitbasic.testsuite")
public class JUnit5SuiteTest {
	
}
```
- all tests in the package will be ran
- names for the test classes must end w/ "Test"

Group Testing w/ Selected Classes
```
import org.junit.platform.runner.JUnitPlatform;
import org.junit.platform.suite.api.SelectClasses;
import org.junit.runner.RunWith;

import com.perscholas.junitbasic.testsuite.Class1Test;
import com.perscholas.junitbasic.testsuite.Class3;

@RunWith(JUnitPlatform.class)
@SelectClasses({Class1Test.class, Class3.class})
public class JUnit5SelectClassTest {
	
}
```
- all tests in the classes specified will run
- "Test" or "Tests" doesn't have to be included  

## JUnit + JDBC
We are only testing the methods, NOT THE DB

### **Setting up DB for Testing**
1. @BeforeAll - establish connection  
```
@BeforeAll
public static void setUp() {
		DatabaseConnection dbConn = new DatabaseConnection();
		try {
			conn = dbConn.getConnection();
			studentDAO = new StudentDAO();
		} 
		catch (ClassNotFoundException | IOException | SQLException e)
		{
			e.getMessage();
		}
	}
```

2. @BeforeEach - query data + create object to compare to
```
@BeforeEach
public void beforeEachMethod() throws SQLException {
	stmt = conn.prepareStatement("SELECT * FROM students WHERE id=?");
	stmt.setInt(1,1);
	rs = stmt.executeQuery();
	rs.next();
	expected = new Student();
	expected.setId(rs.getInt(1));
	expected.setEmail(rs.getString(2));
	expected.setfName(rs.getString(3));
	expected.setlName(rs.getString(4));
}
```

3. @Test - compare the values
```
@Test
public void testGetStudentById() throws SQLException {
	Student actual = studentDAO.getStudentById(1);
	assertEquals(expected, actual);
}
```

4. @AfterEach - reset query  
```
@AfterEach
public void afterEachMethod() throws SQLException {
	if (rs != null) {
		rs.close();
	}
	if (stmt != null) {
		stmt.close();
	}
}
```

5. @AfterAll - close connection
```
@AfterAll
public static void tearDown() throws SQLException {
	if (conn != null) {
		conn.close();
	}
}
```

### **Parameterized Test**
Purpose
- run test multiple times w/ different args  

Add this dependency to pom.xml
```
<dependency>
	<groupId>org.junit.jupiter</groupId>
	<artifactId>junit-jupiter-params</artifactId>
	<version>5.6.2</version>
</dependency>
```

Parameter Options
- ValueSource
- CsvSource
- ArgumentSource
- ArgumentSources
- CsvFileSources
- EmptySource
- EnumSource
- MethodSource
- NullAndEmptySource
- NullSource  

Syntax
```
public class Test {
  @ParameterizedTest
  @SomethingSource( params )
  public void testMethod( params ) {}
}
```

*@ValueSource*
```
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

public class JUnit5ValueSourceTest {
	@ParameterizedTest
	@ValueSource(strings = {"red", "green", "blue"})
	void testJUnit5Parameters(String color) {
		System.out.println(color);
	}
}
```
- each value in @ValueSource will be passed into the test
- params in test method must match  

*@CsvSource*
```
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

public class JUnit5CsvSourceTest {
	@ParameterizedTest
	@CsvSource({"1,1,2,true", "1,1,3,false"})
	void testJUnit5CsvParameters(int num1, int num2, int expectedAnswer, boolean veracity) {
		if (veracity) {
			assertTrue(Math.addExact(num1, num2) == expectedAnswer);
			System.out.println(num1 + " plus " + num2 + " equals " + expectedAnswer);
		} else {
			assertFalse(Math.addExact(num1, num2) == expectedAnswer);
			System.out.println(num1 + " plus " + num2 + " does not equal " + expectedAnswer);
		}
	}
```
- default delimiter: comma
- params in test method must match  