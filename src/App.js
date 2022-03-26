import React from 'react';
// import { nanoid } from 'nanoid';
import Filter from './components/Filter/Filter';
import ContactForm from './components/ContactForm/ContactForm';
import ContactsList from './components/ContactList/ContactList';
import { AppWrapper, Title } from './App.styled';

const App = () => {
  return (
    <AppWrapper>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactsList />
    </AppWrapper>
  );
};
export default App;
