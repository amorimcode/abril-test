import Home from '@/screens/Home';
import RepoWebView from '@/screens/RepoWebView';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator } = createNativeStackNavigator();

export const StackRoutes = () => {
  return (
    <Navigator>
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen name="Repo" component={RepoWebView} />
    </Navigator>
  );
};
