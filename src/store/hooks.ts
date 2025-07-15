import { useDispatch, useSelector, useStore } from 'react-redux';
import type { AppDispatch, AppStore, RootState } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
const useStoreDispatch = useDispatch.withTypes<AppDispatch>();
const useStoreSelector = useSelector.withTypes<RootState>();
const useAppStore = useStore.withTypes<AppStore>();

export { useStoreDispatch, useStoreSelector, useAppStore };
