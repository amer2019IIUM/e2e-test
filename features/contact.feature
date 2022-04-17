Feature: Contact page
  Background:
    Given the user is on the contact page

  Scenario: Contact page
    Then the user will see a contact us form

  Scenario: Send a message successfully
    Given the user filled the name input
    And the user filled the email input with correct email only
    And the user filled the subject input
    And the user filled the message input
    When the user submits the form
    Then the user will a successfull message

  Scenario Outline: Send a message with invalid inputs
    Given the user is on the contact page
    And the user violated a "<validity-rule>" rule for "<input-field>" input
    Then the user will see a "<error-message>" message because of "<validity-rule>" rule

    Examples:
      | input-field | validity-rule | error-message              |
      | name        | required      | هذا الحقل مطلوب            |
      | email       | required      | هذا الحقل مطلوب            |
      | email       | email         | البريد الألكتروني غير صحيح |
      | subject     | required      | هذا الحقل مطلوب            |
      | message     | required      | هذا الحقل مطلوب            |

  Scenario Outline: send a message with invalid inputs and submit to the system
    Given the user is on the contact page
    And the user has inputted more than 255 characters in the "<input-field>" input field
    When the user submits the form
    Then the user shall see "<error-message>" that comes from the system
    Examples:

      | input-field | error-message               |
      | name        | The given data was invalid. |
      | email       | The given data was invalid. |
      | subject     | The given data was invalid. |
