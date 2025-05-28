import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { visibleContacts } from "./helpers/helpers";

function App() {
  const contacts = useSelector((state) => state.contacts.items);
  const filterName = useSelector((state) => state.filters.name);
  const visible = visibleContacts(contacts, filterName);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        {contacts.length > 0 && <SearchBox />}
        {contacts.length !== 0 && visible.length === 0 ? (
          <p>No contacts found matching your search...</p>
        ) : (
          <ContactList />
        )}
      </div>
    </>
  );
}

export default App;
