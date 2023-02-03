import translate from '@/services/translate';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator, NativeScrollEvent, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
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

import * as HomeActions from '@/store/home/actions';

type RepositoriesListProps = {
  repositories: models.Item[];
  search: string;
  page: number;
  setPage: (page: number) => void;
};

const RepositoriesList = ({ repositories, search, page, setPage }: RepositoriesListProps) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);

  const isCloseToBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }: NativeScrollEvent) => {
    const paddingToBottom = 20;
    return layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom;
  };

  const onScroll = async ({ nativeEvent }: { nativeEvent: NativeScrollEvent }) => {
    if (loading) return;
    if (isCloseToBottom(nativeEvent)) {
      setLoading(true);

      console.log(page);
      setPage(page + 1);
      await dispatch(HomeActions.searchRepositories(search, page) as any);

      setLoading(false);

      console.log('end reached');
    }
  };

  return (
    <ScrollView onScroll={onScroll}>
      {repositories &&
        repositories.map((repository) => (
          <ItemContainer onPress={() => navigation.navigate('Repo', { uri: repository.html_url })}>
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
      {loading && <ActivityIndicator size="large" color="black" />}
    </ScrollView>
  );
};

export default RepositoriesList;
