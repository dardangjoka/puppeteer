Feature: Google pay Features.

  
    Background: User has set up a valid Google Pay accout with valid payment and is on the transaction page.
        Given the user goes to "https://accounts.google.com/"
        Then the user should see the google "Google Account" page
        Then user provides "pxptest.finatial@gmail.com" and clicks Next
        And provides "pxpfinantial2023" and clicks Next
        Then the user should be logged in. 

    
    Scenario: User sucsessfully buys Item.
        Given The user is on the transaction page
        And user presses the "Pay Button"
        Then a new window with the shopping details should appear
        And user verifyes that he is beeing charged the same ammount "1 GDP".
        And User clicks on Pay button
        Then a confirmation message should appear.