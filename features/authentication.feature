Feature: Authentication

    This is feature has the login, sign up, and logout scenarios
    # Scenario: Sign up page
    #     Given the user is not authenticated
    #     And the user is on the sign up page
    #     Then the user shall see a sign up form
    #     Then the user shall be able to input his email
    #     Then the user shall be able to input his password
    #     Then the user shall be able to input confirmation of his password
    #     Then the user shall be able to submit the form
    #     Then the user shall be able to navigate to the terms and conditions page
    #     Then the user shall be able to navigate to sign in page

    # Scenario: successful sign up
    #     Given the user is not authenticated
    #     And the user is on the sign up page
    #     And the user has filled the sign up form validly
    #     And the user verified the recaptcha
    #     When the user submits a sign up form
    #     Then the user will see a success message of the registeration
    #     Then the user will be redirected to register-succeeded page
    #     Then the user will recieve an activate link to his email


    # Scenario Outline: let the field empty
    #     Given the user is not authenticated
    #     And the user is on the sign up page
    #     And the user has left "<input-field>" input empty
    #     Then the user shall see a "<error-message>" message for empty inputs
    #     Examples:
    #         | input-field           | error-message   |
    #         | email                 | هذا الحقل مطلوب |
    #         | password              | هذا الحقل مطلوب |
    #         | password_confirmation | هذا الحقل مطلوب |

    # Scenario: sign up with used email
    #     Given the user is not authenticated
    #     And the user is on the sign up page
    #     And the user has filled the sign up form validly
    #     And the user inputted an used email
    #     When the user submits a sign up form
    #     Then the user will see be informed that the email has been used before

    # Scenario: after the user registered successfully
    #     Given  the user is on the register-succeeded page
    #     Then the user will see a button to sign in
    #     Then the user will be able to click the button to navigate to sign in page

    # Scenario: Activate the account
    #     Given  the user has inputted the activation link in the url
    #     When the user presses enter
    #     Then the account will be activated
    #     Then the user will be redirected to the activated page
    #     Then the user will see a successful message of account activation
    #     Then the user will be able to navigate to sign in page

    # Scenario: user visit the sign up and he is authenticated
    #     Given the user is authenticated
    #     And the user is on the sign up page
    #     Then the user will see a message that tells him he can start the competition



    # # # # # # # # # # # # # # # LOGIN SCENAROIS # # # # # # # # # # #

    # Scenario: Sign in page
    #     Given the user is not authenticated
    #     And the user is on the sign in page
    #     Then the user will see a sign in form

    # Scenario: successful sign in
    #     Given the user is not authenticated
    #     And the user is on the sign in page
    #     And the user filled the email input with correct email only
    #     And the user filled the password input with correct password only
    #     When the user submit a sign in form
    #     Then the user shall see a login success message
    #     Then the user shall be redirected to home page

    # Scenario Outline: sign in with invalid inputs
    #     Given the user is not authenticated
    #     And the user is on the sign in page
    #     And the user violated a "<validity-rule>" rule for "<input-field>" input
    #     Then the user will see a "<error-message>" message because of "<validity-rule>" rule
    #     Examples:

    #         | input-field | validity-rule | error-message              |
    #         | email       | required      | هذا الحقل مطلوب            |
    #         | email       | email         | البريد الألكتروني غير صحيح |
    #         | password    | required      | هذا الحقل مطلوب            |


    Scenario: User did not activate the account through an email
        Given the user is not authenticated
        And the user is on the sign in page
        And the user has filled the sign in form validly with unactivated email
        And the user has not activated the account
        When the user submit a sign in form
        Then the user will be informed that his account not activated yet

    Scenario: Invalid credentials account login
        Given the user is not authenticated
        And the user is on the sign in page
        And the user inputted invalid credentials
        When the user submit a sign in form
        Then the user will be informed that the credentials do not match our records.

    Scenario: Login button to navigate the user to registeration section
        Given the user is on the home page
        And the user is not authenticated
        When the user clicks on the login button
        Then the page will be scrolled down to the login form inside the homepage

    Scenario: logout page
        Given the user has typed in the url "/logout"
        When the user presses enter
        Then the user will logout from the website

    Scenario: logout in sign in page
        Given the user is authenticated
        And the user accessed the sign in page
        Then the user will see a logout button
        Then the user will be able to click a logout button to logout