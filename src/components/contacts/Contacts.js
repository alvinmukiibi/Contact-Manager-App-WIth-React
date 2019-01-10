import React, { Component } from "react";
import Contact from "./Contact";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getContacts } from "../../actions/contactActions";
class Contacts extends Component {
  //a little destructuring here

  componentDidMount() {
    //we call this prop here because we want it to be in state before the page loads
    this.props.getContacts();
  }

  render() {
    const { contacts } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}
Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
};

//export default Contacts; //so now instaed of exporting it we

const mapStateToProps = state => ({
  contacts: state.contact.contacts //be warned that we are doing some more destrucutrung here to get the array of contacts out of the state
});

//this function has the actions so it is good to put it in its own file
// const mapDispatchToProps = dispatch => ({
//   getContacts: () => dispatch({ type: GET_CONTACTS })
// });

//THIS CODE IS THE REAL CONNECTION BTN THE REDUCER (REDUX) AND THE REACT COMPONENT, THE RESULT IS A SMART CONTAINER

export default connect(
  mapStateToProps,
  { getContacts }
)(Contacts);
//anything we want to map from redux state to this component,
//so there are two functions you can pass into the first argument
