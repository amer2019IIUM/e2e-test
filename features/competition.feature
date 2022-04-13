Feature: Competition

  # Scenario: A user can see the competition page with questions
  #   Given the user is authenticated
  #   And the user is on the competition page
  #   And an active competition is published to the users with at least one question with multichoices questions
  #   And the date of the competition is on the day that the user visited the competition
  #   And the user did not give any attempt in the given competition
  #   Then the user will see a list of questions sorted by created date in desc order
  #   Then the user will be able to answer all the questions
  #   Then the user will be able submit the answers

  # Scenario: there is no any competition published at all
  #   Given the user is authenticated
  #   And the user is on the competition page
  #   And there is no any competition published at all
  #   Then the user will be informed that there is no competition available

  # Scenario: no competition today
  #   Given the user is authenticated
  #   And the user is on the competition page
  #   And there is an active competition
  #   And the competition date is smaller than the current date
  #   And the user did not give any attempt in the given competition
  #   Then the user will be informed that there is no competition available today, try tomorrow.

  # Scenario: A user already answered
  #   Given the user is authenticated
  #   And the user is on the competition page
  #   And there is an active competition
  #   And the competition date is the acual date that the user sent his answers
  #   And the user atempted the competition
  #   Then the user will be informed that he cannot attempt the competition again

  # Scenario: submit the form of the questions without missing any multi choice question
  #   Given the user is authenticated
  #   And the user has updated the profile
  #   And the user is on the competition page
  #   And the user visited the competition at the competition day
  #   And the user answered all the multichoice questions and their fatwas
  #   When the user submits the questions form
  #   Then the user will see a successful message for sending his answers

  # Scenario: submit the form of the questions without missing any multi choice question but missed one or more of their fatwa number
  #   Given the user is authenticated
  #   And the user has updated the profile
  #   And the user is on the competition page
  #   And the user visited the competition at the competition day
  #   And the users answered all the multichoice questions
  #   And the user did not input the fatwas number
  #   When the user submits the questions form
  #   Then the user will see a successful message for sending his answers

  # Scenario: user tries to submit the form with incomplete answers of the Multichoices questions
  #   Given the user is authenticated
  #   And the user is on the competition page
  #   And the user visited the competition at the competition day
  #   And the user missed one or more multichoices questions
  #   When the user submits the questions form
  #   Then the user will see an error message as a red color on the unanswered question

  # Scenario: submit the form of the questions with no updated profile
  #   Given the user is authenticated
  #   And the user has not updated the profile
  #   And the user is on the competition page
  #   And the user visited the competition at the competition day
  #   And the user answered all the multichoice questions
  #   When the user submits the questions form
  #   Then the user will see a modal that contains the update profile form with its inputs:name, country, phone no
  #   Then the user will be able to update the profile

  # Scenario: As a user, I want to View the questions PDF file
  #   Given the user is authenticated
  #   And the user is on the competition page
  #   And an active competition is published to the users with at least one question with multichoices questions
  #   And the date of the competition is on the day that the user visited the competition
  #   And the user did not give any attempt in the given competition
  #   And there is a pdf file uploaded
  #   Then the user will see a pdf link of the questions
  #   Then the user will be able to open the pdf link of the questions
  #   Then the user will see the details message

  # Scenario: Start the competition from the home page
  #   Given the user is authenticated
  #   And the user is on the home page
  #   When the user clicks on start competition
  #   Then the user will be redirected to a competition page

  Scenario Outline: User participation details
    Given the user is authenticated
    And the user is on the home page
    Then the user will see the button of starting the Competition
    Then the user will see <circle-widgets>
    Examples:
      | circle-widgets                                                     |
      | data-joins-number-quiz,data-last-result-quiz,data-number-wins-quiz |

# Scenario: access competition but not authenticated
#   Given the user is unauthenticated
#   And the users accessed the competition page
#   Then the user will be redirected to the login page