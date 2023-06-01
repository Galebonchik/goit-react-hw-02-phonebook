import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { TelephoneBook, Title } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    if (
      this.state.contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = todoId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== todoId),
    }));
  };

  render() {
    const filtredContacts = this.getVisibleContacts();
    return (
      <TelephoneBook>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.addContact} />

        <Title>Contacts</Title>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList
          filtredContacts={filtredContacts}
          onDeleteContact={this.deleteContact}
        />
      </TelephoneBook>
    );
  }
}
