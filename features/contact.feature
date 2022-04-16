Feature: Contact page
  Background:
    Given the user is on the contact page

  Scenario: Contact page
    Then the user will see a contact us form
    Then the user will be able to input his full name
    Then the user will be able to input his email
    Then the user will be able to input the subject of his message
    Then the user will be able to input the message
    Then the user will be able to submit the form

  Scenario: Send a message successfully
    Given the user has filled the contact us form validly
    When the user submits the contact form
    Then the user shall see a successful sending message

  Scenario Outline: empty input
    Given the user has left "<input-field>" input in the contact form empty
    Then the user will see a "<error-message>" message in contact page

    Examples:
      | input-field | error-message   |
      | name        | هذا الحقل مطلوب |
      | email       | هذا الحقل مطلوب |
      | subject     | هذا الحقل مطلوب |
      | message     | هذا الحقل مطلوب |

  Scenario: Send a message with invalid email
    Given the user has filled an invalid email input
    Then the user will see a error message of incorrect email format