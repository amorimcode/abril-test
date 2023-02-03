import translate from '@/services/translate';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { NativeScrollEvent, ScrollView } from 'react-native';
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
  const [loading, setLoading] = React.useState(false);

  const isCloseToBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }: NativeScrollEvent) => {
    const paddingToBottom = 20;
    return layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom;
  };

  const onScroll = ({ nativeEvent }: { nativeEvent: NativeScrollEvent }) => {
    if (isCloseToBottom(nativeEvent)) {
      if (loading) return;
      setLoading(true);

      console.log('end reached');
    }
  };

  return (
    <ScrollView onScroll={onScroll}>
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
