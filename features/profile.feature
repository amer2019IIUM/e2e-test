Feature: Profile

    To show the details of the page and let the user to update the details

    Scenario: Profile Page
        Given the user is authenticated
        And the user is on the profile page
        Then the user will see a update profile form
        Then the user will be able to update his name
        Then the user will be able to update his country
        Then the user will be able to update his phone number
        Then the user will be able to submit the updated profile form

    # Scenario: Update Profile form successfullly
    #     Given the user is authenticated
    #     And the user is on the profile page
    #     And the user has filled the form validly
    #     When the user submits the update profile form
    #     Then the user will a successfull message of updating profile


    # Scenario: Update Profile with invalid inputs
    #     Given the user is authenticated
    #     And the user is on the profile page
    #     And the user has not filled "<input-field>" input in the update profile form
    #     When the user submits the update profile form
    #     Then the user will see a "<error-message>" message on the update profile form

    #     Examples:
    #         | input-field | error-message   |
    #         |             | هذا الحقل مطلوب |
    #         |             | هذا الحقل مطلوب |

    # Scenario: Update Profile with invalid inputs and submit to the system
    #     Given the user is authenticated
    #     And the user is on the profile page
    #     And the user violated a "<validity-rule>" rule
    #     When the user submits the update profile form
    #     Then the user will see a "<error-message>" that comes from the system

    #     Examples:
    #         | validity-rule | error-message                                   |
    #         |               | يجب أن لا يتجاوز طول النّص name 255 حروفٍ/حرفًا |

    # Scenario: access profile but not authenticated
    #     Given the user is unauthenticated
    #     And the user is accessed the profile page
    #     Then the user will be redirected to the login page