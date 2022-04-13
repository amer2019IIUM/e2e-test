Feature: Right Answers

    To show all the right answers of the competition based on each date.
    Background:
        Given the user is on the right answers page
    Scenario: Show Right answers
        Given there is an active competition
        And the current date is greater than the active competition
        Then the user will see a select input of competition days
        Then the user will see the active competition answers before the current date
        Then the user will able to choose any day of the active competition that is before the current date
        Then the user will see the right answers the competition of the selected date

    Scenario: Filter the answers
        Given the user clicked on a select input
        And there is an active competition
        When the user selects the day of the competition
        Then the users will see the right answers of the selected day

    Scenario: No Right answers because no competition
        Given there is no an active competition
        Then the user will see a select input with empty data
        Then the user will not see the days of the competitions
        Then the user will not see the right answers the competition

    Scenario: No Right answers because not started yet
        Given the active competition date is greater than the current date
        Then the user will see a select input with empty data
        Then the user will not see the days of the competitions
        Then the user will not see the right answers the competition

