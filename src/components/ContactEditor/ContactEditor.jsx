import { useAddContactsMutation, useGetContactsQuery } from 'redux/contactsApi';
import { useForm } from 'react-hook-form';
import {
  WrapperFormEditor,
  Input,
  BtnAddContact,
} from './ContactEditor.styled';

export const ContactEditor = () => {
  const { data = [] } = useGetContactsQuery();
  const contacts = data;
  const [addContact] = useAddContactsMutation();
  const { register, handleSubmit, reset } = useForm();

  const handleSubmitAdd = async data => {
    const normalized = data.name.toLowerCase();
    if (contacts.find(contact => contact.name.toLowerCase() === normalized)) {
      alert(`${data.name} is already exist`);
    } else {
      try {
        if (data) {
          await addContact({ name: data.name, number: data.number });
          reset();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <WrapperFormEditor>
      <form
        onSubmit={handleSubmit(data => {
          handleSubmitAdd(data);
        })}
      >
        <label htmlFor="name">
          <Input
            autoComplete="off"
            type="text"
            name="name"
            {...register('name', {
              register: true,
              required: 'This is required',
            })}
            placeholder="Name"
          />
        </label>
        <label>
          <Input
            autoComplete="off"
            htmlFor="number"
            type="tel"
            name="number"
            {...register('number', {
              register: true,
              required: 'This is required',
            })}
            placeholder="Number"
          />
        </label>
        <BtnAddContact type="submit">Add contact</BtnAddContact>
      </form>
    </WrapperFormEditor>
  );
};
