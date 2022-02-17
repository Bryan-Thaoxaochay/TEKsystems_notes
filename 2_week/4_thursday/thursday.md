# Week 2: Thursday - SQL Review + Git, GitHub, Version Control
## Git, GitHub, + Version Control
### Version Control
- a way to manage changes to the source code of a project over time
- version control is accomplished w/ a set of tools  

Why use version control?
- allow collaboration between teammates
- stores versions of the source code
- restore previous versions
- have a backup version prepared  

### Git
- free + open-source version control system
- promotes distributed development, where multiple people can have working versions

**Git Configuration**
```
git config --global user.name "your username"
git config --global user.email "your email"
```
- the strings are optional, if you want to update  

**Git Workflow**  
Working Directory | Staging Area | Local Repo | Remote Repo
```
Working Directory (git add) -> Staging Area (git commit) -> Local Repo (git push) -> Remote Repo

Remote Repo (git fetch) -> Local Repo (git merge) -> Working Directory

Remote Repo (git pull) -> Working Directory
```  
1. Modify file(s) from Working Directory
1. Add file(s) to Staging Area
1. Commit file(s) to Local Repo
1. Push commit(s) to Remote Repo  

**Local Repos**  
- repos stored on a local computer
- acts as a private workspace away from the source code of the project  

Creating a local repo
```
git init
```
- execute this command in the folder you want to store your repo in
- this will create a repo, creating the files needed to keep track of changes  

Git BLOB
- object type of the file that contains the change history of a repo
- name: SHA1 hash (i.e. *c3499c2729730a7f807efb8676a92dcb6f8a3f8f*)
- stored in the Git database  

**Branches**  
- a copy of the local repo
- allows us to not work on the master branch, by creating a separate 'environment' where we can add, update, or delete features
- the new branch can eventually merge with the master branch if everything works  

*Updates to the master branch should not occur locally*  

**Head**
- the current commit you are in OR the last commit to the branch
- the branch you are in as well
- if you switch branches, the HEAD is transferred to that branch as well  

**Tags**
- tagging specific points in a repo's history
- for a product release, we can tag that point in case we ever need to go back  
```
git tag (tag name) (commit id)
```

**Undo Changes**
```
git revert (commit id)

git reset --[hard | mixed | soft] (commit id)
```
- git revert undos the commits based on commit id, then commits those changes in a new commit
- git reset completely removes work by moving the HEAD to another point in time, making the commits that come after this point in line disappear  

**Revisions**  
- versions of the source code, represented by commits  

**URL**  
- the location of the Git repo, stored in config file
```
git@github.com:(git username)/(repository name).git
```  

**Pull Request**  
- the process to add new branches to the master branch
```
Create PR -> Members Review PR -> Approve PR? -> Merge Branch to Master Branch
```  

### GitHub
- online website where projects are stored and where members can collaborate
- stores remote repos  

**Link Remote and Local Repos**  
```
git clone (repo URL)

git remote add origin (repo URL) -> git pull origin (branch name)
```
- git clone: links remote repo to local repo
- git remote add origin: links local repo to remote repo  

**Branch vs Fork**
Forking
- meant for the user to go in an entirely different direction w/ the source code
- meant for major changes in a different direction (new goal)

Branching
- branches are meant to eventually reroute back to the main branch
- meant for changes in the same direction (same goal still)  

## SQL Review
SQL - Structured Query Language

SELECT: extracts data  
UPDATE + MODIFY: changing data  
ALTER: changing table + constraints  

Normalization
- reduce redundancies in the database
- simplify data  

Logical Data Modeling
- gathering all the data that we need and: 1) assign to the right tables 2) create the right relationships between tables 3) ID datatypes 4) ID constraints  

Constraints - rules for the data in the database
- help enhance data integrity  

Types of Constraints
- Entity: PRIMARY KEY + UNIQUE
- Domain: data types, NOT NULL, DEFAULT
- Referential: FOREIGN KEY
- User-Defined: CHECK + TRIGGERS  

Primary Key
- unique for each row
- never null
- auto_increment w/ each row (optional)
- *tables do not need a PK column*

Composite Key - 2+ columns used as a PK  

Foreign Key - field in a table that refers to the PK of another table
- tables can have multiple foreign keys
- *tables do not need a FK column*

NOT NULL: column field needs to have a value
CHECK: specify a condition that the data must meet in order to be added to the db  

WHERE: filter out rows from the entire table that meet the condition(s)