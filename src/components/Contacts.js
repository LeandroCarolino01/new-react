import React, { Component } from 'react'
import Contact from './Contact'

class Contacts extends Component {
    state = {
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
    
  render() {
      const { contacts } = this.state;
    return (
      <div className="container">
        {contacts.map(contact => (
            <Contact 
            key={contact.id}
            contact={contact}
            
            />
        ))}
      </div>
    )
  }
}

export default Contacts;




