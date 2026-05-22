import type { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { userActions } from '@entities/User/model/slice/userSlice';
import type { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: StateSchema;
}

export function StoreProvider(props: StoreProviderProps) {
  const { children, initialState } = props;

  const store = createReduxStore(initialState);
  store.dispatch(userActions.initAuthData());
  return <Provider store={store}>{children}</Provider>;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
export type RootState = ReturnType<typeof createReduxStore>;
