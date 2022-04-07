# Week 9: Thursday - Back-End Web Framework
## Logging
- writing log messages during the execution of a program

Purpose
- allow us to see messages related to errors, warnings, info about the program, etc.  

**Logging Frameworks**
- Log4j
- Apache Commons Logging  

**Standard Log Levels**
- Logs have levels of urgency based on numbers  

*The higher the level value, the higher the urgency*  

**SLF4J**  
- tool that supports various logging frameworks (i.e. Log4j)  

Purpose
- gives us flexibility w/ logging frameworks  

*Example*
```
public class HelloWorld {
  Logger logger = LoggerFactory.getLogger(HelloWorld.class);
  logger.info("Hello World");
}
```  

**Logging in Spring Boot**
Dependencies
- spring-boot-starter-web
  - uses Logback framework for logging
  - already contains dependency for SLF4J  

*Logging in Files*
```
// Import packages
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

// Declare variable
private static final Logger log = LoggerFactory.getLogger(Classname.class);
```  

*Configure Log Levels*
- occurs in the application.properties file  

```
logging.level.[classpath] = [level].

logging.level.root= TRACE
logging.level.org.springframework= ERROR
```
- if an error occurs in org.springframework, the info sent back to us will be ERROR
- TRACE -> DEBUG -> INFO -> WARN -> ERROR  

*Logging Levels*
- ERROR: issues that affect a big part of the app
- WARN: indicate potential problems
- INFO: default level; display info that can be helpful when an app is running
- DEBUG: detailed + specific info to help fix a problem
- TRACE: every little detail when an app is running  

*Customize Log Message*  
- occurs in application.properties
```
logging.pattern.console=
logging.pattern.file=
```  

**Lombok Annotation w/ Logging**  
@Slf4j
- automatically generates a logger instance called log  

Examples
```
log.trace("message");
log.debug("message");
log.info("message");
log.warn("message");
log.error("message");
```