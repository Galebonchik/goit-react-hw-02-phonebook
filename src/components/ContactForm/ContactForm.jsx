import React, { Component } from 'react';
import { Form, Input, Button } from '../ContactForm/ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  HandleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  HandleSubmit = event => {
    event.preventDefault();

    const { name, number } = this.state;
    this.props.onSubmit(name, number);

    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Form onSubmit={this.HandleSubmit}>
        <label htmlFor=""> Name</label>
        <Input
          type="text"
          name="name"
          onChange={this.HandleInputChange}
          value={this.state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <label htmlFor="">Number </label>
        <Input
          type="tel"
          name="number"
          onChange={this.HandleInputChange}
          value={this.state.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}
