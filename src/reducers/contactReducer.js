import { GET_CONTACTS, ADD_CONTACT, DELETE_CONTACT } from "../actions/types";

const initialState = {
  contacts: [
    {
      id: 1,
      name: "John Mukiibi",
      email: "john@gmail.com",
      phone: "555-555-5555"
    },
    {
      id: 2,
      name: "Karen Williams",
      email: "karen@gmail.com",
      phone: "444-444-4444"
    },
    {
      id: 3,
      name: "Henry Johnson",
      email: "henry@gmail.com",
      phone: "333-333-333"
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
}
//after here, you see how to get this into your contacts component to make it aware of the state i.e. to make it a container (smart)
