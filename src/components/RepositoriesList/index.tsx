import translate from '@/services/translate';
import React from 'react';
import { ScrollView } from 'react-native';
import {
  ItemContainer,
  ItemTitle,
  RepoImage,
  StarCountText,
  StarWrapper,
  UserNameText,
  Wrapper,
  WrapperText,
} from './styles';

type RepositoriesListProps = {
  repositories: models.Item[];
};

const RepositoriesList = ({ repositories }: RepositoriesListProps) => {
  return (
    <ScrollView>
      {repositories &&
        repositories.map((repository, index) => (
          <ItemContainer key={index}>
            <Wrapper>
              <RepoImage source={{ uri: repository.owner.avatar_url }} />
              <WrapperText>
                <ItemTitle>{repository.name}</ItemTitle>
                <UserNameText>{repository.owner.login}</UserNameText>
              </WrapperText>
              <StarWrapper style={{ flex: 1, alignItems: 'flex-end' }}>
                <StarCountText>
                  {repository.stargazers_count} {translate('APP.COMPONENTS.REPOSITORY_LIST.STARS')}
                </StarCountText>
              </StarWrapper>
            </Wrapper>
          </ItemContainer>
        ))}
    </ScrollView>
  );
};

export default RepositoriesList;
