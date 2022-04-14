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

  Scenario Outline: Send a message with invalid inputs
    Given the user has filled "<input-field>" input in the contact form
    Then the user will see a "<error-message>" message in contact page

    Examples:
      | input-field                | error-message   |
      | name,email,subject,message | هذا الحقل مطلوب |

  # Scenario: Send a message with invalid email
  #   Given the user has filled an invalid email input in the contact form
  #   Then the user will see a error message of incorrect email format in contact form