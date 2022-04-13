Feature: Retset password

    Resetting the password

    # Scenario: Forget-password page
    #     Given the user is authenticated
    #     And the user is on the forgot-password page
    #     Then the user will see a forgot-password form
    #     Then the user will be able to input his email
    #     Then the user will be able to submit the forgot password form

    # Scenario: Send a email to reset password
    #     Given the user is unauthenticated
    #     And the user accessed forgot-password page
    #     And the user has filled the forgot-password form validly
    #     When the user submits the reset password form
    #     Then the user will see a successful message of sending a reset link to the email
    #     Then the user should receive a message to his email with a link to reset the password

    # Scenario: input an email that is not in the system
    #     Given the user is unauthenticated
    #     And the user accessed forgot-password page
    #     And the user has filled not his email input that is not exist in the system
    #     When the user submits the reset password form
    #     Then the user will be informed that the email is not exist

    # Scenario: Invalid email
    #     Given the user is authenticated
    #     And the user is on the forgot-password page
    #     And the user has filled "<input-field>" input in the reset password form
    #     Then the user will see a "<error-message>" message in forgot password page
    #     Examples:
    #         | input-field | error-message   |
    #         | email       | هذا الحقل مطلوب |

    # Scenario: The email has been sent
    #     Given the user has inputted the resetting link in the url
    #     When the user presses enter
    #     Then the user will be redirected to the new password page

    # Scenario: New password  page
    #     Given the user is on the new password page
    #     Then the user will see a new password form
    #     Then the user will be only able to read the email input
    #     Then the user will be able to input his new password
    #     Then the user will be able to reinput his new password for confirmation
    #     Then the user will be able to submit the new password form

    # Scenario: Reset password successfully
    #     Given the user is unauthenticated
    #     And the user is on the new password page
    #     And the user has filled the new password form validly
    #     When the user submits the new password form
    #     Then the user will see a message of success
    #     Then the user will see a button
    #     Then the user will be able to click on a button be redirected to the sign in page

    Scenario Outline: Invalid new password inputs
        Given the user is on the new password page
        And the user has filled "<input-field>" input in the reset password page
        Then the user will see a "<error-message>" message in the reset password page
        Examples:
            | input-field                    | error-message   |
            | password,password_confirmation | هذا الحقل مطلوب |

    Scenario: token used before
        Given the user is unauthenticated
        And the user is on the new password page with used token
        And the user has filled the new password form validly
        When the user submits the reset password form
        Then the user will be informed that the token is invalid

    Scenario: wrong token
        Given the user is unauthenticated
        And the user is on the new password page with invalid token
        And the user has filled the new password form validly
        When the user submits the reset password form
        Then the user will be informed that the token is invalid

    Scenario: authenticated user resets the password
        Given the user is authenticated
        And the user is on the new password page
        And the user has filled the new password form validly
        When the user submits the reset password form
        Then the user will see a error message of resetting a password