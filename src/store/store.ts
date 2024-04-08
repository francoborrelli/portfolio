import {
  FLUSH,
  PAUSE,
  PURGE,
  PERSIST,
  REGISTER,
  REHYDRATE,
  persistStore,
  persistReducer,
} from 'redux-persist';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// Reducers
import languageReducer from './slices/language';
import playingBarReducer from './slices/playingBar';

const appReducer = combineReducers({
  language: languageReducer,
  playingBar: playingBarReducer,
});

// @ts-ignore
const rootReducer = (state, action) => {
  if (action.type === 'auth/removeUser') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

const whitelist = ['language'] as string[];

const persistedReducer = persistReducer(
  {
    storage,
    whitelist,
    key: 'root',
  },
  rootReducer
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const persistor = persistStore(store);
