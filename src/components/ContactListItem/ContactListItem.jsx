import PropTypes from 'prop-types';
import Button from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/actions';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(deleteContact(id));
  return (
    <>
      {name}: {number}
      <Button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </Button>
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
export default ContactListItem;
