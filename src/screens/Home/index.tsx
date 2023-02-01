import React from 'react';
import { Text, View } from 'react-native';
import translate from '@/services/translate';
import { AdvancedText } from './styles';

const Home = () => {
  return (
    <View>
      <AdvancedText>{translate('APP.SCREENS.HOME.TITLE')}</AdvancedText>
    </View>
  );
};

export default Home;
