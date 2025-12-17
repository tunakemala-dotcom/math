function checkEnter(event, inputId, correctAnswer, feedbackId) {
    // Only works when ENTER key is pressed
    if (event.key === "Enter") {
        
        var input = document.getElementById(inputId);
        var feedback = document.getElementById(feedbackId);
        var userVal = input.value.trim();
        
        // Find the "Solution" (details) element right after the input container
        var container = input.parentElement;
        var solutionDetails = container.nextElementSibling;

        if (userVal == correctAnswer) {
            // IF CORRECT
            feedback.innerHTML = "✅ <b>Correct!</b> Great job.";
            feedback.style.color = "#00c853"; // Green
            feedback.style.fontWeight = "bold";
            
        } else {
            // IF WRONG
            feedback.innerHTML = "❌ <b>Incorrect.</b> The solution has opened below 👇";
            feedback.style.color = "#d50000"; // Red
            
            // Automatically open the hidden solution
            if (solutionDetails && solutionDetails.tagName === 'DETAILS') {
                solutionDetails.open = true;
            }
        }
    }
}