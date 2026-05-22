import type { UserSchema } from '@entities/User/model/types/user';
import type {
  EnhancedStore,
  Reducer,
  ReducersMapObject,
  UnknownAction,
} from '@reduxjs/toolkit';
import { baseApi } from '@shared/api/baseApi';

export type ApiState = ReturnType<typeof baseApi.reducer>;

export interface StateSchema {
  [baseApi.reducerPath]: ApiState;
  user: UserSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: UnknownAction) => StateSchema;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}
