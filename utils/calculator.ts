export function performCalculation(
  firstOperand: string,
  secondOperand: string,
  operation: string
): string {
  const prev = parseFloat(firstOperand);
  const current = parseFloat(secondOperand);
  
  if (isNaN(prev) || isNaN(current)) {
    return '0';
  }

  let result = 0;

  switch (operation) {
    case '+':
      result = prev + current;
      break;
    case '−':
      result = prev - current;
      break;
    case '×':
      result = prev * current;
      break;
    case '÷':
      if (current === 0) {
        return 'Erro';
      }
      result = prev / current;
      break;
    default:
      return secondOperand;
  }

  // Handle decimal precision
  const resultStr = result.toString();
  if (resultStr.includes('.')) {
    const decimalPlaces = resultStr.split('.')[1].length;
    if (decimalPlaces > 8) {
      result = parseFloat(result.toFixed(8));
    }
  }

  return result.toString();
}

export function formatNumber(value: string): string {
  if (value === 'Erro' || value === '') {
    return value;
  }

  const number = parseFloat(value);
  
  if (isNaN(number)) {
    return '0';
  }

  // Format large numbers with commas
  if (Math.abs(number) >= 1000) {
    return number.toLocaleString('pt-BR', {
      maximumFractionDigits: 8,
    });
  }

  return value;
}