import translate from '@/services/translate';
import * as React from 'react';
import { StyleProp, TextInput, ViewStyle } from 'react-native';
import { Searchbar } from 'react-native-paper';

type AdvancedSearchBarProps = {
  ref?: React.RefObject<TextInput>;
  repositoriesList: models.Item[];
  style?: StyleProp<ViewStyle>;
  value?: string;
  setValue: (value: string) => void;
  onSubmitEditing?: () => void;
};

const AdvancedSearchBar = ({
  style,
  value,
  setValue,
  onSubmitEditing,
  ref,
}: AdvancedSearchBarProps) => {
  return (
    <Searchbar
      ref={ref}
      placeholder={translate('APP.COMPONENTS.SEARCH_BAR.PLACEHOLDER')}
      value={value ?? ''}
      style={style}
      onChangeText={(text) => setValue(text ?? '')}
      inputStyle={{
        fontFamily: 'SF-Pro-Text-Regular',
        fontSize: 17,
        lineHeight: 22,
      }}
      onBlur={() => {
        if (onSubmitEditing) {
          onSubmitEditing();
        }
      }}
      onSubmitEditing={onSubmitEditing}
    />
  );
};

export default AdvancedSearchBar;
