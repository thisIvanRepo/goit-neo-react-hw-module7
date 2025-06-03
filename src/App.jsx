import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { visibleContacts } from "./helpers/helpers";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import {
  selectContacts,
  selectErrorMessage,
  selectError,
  selectLoading,
  selectNameFilter,
} from "./redux/selectors";

function App() {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const errorMessage = useSelector(selectErrorMessage);
  const filterName = useSelector(selectNameFilter);
  const visible = visibleContacts(contacts, filterName);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        {contacts.length > 0 && <SearchBox />}
        {<p style={{height: '40px'}}>{isLoading && 'Loading...'}</p>}
        {isError && (
          <p style={{ color: "red", textTransform: "uppercase" }}>
            OOPS... something went wrong, status: {errorMessage}
          </p>
        )}
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
