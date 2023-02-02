import { getInstance } from '@/shared/repositories/instance';

const HomeApi = {
  searchRepositories: async (search: string) => {
    const instance = getInstance();
    const { data } = await instance.get('search/repositories', {
      params: {
        q: search,
        per_page: 10,
      },
    });

    return data;
  },
};

export default HomeApi;
