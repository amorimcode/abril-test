import React from 'react';
import { View } from 'react-native';
import {
  ItemContainer,
  ItemTitle,
  RepoImage,
  StarCountText,
  UserNameText,
  Wrapper,
  WrapperText,
} from './styles';

const RepositoriesList = () => {
  return (
    <View>
      <ItemContainer>
        <Wrapper>
          <RepoImage />
          <WrapperText>
            <ItemTitle>Repositório 1</ItemTitle>
            <UserNameText>amorimcode</UserNameText>
          </WrapperText>
          <StarCountText>24 stars</StarCountText>
        </Wrapper>
      </ItemContainer>
    </View>
  );
};

export default RepositoriesList;
