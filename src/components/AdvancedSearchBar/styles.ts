import { TextInputProps } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

export const Container = styled.View`
  margin: 16px 16px 10px 16px;
  justify-content: center;
`;

export const Icon = styled(Ionicons)`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.grayTextSearch};
  position: absolute;
  left: 8px;
`;

export const InputText = styled.TextInput.attrs<TextInputProps>({
  placeholderTextColor: 'rgba(60, 60, 67, 0.6)',
  allowFontScaling: false,
} as TextInputProps)`
  font-size: 17px;
  background-color: ${({ theme }) => theme.colors.searchBackground};
  border-radius: 10px;
  font-family: 'SF-Pro-Text-Regular';
  padding-left: 30px;
  line-height: 22px;
  letter-spacing: -0.41px;
`;
