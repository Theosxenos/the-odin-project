function getComputerChoice()
{
    // Generate a random integer that's >= 0 and <= 2
    let randomnumber = Math.floor(Math.random() * 3);

    let rpsarray = ['Rock', 'Paper', 'Scissor'];

    return rpsarray[randomnumber];
}