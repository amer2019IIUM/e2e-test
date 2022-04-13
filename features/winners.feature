Feature: Winners

    To show all the winners of the competition
    Scenario: Winners page
        Given the user is on the Winners page
        And the winners are selected manually according to competition name and date
        And there is an active competition
        Then the user will be able to see a list of winners with names, countries, and competition date of the active comepetition