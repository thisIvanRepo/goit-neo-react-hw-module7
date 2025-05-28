import { combineReducers, configureStore } from "@reduxjs/toolkit";
import contactsReduser from "./contactSlice";
import filtersReducer from "./filterSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

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
});

export const store = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store);
