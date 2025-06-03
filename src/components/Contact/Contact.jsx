import React from "react";
import { FaRegUser, FaPhone } from "react-icons/fa";
import style from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const DELETE_TEXT = "Delete";

const Contat = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={style.contact}>
      <div className={style.contactData}>
        <h3 className={style.contactName}>
          <FaRegUser /> {contact.name}
        </h3>
        <h3 className={style.contactPhone}>
          <FaPhone /> {contact.number}
        </h3>
      </div>
      <button
        className={`btn btn-danger ${style.deleteBtn}`}
        onClick={() => handleDeleteContact(contact.id)}
      >
        {DELETE_TEXT}
      </button>
    </li>
  );
};

export default Contat;
