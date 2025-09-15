import { View, StyleSheet } from 'react-native';
import { Display } from './Display';
import { ButtonGrid } from './ButtonGrid';
import { useCalculator } from '@/hooks/useCalculator';

export function Calculator() {
  const {
    display,
    previousValue,
    operation,
    handleNumberPress,
    handleOperationPress,
    handleEqualsPress,
    handleClearPress,
    handleAllClearPress,
    handleDecimalPress,
  } = useCalculator();

  return (
    <View style={styles.container}>
      <Display 
        display={display}
        previousValue={previousValue}
        operation={operation}
      />
      <ButtonGrid
        onNumberPress={handleNumberPress}
        onOperationPress={handleOperationPress}
        onEqualsPress={handleEqualsPress}
        onClearPress={handleClearPress}
        onAllClearPress={handleAllClearPress}
        onDecimalPress={handleDecimalPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});