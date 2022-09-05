import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { useState } from 'react';
import { ModalView } from 'components/Modal/Modal';
export const ContactsView = () => {
  const [toggle, setToggle] = useState(false);
  const [id, setid] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const toggleModal = (id, name, number) => {
    setName(name);
    setNumber(number);
    setToggle(prevModal => !prevModal);
    setid(id);
  };
  return (
    <>
      <ContactsForm toggleModal={toggleModal} />
      {toggle && (
        <ModalView onClick={toggleModal} id={id} name={name} number={number} />
      )}
    </>
  );
};
