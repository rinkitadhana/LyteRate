function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hi") {
        return "Hello sir, welcome to lyterate! How can i help you?";
    } else if (input == "bye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}