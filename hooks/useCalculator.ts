import { useState } from 'react';
import { performCalculation } from '@/utils/calculator';

export function useCalculator() {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState('');
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const handleNumberPress = (num: string) => {
    if (waitingForOperand) {
      setDisplay(num);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const handleOperationPress = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === '') {
      setPreviousValue(display);
    } else if (operation) {
      const currentValue = previousValue || '0';
      const newValue = performCalculation(currentValue, display, operation);

      setDisplay(newValue);
      setPreviousValue(newValue);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const handleEqualsPress = () => {
    if (operation && previousValue !== '') {
      const newValue = performCalculation(previousValue, display, operation);
      setDisplay(newValue);
      setPreviousValue('');
      setOperation(null);
      setWaitingForOperand(true);
    }
  };

  const handleClearPress = () => {
    setDisplay('0');
  };

  const handleAllClearPress = () => {
    setDisplay('0');
    setPreviousValue('');
    setOperation(null);
    setWaitingForOperand(false);
  };

  const handleDecimalPress = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  return {
    display,
    previousValue,
    operation,
    handleNumberPress,
    handleOperationPress,
    handleEqualsPress,
    handleClearPress,
    handleAllClearPress,
    handleDecimalPress,
  };
}