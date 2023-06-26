// Variables to store the current input, operator, and operands.
let currentInput = "";
let operator = null;
let operand1 = null;
let operand2 = null;

// Function to handle when a number button is pressed.
// Appends the number to the current input.
function press(num) {
  currentInput += num.toString();
  updateDisplay(currentInput); // Update the display with the current input.
}

// Function to handle when an operator button is pressed.
// Stores the selected operator and the current input as the first operand.
function setOP(op) {
  if (!operator && currentInput) {
    operator = op;
    operand1 = parseFloat(currentInput);
    currentInput = ""; // Clear the current input for the second operand.
  }
}

// Function to handle when the clear button is pressed.
// Resets the current input, operator, and operands.
function clr() {
  currentInput = "";
  operator = null;
  operand1 = null;
  operand2 = null;
  updateDisplay(0); // Reset the display to 0.
}

// Function to handle when the equals button is pressed.
// Calculates the result based on the operands and operator, and updates the display.
function calculate() {
  if (operator && currentInput) {
    operand2 = parseFloat(currentInput);
    let result = operate(operand1, operand2, operator); // Perform the calculation.
    currentInput = result.toString();
    operand1 = result; // Store the result as the first operand for further calculations.
    operand2 = null;
    operator = null;
    updateDisplay(currentInput); // Update the display with the result.
  }
}

// Function to perform the calculation.
// Takes in two operands and an operator, and returns the result.
function operate(operand1, operand2, operator) {
  switch (operator) {
    case "+":
      return operand1 + operand2;
    case "-":
      return operand1 - operand2;
    case "*":
      return operand1 * operand2;
    case "/":
      if (operand2 === 0) {
        return "Error"; // Prevent division by zero.
      }
      return operand1 / operand2;
    default:
      return 0;
  }
}

// Function to update the calculator's display.
// Takes in a value and sets it as the display's content.
function updateDisplay(value) {
  document.getElementById("display").innerText = value;
}

// Initialize the display to show 0.
updateDisplay(0);
