Feature: Winners

    To show all the winners of the competition
    Scenario: Winners page
        Given the user is on the Winners page
        And there is a competition has been set up in the competition settings in the system
        And there is some competition has been expired from the starting date of the competition
        And the winners are selected manually according to competition name and date
        Then the user will be able to see a list of winners with names, countries, and competition date of the comepetition


        