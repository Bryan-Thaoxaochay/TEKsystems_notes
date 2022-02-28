# Week 4: Monday - Java Core Programming
## Exception Handling
Exception
- an event that disrupts the normal flow of a program  

Exception Handling
- minimize + recover from exceptions to return to the normal flow of a program  

Why?
- be able to send back a meaningful message about the error back to the user or us
- separate error handling code from normal code
- differentiate error types
- maintain normal flow  

### 3 Categories
1. Checked Exceptions (IOExceptions)  
a. occurs at compile-time  
b. handled by programmer w/ *try-catch* or *throw*  

1. Unchecked/Runtime Exceptions
a. occurs at run-time  
b. occurs due to programming error from programmer mostly  
c. not handled by programmer  

1. Error  
a. error is irrecoverable  

### Error vs Exception
Error
- major issue that can't be handled by the programmer
- app should crash instead of handle  

Exceptions
- events that occur in the code
- can be worked on by the programmer  

### Throwable Class
- main class to handle exceptions  

Throwable Class
- -> Exceptions  
-> Check Exceptions -> child exceptions  
-> Uncheck Exceptions -> child exceptions  

- -> Errors  
-> child exceptions  

### Syntax
```
try {
  // code
}

catch (exceptionType error) {
  // catch block
}

finally {
  // code that always executes
}
```
- catch block only executes if an exception occurs  

Rules
- try block always followed by catch or finally
- catch block always needs to have a try
- finally block is optional + always executes  

### Throw
throws
- keyword to declare which exceptions can be thrown by a method  
```
method naming syntax... throws exceptionType {}
```

throw
- keyword to explicitly throw an exception  
```
catch (Exception e) {
  throw new Exception();
}
```

### Multiple Catches
We can use multiple catches to catch different types of errors.
```
try {}

catch (exceptionType1 e) {}
catch (exceptionType2 e) {}
```
- i.e. if you don't know the exact error type, we can specify multiple types w/ multiple catches
- another useful one is using the Parent Exception, as this will check for all Child Exceptions
- i.e. Exception is the parent of all exceptions and will catch all exceptions  

### If-Else Statements
- these can be used over try...catch statements if done correctly  

### Creating Your Own Exceptions
- creating custom exceptions that fit better with the project  

```
public class CustomException extends Exception {
  CustomException(datatype paramName) {
    super (paramName);
  }
}
```
1. extend class from Exception
1. create constructor of this class w/ 1 param
1. use super(param) in constructor
1. CustomException can now be an exception to throw in the catch block

Throwing Custom Exception  
```
try {}

catch (Exception e) {
  throw new CustomConstructor("argument");
}
```  

## Files + Storage
### File Class
- used to perform operations related to files + directories w/ methods  

Create File Object
```
import java.io.File

String path = "C:\\path\\to\\file.txt"
File file = new File("path");
```  
- methods can be implemented onto the file object
- Absolute Path: path from the root (i.e. C:\\, D:\\)
- Relative Path: path from another directory

Why files?
- allow us to store our code + data permanently  

Operations
- create file -> createNewFile()
- read file -> read()
- write file -> write()
- delete file -> delete()  

### Reading a File
```
File fileToBeRead = new File ("path\\to\\file.txt");
Scanner input = new Scanner(fileToBeRead);

while(input.hasNext()) {
  System.out.println(input.nextLine());
}
```
1. Import the necessary packages
1. Retrieve the file to be read: File object
1. Use scanner to read the file, passing the file as input
1. while the input has a next line of data, print out the next line of data  

### Writing a File
```
File fileToWriteTo = new File ("path\\to\\file.txt");
FileWriter = writer = new FileWriter(fileToWriteTo);

writer.write("Data to add to file");
writer.close();
```
1. Import the necessary packages
1. Retrieve the file to be written to
1. Use filewriter to write to the file, passing the file as an arg
1. Use the filewriter write() method to add data into the file
1. close the filewriter  

