import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../src/bases.css';
import shortid from 'shortid';
import ContactForm from './Phonebook/ContactForm';
import ContactList from './Phonebook/ContactList';
import Filter from './Phonebook/Filter';
import MyPnotify from './Phonebook/MyPnotify/MyPnotify';
import { CSSTransition } from 'react-transition-group';
import './Alert.css';
import Container from './Container';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    isAlert: false,
  };

  componentDidMount() {
    const presistedContacts = localStorage.getItem('contacts');
    if (presistedContacts) {
      this.setState({ contacts: JSON.parse(presistedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const numbers = {
      id: shortid.generate(),
      name,
      number,
    };

    if (contacts.find(item => item.name === name)) {
      this.alert();
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [numbers, ...prevState.contacts],
      };
    });
  };

  handleChangeFilter = filter => {
    this.setState({ filter });
  };

  getVisible = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(text =>
      text.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  removeContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  alert = () => {
    this.setState(state => ({
      isAlert: !state.isAlert,
    }));
  };

  render() {
    const { filter, contacts, isAlert } = this.state;
    const getVisibleContacts = this.getVisible();
    const className = isAlert === true ? 'fade' : 'hide';
    const hideAlert =
      isAlert && setTimeout(() => this.setState({ isAlert: false }), 3000);

    return (
      <>
        <MyPnotify className={className} hideAlert={hideAlert} />

        <Container>
          <ContactForm addContact={this.addContact} />

          <Filter
            contacts={contacts}
            value={filter}
            handleChangeFilter={this.handleChangeFilter}
          />

          <ContactList
            contacts={getVisibleContacts}
            onRemove={this.removeContact}
          />
        </Container>
      </>
    );
  }
}
App.propTypes = {
  filter: PropTypes.string,
  state: PropTypes.arrayOf(
    PropTypes.shape({
      contacts: PropTypes.string,
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default App;
