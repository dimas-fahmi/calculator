export default function evaluator({
  currentOperand,
  previousOperand,
  operation,
}) {
  if (currentOperand == null || previousOperand == null || operation == null)
    return;
  let prev = parseFloat(previousOperand),
    current = parseFloat(currentOperand),
    comp;
  switch (operation) {
    case "x":
      comp = prev * current;
      break;
    case "÷":
      comp = prev / current;
      break;
    case "+":
      comp = prev + current;
      break;
    case "-":
      comp = prev - current;
      break;
  }
  return comp.toString();
}
