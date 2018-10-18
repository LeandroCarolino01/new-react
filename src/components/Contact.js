import React, { Component } from 'react'
import PropTypes from 'prop-types';

 class Contact extends Component {
  render() {
      const { name, email } = this.props.contact;
      //destructuring
    return (
      <div>
        <h1>{name}</h1>
        <h2>{email}</h2>
      </div>
    )
  }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
   
}

export default Contact;
