import { combineReducers, configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./filtersSlice";
import contactsReducer from "./contactsSlice";
import { customRootReducer } from "./customRootSlice";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
  loading: customRootReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

