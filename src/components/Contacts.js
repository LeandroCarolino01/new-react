import React, { Component } from 'react'

class Contacts extends Component {
    constructor() {
        super();
        this.state = {
            contacts: [
                {
                    id: 1,
                    name: 'Leandro',
                    email: 'leandro@gmail.com'
                },
                {
                    id: 2,
                    name: 'Many',
                    email: 'many@gmail.com'
                },
                {
                    id: 3,
                    name: 'Pee',
                    email: 'pee@gmail.com'
                }
            ]
        }
    }
  render() {
      const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
            <h1>{contact.email}</h1>
        ))}
      </div>
    )
  }
}

export default Contacts;




