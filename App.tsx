import Routes from '@/routes';
import store from '@/store';
import { Provider as StoreProvider } from 'react-redux';

import * as Localization from 'expo-localization';
import i18n from '@/i18n/i18n';
import { useEffect } from 'react';

import { ThemeProvider } from 'styled-components/native';
import theme from '@/styles/theme';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'SF-Pro-Display-Bold': require('./assets/fonts/SF-Pro-Display-Bold.otf'),
    'SF-Pro-Text-Regular': require('./assets/fonts/SF-Pro-Text-Regular.otf'),
    'SF-Pro-Text-Semibold': require('./assets/fonts/SF-Pro-Text-Semibold.otf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  useEffect(() => {
    // i18n.changeLanguage(Localization.locale);
    i18n.changeLanguage('pt-br');
  }, [Localization.locale]);

  return (
    <ThemeProvider theme={theme}>
      <StoreProvider store={store}>
        <Routes />
      </StoreProvider>
    </ThemeProvider>
  );
}
