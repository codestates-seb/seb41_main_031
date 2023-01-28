import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth';
import windowWidthReducer from './windowWidth';
import modifyReducer from './modify';

const store = configureStore({
  reducer: {
    auth: authReducer,
    windowWidth: windowWidthReducer,
    modify: modifyReducer,
  },
});

export default store;