1. What is being tested  
This test plan covers functional validation of the OrangeHRM Demo web application available at:
https://opensource-demo.orangehrmlive.com 
The focus is on core HR workflows that represent real business usage of the system:
- Authentication
- Main navigation and dashboard availability
- Employee management (PIM module)
- Employee search and filtering
- Leave request workflow

2. What is out of scope
- UI visual design and cross-browser compatibility
- Performance and load testing
- Accessibility testing
- Deep validation of all form fields and edge cases
- Email notifications or external integrations
- Mobile responsiveness
- Report generation

3. Criteria to test case selection
- Smoke (build health)
- Critical business scenarios 
- Regression (business usability)
- No duplicated records

4. How your tests stay independent from each other
- Each automated test is designed to be fully independent and not rely on the result of another test.
- No test depends on previously created records
- Direct navigation to required modules instead of sequential navigation
This way we can ensure tests can run in any order therefore they can be run in parallel, guaranteeing a single failure does not cascade into others and proper CI pipeline reliability

5. Assumptions or trade-offs 
- The demo environment is stable and reset periodically
- Default credentials remain valid 
- No rate limiting or CAPTCHA blocks automation
- Data created during tests does not affect other users
