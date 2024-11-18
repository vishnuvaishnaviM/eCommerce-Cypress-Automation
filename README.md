**Ecommerce-Cypress-Automation**  

**Project Overview**  
This project demonstrates a comprehensive end-to-end test automation framework for an e-commerce platform using the Cypress automation framework. It covers essential user workflows such as login, product search, cart management, and checkout, ensuring robust functional and regression testing. The framework is designed with scalability and maintainability in mind, leveraging the Page Object Model (POM) design pattern, custom commands, and advanced Cypress features.  

**Key Features**  
- **End-to-End Test Automation**: Covers critical e-commerce functionalities such as user authentication, adding items to the cart, order placement, and payment workflows.  
- **Page Object Model (POM)**: Ensures modularity and reusability of test scripts for easy maintenance.  
- **Data-Driven Testing**: Utilizes JSON files to test with multiple data sets.  
- **Custom Commands**: Simplifies test scripts for repeated actions like login and API calls.  
- **Advanced UI Interactions**: Handles complex UI elements including alerts, iframes, child windows, dynamic tables, and file uploads.  
- **API Testing and Mocking**: Validates and mocks backend APIs using `cy.intercept()` to ensure consistent test execution.  
- **CI/CD Integration**: Seamless integration with Jenkins/GitHub Actions for continuous testing and reporting.  
- **Error Reporting**: Captures screenshots and videos on test failures, generating detailed reports with Mochawesome.  

**Technologies Used**  
- **Cypress**: End-to-end testing framework.  
- **JavaScript**: Test scripting language.  
- **Mochawesome**: Test report generation.  
- **JSON**: Data-driven testing.  
- **CI/CD Tools**: Jenkins, GitHub Actions.  

**Setup Instructions**
1. **Clone the Repository**:  
   git clone https://github.com/yourusername/Ecommerce-Cypress-Automation.git
   cd Ecommerce-Cypress-Automation
2. **Install Dependencies**:  
   npm install 
3. **Run Tests**:  
   npx cypress open   # For interactive mode  
   npx cypress run    # For headless mode  
**Reports and Logs**  
- Test execution reports are generated using Mochawesome and stored in the `reports` directory.  
- Screenshots and videos of failed test cases are stored in the `cypress/screenshots` and `cypress/videos` folders, respectively.  
