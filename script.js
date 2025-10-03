// waiting for the page to load
document.addEventListener('DOMContentLoaded', function() {
    // get all the choice items
    const choiceItems = document.querySelectorAll('.choice-item');
    const computerImage = document.getElementById('computer-image');
    const resultText = document.getElementById('result-text');
    
    // array of images for computer choices
    const computerChoices = [
        { choice: 'rock', image: '/img/rock.PNG' },
        { choice: 'paper', image: '/img/paper.PNG' },
        { choice: 'scissors', image: '/img/scissors.PNG' }
    ];
    
    // add click event to each choice
    choiceItems.forEach(item => {
        item.addEventListener('click', function() {
            // remove 'selected' class from all user choices first
            choiceItems.forEach(choice => {
                choice.classList.remove('selected');
            });
            
            // add 'selected' class to clicked choice
            this.classList.add('selected');
            
            // get user's choice
            const userChoice = this.getAttribute('data-choice');
            
            // computer makes random choice
            const computerChoice = getComputerChoice();
            
            // display computer's choice by replacing the image
            displayComputerChoice(computerChoice);
            
            // determine winner
            determineWinner(userChoice, computerChoice.choice);
        });
    });
    
    // function for computer to make random choice
    function getComputerChoice() {
        const randomIndex = Math.floor(Math.random() * computerChoices.length);
        return computerChoices[randomIndex];
    }
    
    // function to display computer's choice by replacing image
    function displayComputerChoice(computerChoice) {
        // Remove selected class first
        computerImage.classList.remove('selected');
        
        // delay 3 seconds to show the selection
        setTimeout(() => {
            computerImage.src = computerChoice.image;
            computerImage.alt = `${computerChoice.choice} Image`;
        
        }, 3000);
    }
    
    // function to determine winner via tie, win, or lose
    function determineWinner(user, computer) {
        setTimeout(() => {
        if (user === computer) {
            resultText.textContent = "It's a tie!";
            resultText.style.color = "orange";
        } else if (
            (user === 'rock' && computer === 'scissors') ||
            (user === 'paper' && computer === 'rock') ||
            (user === 'scissors' && computer === 'paper')
        ) {
            resultText.textContent = `You win! ${user} beats ${computer}`;
            resultText.style.color = "green";
        } else {
            resultText.textContent = `Computer wins! ${computer} beats ${user}`;
            resultText.style.color = "red";
        }
    }, 3000);
    }
});