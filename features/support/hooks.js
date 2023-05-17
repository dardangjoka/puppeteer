const { BeforeAll, AfterAll, Before, After, Status, AfterStep } = require('@cucumber/cucumber')
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

let browser = null
let page = null

// ==== BeforeAll and AfterAll do not have access to test scope 'this'
// ==== Before and After do


BeforeAll(async function() {})

AfterStep(async function(testCase){
  let screenshot = await this.page.screenshot()
  if(testCase.result.status === Status.PASSED){
    console.log(`Test '${testCase.pickle.name}': Step - passed.`)
  }
  this.attach(screenshot, 'image/png')
})



AfterAll(async function() {
  if (browser != null) {
    browser.close()
  }
})

Before(async function() {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();

  // assign created browser and page to test scope
  this.browser = browser
  this.page = page
})

// executed after every test
After(async function(testCase) {
  // attach a screenshot 
  if (testCase.result.status === Status.FAILED || testCase.result.status === Status.PASSED) {
    if (this.page != null) {
      let screenshot = await this.page.screenshot()
      this.attach(screenshot, 'image/png')
    }
  }
  if (testCase.result.status === Status.PASSED){
    console.log(`Test: '${testCase.pickle.name}' - passed!`)
  }
  if(testCase.result.status === Status.FAILED){
    console.log(`Test: '${testCase.pickle.name}' - failed...`)
  }

  if (browser != null) {
    browser.close()
  }
})
