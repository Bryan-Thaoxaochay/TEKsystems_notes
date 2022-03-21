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

## Chosen App (Blog App: Damn That Was Hard)
### Frontend
**User Stories**
1. As a random user, I want to view past blog posts so that I can read them.
1. As a random user, I want to sign up for an account so that I can get account features.

2. As a signed-in user, I want to view past blog posts so that I can comment on them.
3. As a signed-in user, I want to view past blog posts so that I can ask a question.
4. As a signed-in user, I want to view my past blog posts so that I can read them.

5. As a signed-in user, I want to create a blog post so that others can interact with it.
6. As a signed-in user, I want to create a comment so that others can interact with it.
6. As a signed-in user, I want to create a question so that the OP can interact with it.
7. As a signed-in user, I want to create an answer so that others can see it.
   
8. As a signed-in user, I want to edit my past blog post so that I can fix errors.
9. As a signed-in user, I want to edit my past comments so that I can fix errors.
10. As a signed-in user, I want to edit my past questions so that I can fix errors.
11. As a signed-in user, I want to edit my past answers so that I can fix errors.
   
12. As a signed-in user, I want to delete my past blog posts so that others can't read them.
12. As a signed-in user, I want to delete my past comments so that others can't read them.
13. As a signed-in user, I want to delete my past questions so that others can't read them.
13. As a signed-in user, I want to delete my past answers so that others can't read them.
    
14. As a signed-in user, I want to save other's blog posts so that I can find them faster.

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
  1. Users
    - id
    - firstName
    - lastName  
    - username
    - email
    - password
    - userBlogposts
    - savedBlogposts
    - created at
    - updated at
  2. BlogPosts
    - id
    - topic
    - title
    - goal
    - description
    - comments
    - questions
    - created at
    - updated at
  3. Comments
    - id
    - description
    - flag
    - created at
    - updated at
  4. Questions
    - id
    - question
    - answers
    - flag
    - created at
    - updated at
  5. Answers
    - id
    - answer
    - comments
    - created at
    - updated at