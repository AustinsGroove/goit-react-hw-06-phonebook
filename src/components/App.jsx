import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
//
import InputForm from './InputForm/InputForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
//
export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addContact = contact => {
    const existNames = contacts.map(({ name }) => {
      return name.toLowerCase();
    });
    const isExist = existNames.includes(contact.name.toLowerCase());
    if (isExist) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }
    setContacts(contacts => {
      return [
        ...contacts,
        {
          id: nanoid(),
          name: contact.name,
          number: contact.number,
        },
      ];
    });
  };

  const removeContact = ({ target }) => {
    const removableId = target.id;
    setContacts(contacts.filter(contact => contact.id !== removableId));
  };

  const filterChange = ({ target: { value } }) => {
    setFilter(value);
  };

  const renderFilteredContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  useEffect(() => {
    const localData = localStorage.getItem('contacts');
    if (localData && JSON.parse(localData).length > 0) {
      setContacts(JSON.parse(localData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <h1>Phonebook</h1>
      <InputForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter filterChange={filterChange} value={filter} />
      <ContactsList
        contacts={renderFilteredContacts()}
        removeContact={removeContact}
      />
    </>
  );
};
