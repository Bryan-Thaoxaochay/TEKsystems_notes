# Week 1: Monday - Orientation and Project Management Methodologies
**Big Project for the Bootcamp:** https://platform.instructure.com/courses/404/pages/teksystems-java-developer-case-study-submission-requirements
- come up with 3 ideas, and Haseeb will approve of 1 of them

## Software Development Life Cycle Presentation
Software Development Life Cycle
- process used to design, develop, and test high-quality software
1. Produce high-quality software
2. Reaches completion within time and cost estimates
3. Exceeds customer expectations

### Stages of SDLC
#### 1. Requirements Analysis: Where are we now? What are we building?  
**Business Analysis Phase**  
- Why they need this?
- When do they need it?
- What is the budget?
- What are the risks associated w/ the project?
- These people answers these questions:  
Client => CFO, Department Manager, Finance Manager, Domain Expert, Lawyer  
Software Side => Product Owner, Product Manager, Technical Lead, Domain Expert, Subject Matter Expert, Business Analyst
  
**Requirement Gathering Phase**  
- Gather info to set requirements  
Take notes, record videos, gather documents, etc.
- Who gathers this info?  
Business analyst, project coordinator, subject matter expert, senior team lead  
  
**AS A DEVELOPER, YOU CAN ONLY DO THE REQUIREMENTS SPECIFIED BY THE PEOPLE ABOVE**

#### 2. Design: How do we build it?  
- Who?  
BA, Project Coordinator, SME, Sr Team Lead
- What needs to be completed during this phase?  
SRS Document - Function requirement documents (FRD) and non-functional requirement documents (Non FRD)  
Proposal - Estimated Budget and Cost  
**Client signs off on the SRS document, then signs off on the proposal, then we move onto the phase**

#### 3. Coding / Implementation / Development: Let's make it happen?  
- Who?  
Tech Lead, Software Developers, Network Developer, Database Developer, Testing Developer / QA, Graphics Designer, BA, Product Manager  
  
BA/PM is the person who interacts with the client.  
QA does STLC.  
Development and production environments have to be set up.  
Graphics designer works closely with the software developers

#### 4. Testing: Is the software of good quality?  
Software Quality - how well the product meets the requirements  
Fit-for-Use - from the user perspective, how useful is the product for daily usage  
  
- Who?  
QA team, DB team, developers, Network team, Cybersecurity, BA?

#### 5. Deploy "Go Live"  
Time to deploy the application! Passed testing and is high-quality.  
- Who?  
Everyone => client and software team  
  
#### 6. Maintenance  
An ongoing process. Involves:
- fixes
- upgrades
- improvements
- monitoring  
  
## Software Testing Life Cycle Presentation
Software Testing Life Cycle  
- process of creating and performing software testing  

Entry Criteria  
- items to be completed before testing begins

Exit Criteria  
- items to be completed before testing can be concluded  

**These criterias are for all stages of STLC**  
  
### Stages for STLC
#### 1. Requirement Analysis  
Purpose: Identify testable requirements from the SRS  
  
Actions  
- ID type of tests to be performed
- Gather details about testing priorities and focus
- Prepare RTM (this differs w/ every company - no set default)
- ID test environment details
- Perform automation feasibility analysis (if needed)  

**Important Documents: RTM + Automation Feasibility Report**  
  
#### 2. Test Planning  
Purpose: Senior QA determines effort for the project, and prepare and finalize the test plan  
  
Actions  
- Test tool selection
- Test effort estimation
- Determine roles and responsibilities
- Training requirements - how to give training to employees  

**Important Documents: Test Plan + Effort Estimation**  
  
#### 3. Test Case Development  
Purpose: Create, verify, and rework test cases and test scripts  
  
Actions  
- Create test cases and automation scripts
- Review test cases and scripts
- Create test data (if test environment available)  
  
#### 4. Test Environment Setup  
Purpose: Preparing the test environment  
  
Actions  
- Understand the required architecture and environment setup
- Prepare hardware and software requirements list
- Setup test environment and test data
- Perform smoke test on build  

#### 5. Test Execution  
Purpose: Run the tests, correcting and retesting tests as bugs appear.  
  
Actions  
- Execute tests per Test Plan
- Keep track of test results
- Log defects to test cases in RTM
- Retest defects and fix them
- Make sure all defects are fixed

#### 6. Test Cycle Closure  
Purpose: Have a meeting to discuss future test cycles and share best practices for future projects as well as reflect on the current test cycle and think about where it could've been improved.  
  
Actions  
- Evaluate cycle completion (time, cost, quality, software, test coverage, etc.)
- Document what you've learned
- Prepare test closure report
- Prepare test metrics