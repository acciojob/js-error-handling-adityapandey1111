class OutOfRangeError extends Error {
  constructor() {
    super("Expression should only consist of integers and +-/* characters and not <arg>");
    this.name = "OutOfRangeError";
  }
}

class InvalidExprError extends Error {
  constructor() {
    super("Expression should not have an invalid combination of expression");
    this.name = "InvalidExprError";
  }
}

function evaluateExpression(expression) {
  // Check for invalid characters in the expression
  const validCharacters = /[0-9+\-*/\s]/;
  for (let i = 0; i < expression.length; i++) {
    if (!validCharacters.test(expression[i])) {
      throw new OutOfRangeError();
    }
  }

  // Check for invalid combinations of expression
  const invalidCombinations = /([+\-*/]){2,}|[+\-*/]\s[+\-*/]/;
  if (invalidCombinations.test(expression)) {
    throw new InvalidExprError();
  }

  // Perform the evaluation logic here
  // ...

  return "Result";
}

try {
  const expression = "1 + 2 * 3";
  const result = evaluateExpression(expression);
  console.log(result);
} catch (error) {
  if (error instanceof OutOfRangeError || error instanceof InvalidExprError) {
    console.error(error.name + ": " + error.message);
  } else {
    throw error;
  }
}

window.OutOfRangeError = OutOfRangeError;
window.InvalidExprError = InvalidExprError;
