import { useSelector } from 'react-redux';

import { ReduxState } from '@/models/reducers';

const useReduxState = () => useSelector((state: ReduxState) => state);

export default useReduxState;
