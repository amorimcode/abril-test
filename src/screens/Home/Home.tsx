import React from 'react';
import { Text, View } from 'react-native';
import translate from '@/services/translate';

const Home = () => {
  return (
    <View>
      <Text>{translate('APP.SCREENS.HOME.TITLE')}</Text>
    </View>
  );
};

export default Home;
