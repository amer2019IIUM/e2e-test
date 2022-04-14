Feature: Profile

    To show the details of the page and let the user to update the details

    # Scenario: Profile Page
    #     Given the user is authenticated
    #     And the user is on the profile page
    #     Then the user will see a update profile form
    #     Then the user will be able to update his name
    #     Then the user will be able to update his country
    #     Then the user will be able to update his phone number
    #     Then the user will be able to submit the updated profile form

    # Scenario: Update Profile form successfullly
    #     Given the user is authenticated
    #     And the user is on the profile page
    #     And the user has filled the form validly
    #     When the user submits the update profile form
    #     Then the user will a successfull message of updating profile


    # Scenario Outline: first time the user updates his profile without filling the inputs
    #     Given the user is authenticated
    #     And the user is on the profile page
    #     And the user has not filled "<input-field>" input in the update profile form
    #     When the user submits the update profile form
    #     Then the user will see a "<error-message>" message in "<input-field>" input

    #     Examples:
    #         | input-field | error-message   |
    #         | name        | هذا الحقل مطلوب |
    #         | country     | هذا الحقل مطلوب |
    #         | tel         | هذا الحقل مطلوب |

    Scenario Outline: Update Profile with invalid inputs
        Given the user is authenticated
        And the user is on the profile page
        And the user has not filled "<input-field>" input in the update profile form
        When the user submits the update profile form
        Then the user will see a "<error-message>" message in "<input-field>" input

        Examples:
            | input-field | error-message   |
            | name        | هذا الحقل مطلوب |
            | tel         | هذا الحقل مطلوب |

    # Scenario Outline: Update Profile with with a very large phone number
    #     Given the user is authenticated
    #     And the user is on the profile page
    #     And the user has not filled "<input-field>" input with more than 399 number in update profile form
    #     When the user submits the update profile form
    #     Then the user will see a "<error-message>" message in "<input-field>" input

    #     Examples:
    #         | input-field | error-message   |
    #         | tel         | هذا الحقل مطلوب |

    Scenario Outline: Update Profile with invalid inputs and submit to the system
        Given the user is authenticated
        And the user is on the profile page
        And the user violated a "<validity-rule>" rule
        When the user submits the update profile form
        Then the user shall see a "<error-message>" message that comes from the system in the profile page

        Examples:
            | validity-rule | error-message                                   |
            |        | يجب أن لا يتجاوز طول النّص name 255 حروفٍ/حرفًا |

# Scenario Outline: access profile but not authenticated
#     Given the user is unauthenticated
#     And the user is accessed the profile page
#     Then the user will be redirected to the login page