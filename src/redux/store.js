import { combineReducers, configureStore } from "@reduxjs/toolkit";
import contactsReduser from "./contactSlice";
import filtersReducer from "./filterSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { customRootReducer } from "./customRootSlice";

const contactsPersistorConfig = {
  key: "contacts",
  storage,
};

const persistContactsReducer = persistReducer(
  contactsPersistorConfig,
  contactsReduser
);

const rootReducer = combineReducers({
  contacts: persistContactsReducer,
  filters: filtersReducer,
  loading: customRootReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
