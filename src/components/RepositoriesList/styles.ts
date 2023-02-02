import styled from 'styled-components/native';

export const ItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #ebebeb;
`;

export const ItemTitle = styled.Text`
  font-size: 16px;
  font-family: 'SF-Pro-Text-Semibold';
  line-height: 24px;
  letter-spacing: -0.38px;

  color: ${({ theme }) => theme.colors.text};
`;

export const UserNameText = styled.Text`
  font-size: 14px;
  font-family: 'SF-Pro-Text-Regular';
  line-height: 24px;

  color: ${({ theme }) => theme.colors.grayText};
`;

export const StarCountText = styled.Text`
  font-size: 14px;
  font-family: 'SF-Pro-Text-Regular';
  line-height: 18px;
  letter-spacing: -0.08px;

  margin-left: 35%;

  color: ${({ theme }) => theme.colors.grayText};
`;

export const RepoImage = styled.Image`
  width: 52px;
  height: 52px;

  border-radius: 26px;

  background-color: #d9d9d9;
`;

export const WrapperText = styled.View`
  display: flex;
  margin-left: 12px;
  margin-top: 4px;
`;

export const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  padding: 10px;
`;
