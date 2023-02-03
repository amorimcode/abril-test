import { useRoute } from '@react-navigation/native';
import WebView from 'react-native-webview';

type ParamsProps = {
  uri: string;
};

const RepoWebView = () => {
  const route = useRoute();
  const { uri } = route.params as ParamsProps;

  return <WebView source={{ uri }}></WebView>;
};

export default RepoWebView;
