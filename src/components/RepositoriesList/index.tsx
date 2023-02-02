import translate from '@/services/translate';
import React from 'react';
import { ScrollView } from 'react-native';
import {
  ItemContainer,
  ItemTitle,
  RepoImage,
  StarCountText,
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
              <StarCountText>
                {repository.stargazers_count} {translate('APP.COMPONENTS.REPOSITORY_LIST.STARS')}
              </StarCountText>
            </Wrapper>
          </ItemContainer>
        ))}
    </ScrollView>
  );
};

export default RepositoriesList;
