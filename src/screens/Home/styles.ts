import styled from 'styled-components/native';

export const HomeView = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const HomeTitle = styled.Text`
  font-size: 34px;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-weight: 700;
  line-height: 41px;

  color: ${({ theme }) => theme.colors.text};

  margin-top: 66px;
  padding: 0 24px;
`;
