import { configureStore } from '@reduxjs/toolkit';

const makeStore = () => {
  return configureStore({
    reducer: {},
  });
};

// Infer the type of makeStore
type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
type RootState = ReturnType<AppStore['getState']>;
type AppDispatch = AppStore['dispatch'];

export { makeStore };
export type { AppStore, RootState, AppDispatch };
