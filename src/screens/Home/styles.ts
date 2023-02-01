import styled from 'styled-components/native';

export const AdvancedText = styled.Text`
  font-size: 34px;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-weight: 700;
  line-height: 41px;

  color: ${({ theme }) => theme.colors.text};
`;
