// The function returns Rock, Paper or Scissor as a choice of the "computer"
function getComputerChoice()
{
    // Generate a random integer that's >= 0 and <= 2
    let randomnumber = Math.floor(Math.random() * 3);
    
    // The array with the computer choices
    let rpsarray = ['Rock', 'Paper', 'Scissor'];

    return rpsarray[randomnumber];
}

// Plays one round of 'Rock, Paper, Scissor'
// Return 1 if won, 0 if draw, -1 if lost
function playRound(playerSelection, computerSelection)
{ 
    // If both choices are equal to each other it's a draw
    if (playerSelection == computerSelection)
    {
            return 0;
    }

    if(playerSelection == "Rock")
    {
        if(computerSelection == "Paper")
        {
            return -1;
        }

        // if computerselection == Scissor
        return 1;
    }

    if(playerSelection == "Paper")
    {
        if(computerSelection == "Scissor")
        {
            return -1;
        }

        // if computerselection == Rock
        return 1;
    }

    if(playerSelection == "Scissor")
    {
        if(computerSelection == "Rock")
        {
            return -1;
        }

        // if computerselection == Paper
        return 1;
    }

}

// The function that starts the game
function game()
{
    let score = 0;

    for (let i = 1; i <= 5; i++)
    {       
        console.log(`Round ${i} start!`);

        // Ask the player fo their choice
        const playerSelection = capitalize(prompt("Choose Rock, Paper or Scissor"));
        // Same with pc
        const computerSelection = getComputerChoice();    
        
        const roundresult = playRound(playerSelection, computerSelection);
        // add round to the total game score
        score += roundresult;

        let roundresultmessage = "";

        switch (roundresult)
        {
            case 1:
                roundresultmessage = `${playerSelection} vs ${computerSelection}. You lost the round!`;
                break;
            case 0:
                roundresultmessage = `${playerSelection} vs ${computerSelection}. The round is a draw!`;
                break;
            case -1:
                roundresultmessage = `${playerSelection} vs ${computerSelection}. You won the round!`;
                break;
        }

        console.log(roundresultmessage);

    }

    let gameresultmessage = "";

    console.log("The rounds are over:")

    if (score > 0)
    {
        gameresultmessage = "Congratulations! You won the game!";
    }
    else if(score == 0)
    {
        gameresultmessage = "The game is a draw!";
    }
    else if(score < 0)
    {
        gameresultmessage = "You lost the game!";
    }
    else
    {
        gameresultmessage = "wat";
    }

    console.log(gameresultmessage);

}

// This functions capitalizes a string
function capitalize(string)
{
    string = string[0].toUpperCase() + string.substring(1).toLowerCase();
    
    return string;
}