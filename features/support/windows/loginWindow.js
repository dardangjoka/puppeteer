const loginWindow = {
    textFields: {
		username: "input[type='email']",
		password: "input[type='password']",
	},
	buttons: {
		next: "//button/span[contains(text(), 'Next')]",
		goToAccount: "//li//a[@href='https://accounts.google.com/ServiceLogin?service=accountsettings&continue=https://myaccount.google.com%3Futm_source%3Daccount-marketing-page%26utm_medium%3Dgo-to-account-button']"
	},
}

module.exports = loginWindow;