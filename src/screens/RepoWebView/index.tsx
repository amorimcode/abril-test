import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import WebView from 'react-native-webview';

type ParamsProps = {
  uri: string;
  title: string;
};

const RepoWebView = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { uri, title } = route.params as ParamsProps;

  useEffect(() => {
    navigation.setOptions({ title });
  }, []);

  return <WebView source={{ uri }}></WebView>;
};

export default RepoWebView;
