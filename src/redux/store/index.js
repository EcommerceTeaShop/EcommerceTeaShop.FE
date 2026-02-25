import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../authSlice/authSlice.js";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    auth: authReducer, // This name "auth" must match what you use in useSelector
  },
});
export const persistor = persistStore(store);

export default { store, persistor };
