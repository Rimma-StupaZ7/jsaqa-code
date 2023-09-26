Feature: Ordering tickets
    Scenario: Order a standart ticket
        Given user is on "/client/index.php" page
        When user select date "body > nav > a:nth-child(2)"
        When user select movie "body > main > section:nth-child(1) > div:nth-child(2) > ul > li > a"
        When user choose a seat "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(5) > span:nth-child(6)"
        When user orders ticket "body > main > section > button"
        Then user sees button "Получить код бронирования"

    Scenario: Order a VIP ticket
        Given user is on "/client/index.php" page
        When user select date "body > nav > a:nth-child(2)"
        When user select movie "body > main > section:nth-child(1) > div:nth-child(3) > ul > li > a"
        When user choose a seat "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(7) > span:nth-child(6)"
        When user orders ticket "body > main > section > button"
        Then user sees button "Получить код бронирования"  

    Scenario: Disable order ticket
        Given user is on "/client/index.php" page
        When user select date "body > nav > a:nth-child(2)"
        When user select movie "body > main > section:nth-child(1) > div:nth-child(2) > ul > li > a"
        When user choose a seat "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(1) > span.buying-scheme__chair.buying-scheme__chair_standart.buying-scheme__chair_taken"
        Then user sees inactive button "Забронировать"
              