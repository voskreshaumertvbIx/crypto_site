import { configureStore } from '@reduxjs/toolkit';
import { cryptoApi } from './services/CryptoApi';
import { buildGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import { newsApi } from './services/CryptoNewsApi';

const store = configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware :(getDefaultMiddleware) => 
    getDefaultMiddleware().concat(cryptoApi.middleware, newsApi.middleware)
  
});

export default store;
