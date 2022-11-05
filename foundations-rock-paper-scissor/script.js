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
function playRound(playerSelection, computerSelection)
{
    playerSelection = capitalize(playerSelection);

    if (playerSelection == computerSelection)
    {
        // console.log("It's a draw!")

        return "draw";
    }

    if(playerSelection == "Rock")
    {
        if(computerSelection == "Paper")
        {
            return "loss";
        }

        // if computerselection == Scissor
        return "win";
    }

    if(playerSelection == "Paper")
    {
        if(computerSelection == "Scissor")
        {
            return "loss";
        }

        // if computerselection == Rock
        return "win";
    }

    if(playerSelection == "Scissor")
    {
        if(computerSelection == "Rock")
        {
            return "loss";
        }

        // if computerselection == Paper
        return "win";
    }

}

function capitalize(string)
{
    string = string[0].toUpperCase() + string.substring(1).toLowerCase();
    
    return string;
}