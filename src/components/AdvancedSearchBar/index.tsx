import translate from '@/services/translate';
import * as React from 'react';
import { StyleProp, TextInput, ViewStyle } from 'react-native';
import { Container, Icon, InputText } from './styles';

type AdvancedSearchBarProps = {
  ref?: React.RefObject<TextInput>;
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
    <Container testID="advanced-search-bar">
      <InputText
        ref={ref}
        placeholder={translate('APP.COMPONENTS.SEARCH_BAR.PLACEHOLDER')}
        value={value ?? ''}
        style={style}
        onChangeText={(text) => setValue(text ?? '')}
        onBlur={() => {
          if (onSubmitEditing) {
            onSubmitEditing();
          }
        }}
        onSubmitEditing={onSubmitEditing}
      />
      <Icon name="ios-search" />
    </Container>
  );
};

export default AdvancedSearchBar;
