# Java Web Application w/ Spring Boot
## Requirements
### Webserver
- Tomcat  

### Front-End
- CSS  
a. 1 external CSS stylesheet  
b. Bootstrap is allowed  

- HTML  
a. 6 different pages  
b. used w/ Thymeleaf (Java library)

- JavaScript  
a. 1+ external JavaScript file  

- Navigation section  
Displayed on multiple pages

*Thymeleaf* - HTML template engine to display data + text dynamically

### Models + Databases
- DBMS  
a. use MariaDB  
b. 4+ tables  
c. have schema diagram  

- Models  
a. 4+ models  
b. 3+ custom queries  
c. 1+ example of each CRUD operation  
d. annotated for binding w/ Spring data binding via Jakarta and/or Hibernate validation

- Jakarta Persistence API (JPA)  
Use directly or via Spring Data JPA  

- Testing  
a. test each custom query in each repo  
b. test 1+ method in each service class  
c. 1+ parameterized test  
d. 1+ test suite  
e. use JUnit to unit test JPA repos/services  

- Repos + Service Classes/Interfaces  
Include these in the project  

*JPA* - allow us to store, access, and manage Java objects in a relational DB  
*Java Repositories* - new way to store, update, and retrieve data from the backend  
*Service* - specific function provided by a library
- interfaces + classes support the service in providing this functionality  

### Spring  
- use Spring Boot
- 2+ ways of creating a managed bean/object
- @Autowired annotation  
Use correctly for right implementation of dependency injection  

- Spring Security  
a. 1+ example session management  
b. Sign up + login functionality  

- Exception Handling  
Incorporate where necessary in code  

### Custom Exceptions
- 1+ custom exception created + implemented  

### Naming Conventions
- Classes: PascalCase
- Variables, Methods, URLs: camelCase
- Files: snake_case
- Packages: lowercase.with.dots + include name and project (i.e. org.bryanthaoxaochay.project)  

### Classes
- Comments  
a. describes the class  
b. describe the methods  

### GitHub
- README file  
a. user stories  
b. technical challenges + how they were resolved  
  
## App Ideas
### Blog App
Purpose  
- User can post an experience that was difficult and hard for them  
  
### Park App
Purpose
- Be able to find parks through multiple criteria, such as location, amenities, people, etc.  

## Chosen App (Blog App: Damn That Was Hard)
### Frontend
**User Stories**
1. As a random user, I want to view past blog posts so that I can read them.
1. As a random user, I want to sign up for an account so that I can get account features.
1. As a signed-in user, I want to view past blog posts so that I can comment on them.
1. As a signed-in user, I want to view my past blog posts so that I can read them.
1. As a signed-in user, I want to create + post a blog post so that others can interact with it.
1. As a signed-in user, I want to edit my past blog post so that I can fix errors.
1. As a signed-in user, I want to edit my past comments so that I can fix errors.
1. As a signed-in user, I want to delete my past blog posts so that others can't read them.
1. As a signed-in user, I want to delete my past comments so that others can't read them.
1. As a signed-in user, I want to save others blog posts so that I can find them faster.

**Web Pages**
1. Home page
1. Sign-In page
1. Sign-Up page
1. Sign-Out page
1. Create New Blog post page
1. View My Blog posts page
1. View Saved Blog Posts page

### Backend
**Database**
- Tables  
a. Users  
b. BlogPosts  
c. UserBlogPosts  
d. SavedBlogPosts  
e. Comments