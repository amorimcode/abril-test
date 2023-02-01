import Routes from '@/routes';
import store from '@/store';
import { Provider as StoreProvider } from 'react-redux';

export default function App() {
  return (
    <StoreProvider store={store}>
      <Routes />
    </StoreProvider>
  );
}
