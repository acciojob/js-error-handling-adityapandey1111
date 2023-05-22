//your code here
class OutOfRangeError extends Error {
  constructor(arg) {
    super();
    this.name = 'OutOfRangeError';
    this.message = `Expression should only consist of integers and +-/* characters and not ${arg}`;
  }
}

class InvalidExprError extends Error {
  constructor() {
    super();
    this.name = 'InvalidExprError';
    this.message = 'Expression should not have an invalid combination of expression';
  }
}

function evaluateExpression(expression) {
  const validChars = /[0-9+\-*/\s]/;
  const validCombinations = /(\d+\s*[+\-*/]\s*)*\d+/;

  if (!validChars.test(expression)) {
    throw new OutOfRangeError(expression);
  }

  if (!validCombinations.test(expression)) {
    throw new InvalidExprError();
  }

  // Perform evaluation logic here
}

try {
  evaluateExpression('2 + 3 * 4'); // Example usage
} catch (error) {
  if (error instanceof OutOfRangeError || error instanceof InvalidExprError) {
    console.log(`${error.name}: ${error.message}`);
  } else {
    throw error; // Re-throw any other unexpected errors
  }
}

// Make the classes accessible outside the script file
window.OutOfRangeError = OutOfRangeError;
window.InvalidExprError = InvalidExprError;
