import { combineReducers, configureStore } from '@reduxjs/toolkit'
import uploadimage from './ReduxStore/uploadimage'
import persistReducer from 'redux-persist/es/persistReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';


// export default configureStore({
//   reducer: {
//     uploadImage:uploadimage

//   },
// })


const reducers = combineReducers({
  uploadImage:uploadimage
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: [
   "uploadImage"
  ],
  // stateReconciler: autoMergeLevel1,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  // middleware: (getDefaultMiddleware) => {
  //   const middlewares = getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   });
  //   // middlewares.push(logger);
  //   if (__DEV__ && !process.env.JEST_WORKER_ID) {
  //     const createDebugger = require("redux-flipper").default;
  //     middlewares.push(createDebugger());
  //   }
  //   return middlewares;
  // },
});

const persistor = persistStore(store);

export { store, persistor };
