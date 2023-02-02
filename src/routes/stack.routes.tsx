import Home from '@/screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

const { Screen, Navigator } = createNativeStackNavigator();

export const StackRoutes = () => {
  return (
    <Navigator>
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
    </Navigator>
  );
};
