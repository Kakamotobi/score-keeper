//// Score Keeper ////

// Select banner
const banner = document.querySelector("#banner");

// Select Players
const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");

// Playing to
// Need to compare playingTo value with p1Score and p2Score.
let playingTo = 0;
let p1Score = 0;
let p2Score = 0;
// Need to keep track of whether p1 or p2 has reached playingTo value (won the game)
// and prevent further point increases.
// So, create a boolean variable to compare.
let isGameOver = false;

// Selecting number to play to
const selectPlayingTo = document.querySelector("#selectPlayingTo");

// When playing to value is selected, reset game and save it in playingTo value.
selectPlayingTo.addEventListener("change", function (evt) {
    // Need to parseInt() because this.value is a string.
    playingTo = parseInt(this.value);
    // Reset
    isGameOver = false;
    p1Score = 0;
    p1ScoreBoard.innerText = p1Score;
    p2Score = 0;
    p2ScoreBoard.innerText = p2Score;
    p1.classList.remove("winner", "loser");
    p1ScoreBoard.classList.remove("winner", "loser");
    p2.classList.remove("winner", "loser");
    p2ScoreBoard.classList.remove("winner", "loser");
    banner.innerText = "Score Keeper";
});

// ---------- //

/// Player 1
// Select P1 buttons
const p1Plus = document.querySelector("#p1Plus");
const p1Minus = document.querySelector("#p1Minus");
// Select P1 scoreboard
const p1ScoreBoard = document.querySelector("#p1ScoreBoard");

// p1Plus button
p1Plus.addEventListener("click", function () {
    if (!isGameOver) {
        // If game is not over, add point.
        p1Score++;
        // If player reached playingTo value, game over.
        if (p1Score === playingTo) {
            // When clicked again, if(!isGameOver) doesn't run anymore for both players.
            isGameOver = true;
            // When p1 wins, add the .winner class defined in style.css
            p1.classList.add("winner");
            p1ScoreBoard.classList.add("winner");
            p2.classList.add("loser");
            p2ScoreBoard.classList.add("loser");
            // Change header banner to Player 1 Wins!
            banner.innerText = `${p1.innerText} Wins!`;
        }
        p1ScoreBoard.innerText = p1Score;
    }
});
// p1Minus button
p1Minus.addEventListener("click", function () {
    // Only able to do this if p1Score or p2Score !== playingTo
    if (p1Score && p2Score !== playingTo) {
        // Even when p1 reached playingTo value, deduction is possible and the game is back on.
        isGameOver = false;
        p1Score--;
        p1ScoreBoard.innerText = p1Score;
        p1.classList.remove("winner");
        p1ScoreBoard.classList.remove("winner");
        p2.classList.remove("loser");
        p2ScoreBoard.classList.remove("loser");
        banner.innerText = "Score Keeper";
        if (p1Score === playingTo) {
            isGameOver = true;
        }
    }
});
// ---------- //

/// Player 2
// Select P2 buttons
const p2Plus = document.querySelector("#p2Plus");
const p2Minus = document.querySelector("#p2Minus");
// Select P2 scoreboard
const p2ScoreBoard = document.querySelector("#p2ScoreBoard");

// p2Plus button
p2Plus.addEventListener("click", function () {
    if (!isGameOver) {
        p2Score++;
        if (p2Score === playingTo) {
            isGameOver = true;
            p2.classList.add("winner");
            p2ScoreBoard.classList.add("winner");
            p1.classList.add("loser");
            p1ScoreBoard.classList.add("loser");
            banner.innerText = `${p2.innerText} Wins!`;
        }
        p2ScoreBoard.innerText = p2Score;
    }
});
// p2Minus button
p2Minus.addEventListener("click", function () {
    if (p2Score && p1Score !== playingTo) {
        isGameOver = false;
        p2Score--;
        p2ScoreBoard.innerText = p2Score;
        p2.classList.remove("winner");
        p2ScoreBoard.classList.remove("winner");
        p1.classList.remove("loser");
        p1ScoreBoard.classList.remove("loser");
        banner.innerText = "Score Keeper";
        if (p2Score === playingTo) {
            isGameOver = true;
        }
    }
});

// ---------- //

/// Reset Scores
// Select reset button
const reset = document.querySelector("#reset");
// Reset score to 0
reset.addEventListener("click", function () {
    isGameOver = false;
    p1Score = 0;
    p1ScoreBoard.innerText = p1Score;
    p2Score = 0;
    p2ScoreBoard.innerText = p2Score;
    selectPlayingTo.value = "";
    p1.classList.remove("winner", "loser");
    p1ScoreBoard.classList.remove("winner", "loser");
    p2.classList.remove("winner", "loser");
    p2ScoreBoard.classList.remove("winner", "loser");
    banner.innerText = "Score Keeper";
});

// ---------- //

/// Player Names
// Select inputs
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

player1.addEventListener("input", function () {
    p1.innerText = player1.value;
});
player2.addEventListener("input", function () {
    p2.innerText = player2.value;
});

// ---------- //

// Make functions for:
// 1) when player 1 wins
// 2) when player 2 wins
// 3) reset
