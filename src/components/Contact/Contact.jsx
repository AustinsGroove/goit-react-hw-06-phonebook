import { useDispatch } from 'react-redux';
import { removeContact } from 'store/sliceContacts/sliceContacts';
import Wrapper from './Contact.styled';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const removeContactHandler = () => {
    dispatch(removeContact(id));
  };

  return (
    <Wrapper>
      <p>{name}:</p>
      <p>{number}</p>
      <button type="button" onClick={removeContactHandler}>
        Delete
      </button>
    </Wrapper>
  );
};

export default Contact;
