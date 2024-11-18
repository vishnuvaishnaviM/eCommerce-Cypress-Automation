const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video:true, //to generate video for failed testcases
  reporter: 'cypress-mochawesome-reporter', //to get mochawesome html reports
  e2e: {
    setupNodeEvents(on, config) {
      
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on); //to get mochawesome html reports
    },
  },
});
