import Home from '@/screens/Home/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator } = createNativeStackNavigator();

export const StackRoutes = () => {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
      <Screen name="Details" component={Details} />
    </Navigator>
  );
};