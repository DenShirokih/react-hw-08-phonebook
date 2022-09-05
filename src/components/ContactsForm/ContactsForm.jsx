import { ContactEditor } from 'components/ContactEditor/ContactEditor';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { FormWripper } from './ContactsForm.styled';
export const ContactsForm = ({ toggleModal }) => {
  return (
    <FormWripper>
      <ContactEditor />

      <ContactsList toggleModal={toggleModal} />
    </FormWripper>
  );
};
