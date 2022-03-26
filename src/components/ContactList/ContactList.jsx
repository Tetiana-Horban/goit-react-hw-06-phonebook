import { useSelector } from 'react-redux';
import { getRenderContacts } from 'redux/contacts/selectors';
import ContactListItem from '../ContactListItem/ContactListItem';
import { ContactWrapper, ContactItem } from './ContactList.styled';

const ContactsList = () => {
  const contacts = useSelector(getRenderContacts);
  return (
    <ContactWrapper>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <ContactListItem id={id} name={name} number={number} />
        </ContactItem>
      ))}
    </ContactWrapper>
  );
};

export default ContactsList;
