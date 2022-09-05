// import { configureStore } from '@reduxjs/toolkit';
// import { userApi } from './userApi';
// import { registerSlice } from './registeSlice';
// import { contactsApi } from './contactsApi';

// export const store = configureStore({
//   reducer: {
//     auth: registerSlice.reducer,
//     [userApi.reducerPath]: userApi.reducer,
//     [contactsApi.reducerPath]: contactsApi.reducer,
//   },
//   middleware: getDefaultMiddleware => [
//     ...getDefaultMiddleware(),
//     contactsApi.middleware,
//     userApi.middleware,
//   ],
// });

import { configureStore } from '@reduxjs/toolkit';
import { userApi } from './userApi';
import { contactsApi } from './contactsApi';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { persistAuthReducer } from './registeSlice';

export const store = configureStore({
  reducer: {
    auth: persistAuthReducer,
    [userApi.reducerPath]: userApi.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    userApi.middleware,
    contactsApi.middleware,
  ],
});

export const persistor = persistStore(store);
