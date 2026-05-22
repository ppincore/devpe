import {
  combineReducers,
  type ReducersMapObject,
  type Reducer,
  type UnknownAction,
} from '@reduxjs/toolkit';
import type {
  StateSchema,
  StateSchemaKey,
  ReducerManager,
} from './StateSchema';

export function createReducerManager(
  initReducers: ReducersMapObject<StateSchema>,
): ReducerManager {
  const reducers = { ...initReducers };
  let combinedReducer = combineReducers(reducers);

  return {
    getReducerMap: () => reducers,
    reduce: (state: StateSchema, action: UnknownAction) => {
      return combinedReducer(state, action);
    },
    add: (key: StateSchemaKey, reducer: Reducer) => {
      reducers[key] = reducer;
      combinedReducer = combineReducers(reducers);
    },
    remove: (key: StateSchemaKey) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete reducers[key];
      combinedReducer = combineReducers(reducers);
    },
  };
}
