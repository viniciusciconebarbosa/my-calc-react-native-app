import { View, StyleSheet } from 'react-native';
import { CalculatorButton } from './CalculatorButton';

interface ButtonGridProps {
  onNumberPress: (number: string) => void;
  onOperationPress: (operation: string) => void;
  onEqualsPress: () => void;
  onClearPress: () => void;
  onAllClearPress: () => void;
  onDecimalPress: () => void;
}

export function ButtonGrid({
  onNumberPress,
  onOperationPress,
  onEqualsPress,
  onClearPress,
  onAllClearPress,
  onDecimalPress,
}: ButtonGridProps) {
  return (
    <View style={styles.container}>
      {/* Row 1 */}
      <View style={styles.row}>
        <CalculatorButton
          title="AC"
          onPress={onAllClearPress}
          type="function"
        />
        <CalculatorButton
          title="C"
          onPress={onClearPress}
          type="function"
        />
        <CalculatorButton
          title="±"
          onPress={() => {}}
          type="function"
        />
        <CalculatorButton
          title="÷"
          onPress={() => onOperationPress('÷')}
          type="operator"
        />
      </View>

      {/* Row 2 */}
      <View style={styles.row}>
        <CalculatorButton
          title="7"
          onPress={() => onNumberPress('7')}
          type="number"
        />
        <CalculatorButton
          title="8"
          onPress={() => onNumberPress('8')}
          type="number"
        />
        <CalculatorButton
          title="9"
          onPress={() => onNumberPress('9')}
          type="number"
        />
        <CalculatorButton
          title="×"
          onPress={() => onOperationPress('×')}
          type="operator"
        />
      </View>

      {/* Row 3 */}
      <View style={styles.row}>
        <CalculatorButton
          title="4"
          onPress={() => onNumberPress('4')}
          type="number"
        />
        <CalculatorButton
          title="5"
          onPress={() => onNumberPress('5')}
          type="number"
        />
        <CalculatorButton
          title="6"
          onPress={() => onNumberPress('6')}
          type="number"
        />
        <CalculatorButton
          title="−"
          onPress={() => onOperationPress('−')}
          type="operator"
        />
      </View>

      {/* Row 4 */}
      <View style={styles.row}>
        <CalculatorButton
          title="1"
          onPress={() => onNumberPress('1')}
          type="number"
        />
        <CalculatorButton
          title="2"
          onPress={() => onNumberPress('2')}
          type="number"
        />
        <CalculatorButton
          title="3"
          onPress={() => onNumberPress('3')}
          type="number"
        />
        <CalculatorButton
          title="+"
          onPress={() => onOperationPress('+')}
          type="operator"
        />
      </View>

      {/* Row 5 */}
      <View style={styles.row}>
        <CalculatorButton
          title="0"
          onPress={() => onNumberPress('0')}
          type="number"
          isWide
        />
        <CalculatorButton
          title="."
          onPress={onDecimalPress}
          type="number"
        />
        <CalculatorButton
          title="="
          onPress={onEqualsPress}
          type="operator"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 12,
    gap: 12,
  },
});