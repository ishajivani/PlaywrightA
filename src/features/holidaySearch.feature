Feature: Holiday Search

  Scenario: Search Uttarakhand package

    Given user opens Holidify website
    When user selects destination "Uttarakhand"
    And user selects trip duration "0 - 3 Nights"
    Then holiday packages should be displayedddd
