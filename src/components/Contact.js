import React, { Component } from 'react'
import PropTypes from 'prop-types';

 class Contact extends Component {
  render() {
      const { name, email } = this.props;
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
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
}

export default Contact;
