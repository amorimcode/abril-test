import translate from '@/services/translate';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView } from 'react-native';
import {
  Divider,
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
  const navigation = useNavigation();

  return (
    <ScrollView>
      {repositories &&
        repositories.map((repository) => (
          <ItemContainer
            key={repository.id}
            onPress={() => navigation.navigate('Repo', { uri: repository.html_url })}
          >
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
            <Divider />
          </ItemContainer>
        ))}
    </ScrollView>
  );
};

export default RepositoriesList;
