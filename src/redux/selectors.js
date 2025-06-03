import { createSelector } from "@reduxjs/toolkit";

// contacts
export const selectContacts = (state) => state.contacts.items;

// filter
export const selectNameFilter = (state) => state.filters.name;

// loading
export const selectLoading = (state) => state.loading.isLoading;
export const selectError = (state) => state.loading.isError;
export const selectErrorMessage = (state) => state.loading.errorMessage;

//filtered contacts
export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  }
);
