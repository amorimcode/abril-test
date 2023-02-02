import translate from '@/services/translate';
import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Searchbar } from 'react-native-paper';

type AdvancedSearchBarProps = {
  style?: StyleProp<ViewStyle>;
  value?: string;
  setValue: (value: string) => void;
};

const AdvancedSearchBar = ({ style, value, setValue }: AdvancedSearchBarProps) => {
  return (
    <Searchbar
      placeholder={translate('APP.COMPONENTS.SEARCH_BAR.PLACEHOLDER')}
      value={value ?? ''}
      style={style}
      onChangeText={(text) => setValue(text ?? '')}
    />
  );
};

export default AdvancedSearchBar;
