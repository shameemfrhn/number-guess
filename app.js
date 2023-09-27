document.addEventListener("DOMContentLoaded", function () {
    const minRange = 1;
    const maxRange = 100;
    const randomNumber = getRandomNumber(minRange, maxRange);
    
    const guessInput = document.getElementById("guess-input");
    const guessButton = document.getElementById("guess-button");
    const messageElement = document.getElementById("message");

    guessButton.addEventListener("click", checkGuess);

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function checkGuess() {
        const userGuess = parseInt(guessInput.value);

        if (isNaN(userGuess) || userGuess < minRange || userGuess > maxRange) {
            messageElement.textContent = "Please enter a valid number within the range.";
            return;
        }

        if (userGuess === randomNumber) {
            messageElement.textContent = "Congratulations! You guessed the correct number!";
            guessInput.disabled = true;
            guessButton.disabled = true;
        } else if (userGuess < randomNumber) {
            messageElement.textContent = "Try a higher number.";
        } else {
            messageElement.textContent = "Try a lower number.";
        }
    }
});
