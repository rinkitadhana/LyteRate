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
    } else if (input == "tell me about dharampal"){
        return "Introducing our innovative chatbot, DHARAMPAL! Designed with a primary focus on assisting students, DHARAMPAL is equipped to address a wide range of queries, whether they pertain to coding or website-related concerns. With a deep understanding of various programming languages and web development concepts, DHARAMPAL is your go-to resource for resolving doubts and providing comprehensive solutions.";
    }
     else {
        return "Try asking something else!";
    }
}