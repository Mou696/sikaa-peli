/*
"use strict";

const player0E1 = document.querySelector(".player_0");
const player1E1 = document.querySelector(".player_1");

const score0E1 = document.getElementById("score_0");
const score1E1 = document.getElementById("score_1");
const diceE1 = document.querySelector(".dice");

const current0E1 = document.getElementById("current_0");
const current1E1 = document.getElementById("current_1");

//btns
const btnRoll = document.querySelector(".btn_roll");
const btnHold = document.querySelector(".btn_hold");
const btnNew = document.querySelector(".btn_new");

let scores, currentScore, activePlayer, playGame;

//initialize fun
const init = function () {
    score0E1.textContent = 0;
    score1E1.textContent = 0;
    diceE1.classList.add("hidden");

    scores = [0, 0];
    activePlayer = 0;
    currentScore = 0;
    playGame = true;

    current0E1.textContent = 0;
    current1E1.textContent = 0;

    diceE1.classList.add("hidden");
    player0E1.classList.remove("player_winner");
    player1E1.classList.remove("player_winner");
    player0E1.classList.add("player_active");
    player1E1.classList.add("player_active");
};

init();

//switch the player
const switchPlayer = function () {
    document.getElementById(`current_${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0E1.classList.toggle("player_active");
    player1E1.classList.toggle("player_active");
};

btnRoll.addEventListener("click", function () {
    if (playGame) {
        diceE1.classList.remove("hidden");

        //1. generate the random number
        const dice = Math.floor(Math.random() * 6) + 1;

        //2. display random image
        diceE1.src = `./img/dice-${dice}.jpg`;

        //3. check for rolled 1
        if (dice !== 1) {
            //display the score
            currentScore += dice;
            //currentE01.textcontent = currentScore;
            document.getElementById(`current_${activePlayer}`).textContent =
                currentScore;
        }   else {
                // switch the player
                switchPlayer();
        }
    }
});

// btn hold event
btnHold.addEventListener("click", function () {
    if (playGame) {
        scores[activePlayer] += currentScore;
        document.getElementById(`score_${activePlayer}`).textContent =
            scores[activePlayer];
        
        if (scores[activePlayer] >= 20) {
            playGame = false;
            document
                .querySelector(`.player_${activePlayer}`)
                .classList.add("player_winner");
            document
                .querySelector(`.player_${activePlayer}`)
                .classList.add("player_active");
            diceE1.classList.add("hidden");
        }   else {
            //switchPlayer
            switchPlayer();
        }
    }
});

btnNew.addEventListener(`click`, init);
*/

"use strict";

const player0E1 = document.querySelector(".player_0");
const player1E1 = document.querySelector(".player_1");

const score0E1 = document.getElementById("score_0");
const score1E1 = document.getElementById("score_1");
const diceE1 = document.querySelector(".dice");

const current0E1 = document.getElementById("current_0");
const current1E1 = document.getElementById("current_1");

//btns
const btnRoll = document.querySelector(".btn_roll");
const btnHold = document.querySelector(".btn_hold");
const btnNew = document.querySelector(".btn_new");

let scores, currentScore, activePlayer, playGame;

//initialize fun
const init = function () {
    score0E1.textContent = 0;
    score1E1.textContent = 0;
    diceE1.classList.add("hidden");

    scores = [0, 0];
    activePlayer = 0;
    currentScore = 0;
    playGame = true;

    current0E1.textContent = 0;
    current1E1.textContent = 0;

    diceE1.classList.add("hidden");
    player0E1.classList.remove("player_winner", "player_0_active");
    player1E1.classList.remove("player_winner", "player_1_active");
    player0E1.classList.add("player_0_active");
    player1E1.classList.remove("player_active");
};

init();

//switch the player
const switchPlayer = function () {
    document.getElementById(`current_${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0E1.classList.toggle("player_0_active");
    player1E1.classList.toggle("player_1_active");
};

btnRoll.addEventListener("click", function () {
    if (playGame) {
        diceE1.classList.remove("hidden");

        //1. generate the random number
        const dice = Math.floor(Math.random() * 6) + 1;

        //2. display random image
        diceE1.src = `./img/dice-${dice}.jpg`;

        //3. check for rolled 1
        if (dice !== 1) {
            //display the score
            currentScore += dice;
            document.getElementById(`current_${activePlayer}`).textContent = currentScore;
        } else {
            // switch the player
            switchPlayer();
        }
    }
});

// btn hold event
btnHold.addEventListener("click", function () {
    if (playGame) {
        scores[activePlayer] += currentScore;
        document.getElementById(`score_${activePlayer}`).textContent = scores[activePlayer];
        
        if (scores[activePlayer] >= 20) {
            playGame = false;
            document.querySelector(`.player_${activePlayer}`).classList.add("player_winner");
            document.querySelector(`.player_${activePlayer}`).classList.remove("player_0_active", "player_1_active");
            diceE1.classList.add("hidden");
        } else {
            //switchPlayer
            switchPlayer();
        }
    }
});

btnNew.addEventListener("click", init);
