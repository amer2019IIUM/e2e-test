Feature: Competition

  # Scenario: A user can see the competition page with questions
  #   Given the user is authenticated
  #   And the user is on the competition page
  #   And there is a competition has been set up in the competition settings in the system
  #   And the date of the competition is on the day that the user visited the competition
  #   And the user did not give any attempt in the given competition
  #   Then the user will see a list of questions sorted by created date in desc order
  #   Then the user will be able to answer all the questions
  #   Then the user will be able submit the answers

  # Scenario: submit the form of the questions without missing any multi choice question
  #   Given the user is authenticated
  #   And the user has updated the profile
  #   And the user is on the competition page
  #   And there is a competition has been set up in the competition settings in the system
  #   And the user visited the competition at the competition day
  #   And the user answered all the multichoice questions
  #   When the user submits the questions form
  #   Then the user will see a successful message for sending his answers

  # Scenario: submit the form of the questions without missing any multi choice question but missed one or more of their fatwa number
  #   Given the user is authenticated
  #   And the user has updated the profile
  #   And the user is on the competition page
  #   And there is a competition has been set up in the competition settings in the system
  #   And the user visited the competition at the competition day
  #   And the user answered all the multichoice questions
  #   And the user did not input the fatwas number
  #   When the user submits the questions form
  #   Then the user will see a successful message for sending his answers

  # Scenario: user tries to submit the form with incomplete answers of the Multichoices questions
  #   Given the user is authenticated
  #   And the user is on the competition page
  #   And there is a competition has been set up in the competition settings in the system
  #   And the user visited the competition at the competition day
  #   And the user missed one or more multichoices questions
  #   When the user submits the questions form
  #   Then the question will be highlighted to let the user know that question not answered yet

  # Scenario: submit the form of the questions with no updated profile
  #   Given the user is authenticated
  #   And the user is on the competition page
  #   And there is a competition has been set up in the competition settings in the system
  #   And the user has not updated the profile
  #   And the user visited the competition at the competition day
  #   And the user answered all the multichoice questions
  #   When the user submits the questions form
  #   Then the user will see a modal that contains an update profile form
  #   Then the user will be able to update the profile


  # Scenario: As a user, I want to View the questions PDF file
  #   Given the user is authenticated
  #   And the user is on the competition page
  #   And there is a competition has been set up in the competition settings in the system
  #   And the date of the competition is on the day that the user visited the competition
  #   And the user did not give any attempt in the given competition
  #   And there is a pdf file uploaded
  #   Then the user will see a pdf link of the questions
  #   Then the user will be able to open the pdf link of the questions
  #   Then the user will see the details message


  # Scenario: there is no competition has been set up in the competition settings in the system
  #   Given the user is authenticated
  #   And the user is on the competition page
  #   And there is no competition has been set up in the competition settings in the system
  #   Then the user will be informed that "عذراً، لا يوجد مسابقة في الوقت الحالي."

  # Scenario: the competition date has been set up for a past date
  #   Given the user is authenticated
  #   And the user is on the competition page
  #   And there is a competition has been set up in the competition settings in the system
  #   And the competition date is smaller than the current date
  #   Then the user will be informed that "لا يوجد مسابقة في اليوم الحالي، حاول مرة أخرى غداً."

  # Scenario: the competition date has been set up for a future date
  #   Given the user is authenticated
  #   And the user is on the competition page
  #   And there is a competition has been set up in the competition settings in the system
  #   And the competition date is greater than the current date
  #   Then the user will be informed that "عذراً، المسابقة لم تبدأ بعد، ستبدأ بتاريخ"

  # Scenario: A user already answered
  #   Given the user is authenticated
  #   And the user is on the competition page
  #   And there is a competition has been set up in the competition settings in the system
  #   And the competition date is the acual date that the user sent his answers
  #   And the user attempted the competition
  #   Then the user will be informed that "لقد قمت بالإجابة على مسابقة اليوم، حاول مرة أخرى غداً."

  Scenario: Start the competition from the home page
    Given the user is authenticated
    And the user is on the home page
    When the user clicks on start competition
    Then the user will be redirected to a competition page

  Scenario: User participation details
    Given the user is authenticated
    And the user is on the home page
    Then the user will see the button of starting the Competition
    Then the user will see his number of wins
    Then the user will see his last result
    Then the user will see his number of attempts

  Scenario: access competition but not authenticated
    Given the user is not authenticated
    And the users accessed the competition page
    Then the user will be redirected to the login page