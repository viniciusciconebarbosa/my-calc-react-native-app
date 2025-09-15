import { View, Text, StyleSheet } from 'react-native';
import { formatNumber } from '@/utils/calculator';

interface DisplayProps {
  display: string;
  previousValue: string;
  operation: string | null;
}

export function Display({ display, previousValue, operation }: DisplayProps) {
  const formattedDisplay = formatNumber(display);
  const showHistory = previousValue && operation;

  return (
    <View style={styles.container}>
      {showHistory && (
        <Text style={styles.historyText}>
          {formatNumber(previousValue)} {operation}
        </Text>
      )}
      <Text 
        style={styles.displayText}
        adjustsFontSizeToFit
        numberOfLines={1}
        minimumFontScale={0.3}
      >
        {formattedDisplay}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 30,
    minHeight: 200,
  },
  historyText: {
    fontSize: 24,
    color: '#666',
    fontWeight: '300',
    marginBottom: 10,
  },
  displayText: {
    fontSize: 80,
    color: '#fff',
    fontWeight: '200',
    letterSpacing: -2,
  },
});