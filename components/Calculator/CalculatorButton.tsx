import { 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  Pressable,
  ViewStyle,
  TextStyle,
} from 'react-native';
import Animated, { 
  useAnimatedStyle, 
  useSharedValue, 
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { Platform } from 'react-native';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

interface CalculatorButtonProps {
  title: string;
  onPress: () => void;
  type: 'number' | 'operator' | 'function';
  isWide?: boolean;
}

export function CalculatorButton({ 
  title, 
  onPress, 
  type, 
  isWide = false 
}: CalculatorButtonProps) {
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
      opacity: opacity.value,
    };
  });

  const handlePressIn = () => {
    scale.value = withSpring(0.95, { damping: 15 });
    opacity.value = withTiming(0.8, { duration: 100 });
    
    // Web-compatible haptic feedback
    if (Platform.OS !== 'web') {
      // Would use Haptics.impactAsync() on native
    }
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, { damping: 15 });
    opacity.value = withTiming(1, { duration: 100 });
  };

  const getButtonStyle = (): ViewStyle => {
    const baseStyle = styles.button;
    
    switch (type) {
      case 'operator':
        return { ...baseStyle, ...styles.operatorButton };
      case 'function':
        return { ...baseStyle, ...styles.functionButton };
      default:
        return { ...baseStyle, ...styles.numberButton };
    }
  };

  const getTextStyle = (): TextStyle => {
    const baseStyle = styles.buttonText;
    
    switch (type) {
      case 'operator':
        return { ...baseStyle, ...styles.operatorText };
      case 'function':
        return { ...baseStyle, ...styles.functionText };
      default:
        return { ...baseStyle, ...styles.numberText };
    }
  };

  const buttonStyle = [
    getButtonStyle(),
    isWide && styles.wideButton,
    animatedStyle,
  ];

  return (
    <AnimatedPressable
      style={buttonStyle}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Text style={getTextStyle()}>{title}</Text>
    </AnimatedPressable>
  );
}

const BUTTON_SIZE = 80;

const styles = StyleSheet.create({
  button: {
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    borderRadius: BUTTON_SIZE / 2,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  wideButton: {
    width: BUTTON_SIZE * 2 + 12, // Double width plus gap
    borderRadius: BUTTON_SIZE / 2,
  },
  numberButton: {
    backgroundColor: '#333',
  },
  operatorButton: {
    backgroundColor: '#FF9500',
  },
  functionButton: {
    backgroundColor: '#A6A6A6',
  },
  buttonText: {
    fontSize: 32,
    fontWeight: '400',
  },
  numberText: {
    color: '#fff',
  },
  operatorText: {
    color: '#fff',
    fontSize: 36,
  },
  functionText: {
    color: '#000',
    fontSize: 24,
    fontWeight: '500',
  },
});