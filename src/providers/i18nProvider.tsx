import i18n from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';

import ptbr from './i18n/ptbr.json';
import en from './i18n/en.json';
import React, { FC, Suspense, useEffect } from 'react';

import * as Localization from 'expo-localization';
import { StyleSheet, View } from 'react-native';

export const I18nProvider = ({ children }: React.PropsWithChildren) => {
  useEffect(() => {
    // let locale;
    // if (Platform.OS === 'ios') {
    //   locale = NativeModules.SettingsManager.settings.AppleLocale || 'pt_BR';
    // } else {
    //   const loc = RNLocalize.getLocales()[0];
    //   if (loc == null) {
    //     locale = NativeModules.I18nManager.localeIdentifier;
    //   } else {
    //     locale = loc.languageTag + '_' + loc.countryCode;
    //   }
    // }
    // const [language] = locale.split('_');

    console.log('locale', Localization.locale);

    const language = Localization.locale.split('-')[0];

    i18n.use(initReactI18next).init({
      compatibilityJSON: 'v3',
      lng: language,
      fallbackLng: 'ptbr',
      resources: {
        ptbr: {
          translation: ptbr,
        },
        en: {
          translation: en,
        },
      },
      react: {
        useSuspense: false,
      },
      interpolation: {
        escapeValue: false,
      },
    });
  }, []);

  return (
    <Suspense fallback={<View style={StyleSheet.absoluteFill} />}>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </Suspense>
  );
};
