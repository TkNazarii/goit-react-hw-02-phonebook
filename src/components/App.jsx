// import css from './app.module.scss';
import Form from './_01-form';
import Filter from './_02-filter';
import List from './_03-List';

import React, { Component } from 'react';

export class App extends Component {
  state = {
	value: '',
    //  contacts: [],
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  formSubmit = data => {
    if (data.length >= 0) {
      this.setState({
        contacts: [...data],
      });
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, data],
      }));
    }
  };

  filter = valueFilter => {

	this.setState(prevState => {
		return { value:  valueFilter };
	  });
    
  };

  render() {
	// console.log(this.state.value);
    return (
      <div>
		<h1>Phonebook</h1>
        <Form alert={this.state.contacts} onSubmit={this.formSubmit} />
		<h2>Contacts</h2>
		<Filter filter={this.filter}/>
        <List filterValue={this.state.value || ''} data={this.state.contacts || []} onSubmit={this.formSubmit} />
      </div>
    );
  }
}
