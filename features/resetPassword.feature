Feature: Retset password

    Resetting the password

    # # # # # # # # # # # # # # # FORGOT PASSWORD # # # # # # # # # # # # # # #

    # Scenario: Forget-password page
    #     Given the user is authenticated
    #     And the user is on the forgot-password page
    #     Then the user will see a forgot-password form

    # Scenario: Send a email to reset password
    #     Given the user is not authenticated
    #     And the user accessed forgot-password page
    #     And the user filled the email input with the correct email that is existing the system
    #     When the user submits the form
    #     Then the user will see a successful message
    #     Then the user should receive a message to his email with a link to reset the password

    # Scenario: input an email that is not in the system
    #     Given the user is not authenticated
    #     And the user accessed forgot-password page
    #     And the user has filled his email input that is not exist in the system
    #     When the user submits the form
    #     Then the user will be informed that the email is not exist

    # Scenario: Invalid email
    #     Given the user is authenticated
    #     Given the user is on the forgot-password page
    #     And  the user violated a "<validity-rule>" rule for "<input-field>" input
    #     Then the user will see a "<error-message>" message because of "<validity-rule>" rule
    #     Examples:
    #         | input-field | validity-rule | error-message              |
    #         | email       | required      | هذا الحقل مطلوب            |
    #         | email       | email         | البريد الألكتروني غير صحيح |

    # Scenario: The email has been sent
    #     Given the user clicked on the resetting link
    #     Then the user will be redirected to the new password page


    # # # # # # # # # # # # # # # RETTING PASSWORD # # # # # # # # # # # # # # #

    # Scenario: New password  page
    #     Given the user is on the new password page
    #     Then the user will see a new password form


    # Scenario: Reset password successfully
    #     Given the user is not authenticated
    #     And the user is on the new password page
    #     And the user filled the password input with correct format password
    #     And the user filled the confirmation password input that match the previous password
    #     When the user submits the form
    #     Then the user will see a successful message
    #     Then the user will see a button
    #     Then the user will be able to click on a button be redirected to the sign in page

    # Scenario Outline: Invalid new password inputs
    #     And the user is on the new password page
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


    Scenario: token used before
        Given the user is not authenticated
        And the user is on the new password page with used token
        And the user filled the password input with correct format password
        And the user filled the confirmation password input that match the previous password
        When the user submits the form
        Then the user will be informed that the token is invalid

    Scenario: wrong token
        Given the user is not authenticated
        And the user is on the new password page with invalid token
        And the user filled the password input with correct format password
        And the user filled the confirmation password input that match the previous password
        When the user submits the form
        Then the user will be informed that the token is invalid

    Scenario: authenticated user resets the password
        Given the user is authenticated
        And the user is on the new password page
        And the user filled the password input with correct format password
        And the user filled the confirmation password input that match the previous password
        When the user submits the form
        Then the user will see a error message of resetting a password