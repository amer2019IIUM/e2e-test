Feature: Authentication

    This is feature has the login, sign up, and logout scenarios

    # # # # # # # # # # # # # # # SIGN UP SCENAROIS # # # # # # # # # # #

    # Scenario: Sign up page
    #     Given the user is not authenticated
    #     And the user is on the sign up page
    #     Then the user shall see a sign up form
    #     Then the user shall be able to submit the form
    #     Then the user shall be able to navigate to the terms and conditions page
    #     Then the user shall be able to navigate to sign in page

    # Scenario: successful sign up
    #     Given the user is not authenticated
    #     And the user is on the sign up page
    #     And the user filled the email input with correct email that never used before
    #     And the user filled the password input with correct format password
    #     And the user filled the confirmation password input that match the previous password
    #     And the user verified the recaptcha
    #     When the user submits the form
    #     Then the user will see a success message of the registeration
    #     Then the user will be redirected to register-succeeded page
    #     Then the user will recieve an activate link to his email


    # Scenario Outline: sign up with invalid inputs
    #     Given the user is not authenticated
    #     And the user is on the sign up page
    #     And the user violated a "<validity-rule>" rule for "<input-field>" input
    #     Then the user will see a "<error-message>" message because of "<validity-rule>" rule
    #     Examples:
    #         | input-field           | validity-rule      | error-message                                 |
    #         | email                 | required           | هذا الحقل مطلوب                               |
    #         | password              | required           | هذا الحقل مطلوب                               |
    #         | password_confirmation | required           | هذا الحقل مطلوب                               |
    #         | email                 | email              | البريد الألكتروني غير صحيح                    |
    #         | password              | minLength_8        | يجب أن تتألف كلمة السر من 8 محارف على الأقل   |
    #         | password              | upper_lower_number | يجب ان تحوي أحرف إنكليزية صغيرة وكبيرة وأرقام |
    #         | password_confirmation | match_password     | يجب أن تكون كلمة السر مطابقة                  |



    # Scenario: sign up with used email
    #     Given the user is not authenticated
    #     And the user is on the sign up page
    #     And the user filled the email input with correct email that has been used before
    #     And the user filled the password input with correct format password
    #     And the user filled the confirmation password input that match the previous password
    #     When the user submits a form
    #     Then the user will see be informed that the email has been used before


    # Scenario: Sign up with large length email and submit to the system
    #     Given the user is not authenticated
    #     And the user is on the sign up page
    #     And the user has inputted more than 255 characters in the email input field
    #     And the user filled the password input with correct format password
    #     And the user filled the confirmation password input that match the previous password
    #     When the user submits a form
    #     Then the user shall see a error message of max 255 characters that comes from the system

# Scenario: after the user registered successfully
#     Given  the user is on the register-succeeded page
#     Then the user will see a button to sign in
#     Then the user will be able to click the button to navigate to sign in page

# Scenario: Activate the account
#     Given the user clicked on the activation link
#     Then the account will be activated
#     Then the user will be redirected to the activated page
#     Then the user will see a successful message of account activation
#     Then the user will be able to navigate to sign in page

# Scenario: user visit the sign up and he is authenticated
#     Given the user is authenticated
#     And the user accessed the sign up page
#     Then the user will see a message that tells him he can start the competition



# # # # # # # # # # # # # # # LOGIN SCENAROIS # # # # # # # # # # #

# Scenario: Sign in page
#     Given the user is not authenticated
#     And the user is on the sign in page
#     Then the user will see a sign in form
#     Then the user shall be able to submit the form
#     Then the user will be able to navigate to the forgot page
#     Then the user will be able to navigate to sign up page

# Scenario: successful sign in
#     Given the user is not authenticated
#     And the user is on the sign in page
#     And the user filled the email input with correct email only
#     And the user filled the password input with correct password only
#     When the user submits the form
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


# Scenario: User did not activate the account through an email
#     Given the user is not authenticated
#     And the user is on the sign in page
#     And the user has filled the sign in form validly with unactivated email
#     And the user has not activated the account
#     When the user submit a sign in form
#     Then the user will be informed that his account not activated yet

# Scenario: Invalid credentials account login
#     Given the user is not authenticated
#     And the user is on the sign in page
#     And the user inputted invalid credentials
#     When the user submit a sign in form
#     Then the user will be informed that the credentials do not match our records.

# Scenario: Login button to navigate the user to registeration section
#     Given the user is on the home page
#     And the user is not authenticated
#     When the user clicks on the login button
#     Then the page will be scrolled down to the login form inside the homepage

# Scenario: logout page
#     Given the user has typed in the url "/logout"
#     When the user presses enter
#     Then the user will logout from the website

# Scenario: logout in sign in page
#     Given the user is authenticated
#     And the user accessed the sign in page
#     Then the user will see a logout button
#     Then the user will be able to click a logout button to logout