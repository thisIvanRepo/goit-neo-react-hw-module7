import { combineReducers, configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./filterSlice";
import contactsReducer from "./contactSlice";
import { customRootReducer } from "./customRootSlice";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
  loading: customRootReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

