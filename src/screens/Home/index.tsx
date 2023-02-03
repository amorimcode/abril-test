import React, { useEffect, useRef, useState } from 'react';
import translate from '@/services/translate';
import { HomeTitle, HomeView } from './styles';
import AdvancedSearchBar from '@/components/AdvancedSearchBar';
import RepositoriesList from '@/components/RepositoriesList';
import { useDispatch } from 'react-redux';

import * as HomeActions from '@/store/home/actions';
import useReduxState from '@/hooks/useReduxState';
import { TextInput } from 'react-native';

const Home = () => {
  const dispatch = useDispatch();
  const searchBarInput = useRef<TextInput>(null);
  const [page, setPage] = React.useState(15);
  const [search, setSearch] = useState('');

  const {
    home: { repositories },
  } = useReduxState();

  const handleSearch = async () => {
    setPage(1);
    await dispatch(HomeActions.clearRepositories() as any);
    await dispatch(HomeActions.searchRepositories(search, 1) as any);
  };

  useEffect(() => {
    if (searchBarInput.current?.isFocused()) {
      handleSearch();
    }
  }, [searchBarInput.current?.isFocused()]);

  return (
    <HomeView>
      <HomeTitle>{translate('APP.SCREENS.HOME.TITLE')}</HomeTitle>

      <AdvancedSearchBar
        repositoriesList={repositories}
        value={search}
        setValue={setSearch}
        style={{ width: '90%', height: 36, borderRadius: 10, margin: 16 }}
        onSubmitEditing={() => handleSearch()}
      />
      <RepositoriesList repositories={repositories} search={search} page={page} setPage={setPage} />
    </HomeView>
  );
};

export default Home;
