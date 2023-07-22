import { Provider } from 'react-redux';
import { wrapper } from '@/redux/store';

const StoreProvider = ({ children }) => {
  const { store } = wrapper.useWrappedStore(children.props);

  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
