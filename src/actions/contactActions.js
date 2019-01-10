//this function/file is where we make our backend calls

import { GET_CONTACTS, ADD_CONTACT, DELETE_CONTACT } from "./types";
import EditContact from "../components/contacts/EditContact";

export const getContacts = () => {
  return {
    type: GET_CONTACTS
  };
};
export const deleteContact = id => {
  return {
    type: DELETE_CONTACT,
    payload: id
  };
};
export const addContact = contact => {
  return {
    type: ADD_CONTACT,
    payload: contact
  };
};
