import React, { Component } from 'react'
import PropTypes from 'prop-types';

 class Contact extends Component {
     state = {

     }
     onShowClick = (id, name) => {
         console.log(id);
     }
  render() {
      const { name, email } = this.props.contact;
      //destructuring
    return (
      <div>
        <h1>{name} <i onClick={this.onShowClick.bind(this, name)} className="fa fa-sort-down"></i></h1>
        <h2>{email}</h2>
      </div>
    )
  }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
   
}

export default Contact;
