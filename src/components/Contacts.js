import React, { Component } from 'react'

class Contacts extends Component {
    constructor() {
        super();
        this.state = {
            contacts: [
                {
                    id: 1,
                    name: 'Leandro',
                    age: 30
                },
                {
                    id: 2,
                    name: 'Many',
                    age: 34
                },
                {
                    id: 3,
                    name: 'Pee',
                    age: 31
                }
            ]
        }
    }
  render() {
      const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
            <h1>{contact.age}</h1>
        ))}
      </div>
    )
  }
}

export default Contacts;




