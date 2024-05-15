const IntegerFormatter = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
});

export default function formatter(operand) {
  if (operand == null) return operand;
  let isNegative = false;
  if (operand.startsWith("-")) {
    isNegative = true;
    operand = operand.substring(1);
  }
  const [int, dec] = operand.split(".");
  let formattedInt = IntegerFormatter.format(int);
  if (isNegative) {
    formattedInt = "-" + formattedInt;
  }
  if (dec == null) return formattedInt;
  return `${formattedInt}.${dec}`;
}
