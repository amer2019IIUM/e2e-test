Feature: Profile

    To show the details of the page and let the user to update the details

    Scenario: Profile Page
        Given the user is authenticated
        And the user is on the profile page
        Then the user will see a update profile form

    Scenario: Update Profile form successfullly
        Given the user is authenticated
        And the user is on the profile page
        And the user filled the name input
        And the user filled the country input
        And the user filled the phone number with numbers only
        When the user submits the form
        Then the user will see a successful message


    Scenario Outline: Update Profile form with invalid inputs
        Given the user is authenticated
        And the user is on the profile page
        And the user violated a "<validity-rule>" rule for "<input-field>" input
        Then the user will see a "<error-message>" message because of "<validity-rule>" rule

        Examples:
            | input-field | validity-rule | error-message   |
            | name        | required      | هذا الحقل مطلوب |
            | country     | required      | هذا الحقل مطلوب |
            | tel         | required      | هذا الحقل مطلوب |
            | tel         | max 399       | هذا الحقل مطلوب |

    Scenario Outline: Update Profile with invalid input of the name and submit to the system
        Given the user is authenticated
        And the user is on the profile page
        And the user has inputted more than one 255 characters in the name input field
        When the user submits the update profile form
        Then the user shall see a error message of max 255 characters that comes from the system


# Scenario: access profile but not authenticated
#     Given the user is not authenticated
#     And the user is accessed the profile page
#     Then the user will be redirected to the login page