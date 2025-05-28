export const visibleContacts = (contacts, filter) => {
  return contacts.filter((contact) => {
    return contact.name
      .toUpperCase()
      .trim()
      .includes(filter.toUpperCase().trim());
  });
};
