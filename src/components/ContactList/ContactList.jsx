import React from "react";
import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { visibleContacts } from "../../helpers/helpers";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);
  const visible = visibleContacts(contacts, filter);

  return (
    <ul className={style.list}>
      {visible.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
