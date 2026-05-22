import {
  configureStore,
  type Reducer,
  type ReducersMapObject,
} from '@reduxjs/toolkit';
import { baseApi } from '@shared/api/baseApi';
import { userReducer } from '@entities/User/model/slice/userSlice';
import type { ReduxStoreWithManager, StateSchema } from './StateSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    user: userReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<StateSchema>,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseApi.middleware),
  }) as ReduxStoreWithManager;

  store.reducerManager = reducerManager;
  return store;
}
