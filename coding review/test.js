// Function to process user input
function processInput() {
    const userInput = document.getElementById('userInput').value;
  
    // Validate user input
    if (!isValidNumber(userInput)) {
      displayOutput('Invalid input. Please enter a valid number.');
      return;
    }
  
    // Avoid hardcoded secrets (e.g., API keys, passwords)
    const secretKey = getSecretKey();
    
    // Perform some secure processing (for demonstration purposes)
    const result = secureProcessing(userInput, secretKey);
  
    // Display the result
    displayOutput(`Result: ${result}`);
  }
  
  // Function to validate user input as a number
  function isValidNumber(input) {
    return !isNaN(input) && isFinite(input);
  }
  
  // Function to get a secret key (simulate avoiding hardcoded secrets)
  function getSecretKey() {
    // In a real-world scenario, this could be retrieved securely from a server.
    return 'mySecretKey';
  }
  
  // Function for secure processing (for demonstration purposes)
  function secureProcessing(input, secretKey) {
    // In a real-world scenario, this could involve more secure processing.
    return input * 2 + secretKey.length;
  }
  
  // Function to display output
  function displayOutput(message) {
    document.getElementById('output').innerText = message;
  }