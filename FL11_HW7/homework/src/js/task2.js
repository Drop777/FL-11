let wannaPlay = confirm('Do you want to play a game?');
let wantContinue = false;
let wannaPlayAgain = true;
if (wannaPlay) {
    let startPosiblePrice = 100;
    let startPriceValue = 100;
    let startAttempt = 3;
    let startRange = 8;
    let countRange = 4;
    let maxRange = startRange;
    let rand = Math.round(Math.random() * maxRange);
    let attempt = startAttempt;
    let totalPrize = 0;
    let possiblePrice = 100;
    let currentPriceValue = 100;
    let currentPrice = currentPriceValue;
    let price = 100;
    let half = 2;
    let congratulationMessage = 'Congratulation, you won! Your prize is: ';
    let contineMessage = 'Do you want to continue?';
    main: do {
        wantAgain: while (wannaPlay) {
            while (wannaPlayAgain) {
                let rez = +prompt('Choose a roulette pocket number from 0 to ' + maxRange +
                    '\n Attempts left: ' + attempt + '\n Total prize: ' + totalPrize + '$' +
                    '\n Possible prize on current attempt: ' + currentPrice + '$');

                if (rez === rand) {
                    totalPrize += currentPrice;
                    alert(congratulationMessage + totalPrize + '$.');
                    wantContinue = confirm(contineMessage);
                    if (wantContinue) {
                        break wantAgain;
                    } else {
                        wantContinue = confirm(congratulationMessage + totalPrize + '$.\n' + contineMessage);
                        if (wantContinue) {
                            break wantAgain;
                        } else {
                            break main;
                        }
                    }

                }
                if (attempt <= 1) {
                    alert('Thank you for your participation. Your prize is: ' + totalPrize + '$');
                    wantContinue = false;
                    wannaPlayAgain = confirm('Do you want to play again?');
                    if (wannaPlayAgain) {
                        attempt = startAttempt;
                        currentPrice = currentPriceValue;
                        price = startPriceValue;
                        possiblePrice = startPosiblePrice;
                        totalPrize = 0;
                        maxRange = startRange;
                        rand = Math.round(Math.random() * maxRange);
                        break;
                    } else {
                        break main;
                    }
                }
                attempt--;
                currentPrice /= half;
                possiblePrice = currentPrice;
            }
        }



        while (wantContinue) {
            maxRange += countRange;
            rand = Math.round(Math.random() * maxRange);
            price *= half;
            possiblePrice = price;
            currentPrice = possiblePrice;
            attempt = startAttempt;
            break;
        }
    } while (wantContinue);


} else {
    alert('You did not become a billionaire, but can.')
}