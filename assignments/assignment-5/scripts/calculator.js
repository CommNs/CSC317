let expression = "";
let result = "";

function updateDisplay() {
    document.getElementById("result").value = expression;
}
function append(character) {
    if(result) {
        expression = result = ""
    }
    expression += character;
    updateDisplay();
}

function clearResult() {
    expression = "";
    updateDisplay();
}

function pop() {
    expression = expression.slice(0, -1);
    updateDisplay();
}


function secureEval() {
    const safePattern = /^[0-9+\-*/%.()\^ ]+$/;
    if (!safePattern.test(expression)) {
      throw new Error("Invalid characters in expression.");
    }
    try {
        result = expression = Function('"use strict"; return (' + expression.replaceAll('^', '**') + ')')();
        updateDisplay();
    } catch (e) {
      throw new Error("Error evaluating expression.");
    }
  }