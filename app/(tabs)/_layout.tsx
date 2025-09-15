import { Tabs } from 'expo-router';
import { Calculator } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          display: 'none', // Hide tab bar since we only have one tab
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Calculadora',
          tabBarIcon: ({ size, color }) => (
            <Calculator size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}