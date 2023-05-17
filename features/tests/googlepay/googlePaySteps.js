const { Given, When, Then } = require('@cucumber/cucumber');
const { clickByXpath, typeByXpath, clickAndTypeText, getText, click } =require("../../lib/utils");
const loginWindow = require("../../support/windows/loginWindow");
const expect = require('chai').expect;
const googlePayElements = require('../../support/pages/googlePay');

let newPage;
let iframeHandler;
let frame;
Given('the user goes to {string}', async function (googleAccountPage) {
	await this.page.goto(googleAccountPage);
});

Then('the user should see the google {string} page', async function (singin) {
	let title = await this.page.title();
	expect(title).itself.contain(singin);

});

Then('user provides {string} and clicks Next', async function (username) {

	console.log();
	await this.page.type(loginWindow.textFields.username, username);
	 await clickByXpath(this.page, loginWindow.buttons.next);
	// 
	
});

Then('provides {string} and clicks Next', async function (passwordi) {
	await this.page.waitForTimeout(3000);
	await this.page.type(loginWindow.textFields.password, passwordi);
	await clickByXpath(this.page, loginWindow.buttons.next);

});

Then('the user should be logged in.', async function () {
	let singin = await getText(this.page, "h1[class='XY0ASe']");
	expect(singin).is.contain("Welcome, pxptest Finatial")
});

Given('The user is on the transaction page', async function () {
	await this.page.goto(googlePayElements.url);
	await this.page.waitForTimeout(3000);
});

Given('user presses the {string}', async function (payButton) {
	await click(this.page, googlePayElements.buyButton);
});

  Then('a new window with the shopping details should appear', async function () {
	//  iframeHandler = await this.page.$("iframe[id='sM432dIframe']");
    //  frame = await iframeHandler.contentFrame();
	let pages=await this.browser.pages();
	await pages.forEach(async (element) => {
		console.log(await element.url());
	});
  });

  Then('user verifyes that he is beeing charged the same ammount {string}.', async function (ammount) {
	// let acutalAmmout=await  getText(this.page, googlePayElements.totalPriceXpath);
	// expect(acutalAmmout).is.equals(ammount);
  });

  Then('User clicks on Pay button', async function () {
	await clickByXpath(frame, "//div[@role='button']");
  });

  Then('a confirmation message should appear.', async function () {
	// No clue, never got it
	// but it should look like this 
	await this.page.waitForTimeout(2000);
	let succseesMessage= await getText(this.page, googlePayElements.errMsg);
	expect(succseesMessage).is.contain("Payment processed successfully:");
	await this.page.waitForTimeout(2000);

  });
