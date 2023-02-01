import Routes from '@/routes';
import store from '@/store';
import { Provider as StoreProvider } from 'react-redux';

import * as Localization from 'expo-localization';
import i18n from '@/i18n/i18n';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    // i18n.changeLanguage(Localization.locale);
    i18n.changeLanguage('pt-br');
  }, [Localization.locale]);

  return (
    <StoreProvider store={store}>
      <Routes />
    </StoreProvider>
  );
}
