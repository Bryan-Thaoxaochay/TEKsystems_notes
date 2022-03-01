# Java Exception Handling
Exception
- event that stops the expected flow of a program  

Exception Handling
- trying to minimize + recover from exceptions to restore the expected flow  

Why?
- allows us to work w/ the exceptions  

## 3 Categories
### Checked Exceptions (IOExceptions)
- handled by the programmer w/ try...catch blocks
- occurs at compile-time  

### Unchecked Exceptions (Runtime)
- not handled by the programmer
- mainly occurs do to programming errors from programmer
- occurs at run-time  

### Error
- completely unable to be handled by the programmer
- **App should crash instead of handled**  

## Throwable Class
- class that handles exceptions  

```
Throwable Class
  -> Exceptions
    -> Check Exceptions
      -> child exceptions
  
    -> Uncheck Exceptions
      -> child exceptions
  
  -> Errors
    -> child exceptions
```  

## Syntax
try...catch
```
try {}

catch (exceptionErrorType e) {}
catch (exceptionErrorType e) {} // optional

finally {} // optional
```  

Custom Exceptions
```
public class CustomException extends Exception {

  CustomException(String message) {
    super (message);
  }
}


// In Other Class
try {}

catch (Exception e) {
  throw new CustomException("Message to send with error");
}
```
1. extend class from Exception
1. create constructor of this class w/ 1 param
1. use super(param) in constructor
1. CustomException can now be an exception to throw in the catch block