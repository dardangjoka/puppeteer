const reporter = require("cucumber-html-reporter");

const options = {
    theme: "bootstrap",
    jsonFile: "cucumber_report.json",
    output: "cucumber_report.html",
    reportSuiteAsScenarios: true,
    launchReport: true,
    name: "PXP Test",
    storeScreenshots: true,
    noInlineScreenshots: true,
    brandTitle: "Cucumber automatic tests",
    screenshotsDirectory: "/screenshots/",
    metadata: {
      "App Version": "0.1.1",
      "Test Environment": "ALPHA",
      Browser: "Chrome  88.0.4324.150",
      Platform: "Windows 10",
      Parallel: "Scenarios",
      Executed: "Local System",
    },
  };

  reporter.generate(options);