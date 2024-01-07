import { useSelector } from 'react-redux';
import Contact from 'components/Contact/Contact';

import Wrapper from './ContactsList.styled';

const ContactsList = () => {
  const { contacts } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state.filter);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLocaleLowerCase())
  );

  return (
    <Wrapper>
      <ul>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <li key={id}>
              <Contact name={name} number={number} id={id} />
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default ContactsList;
