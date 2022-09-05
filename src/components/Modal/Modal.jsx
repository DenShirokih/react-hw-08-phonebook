import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Overlay,
  Modal,
  ModalInput,
  BtnCloseModal,
  CloseIcon,
  Title,
  BtnUpdate,
} from './Modal.styled';
import { useEffect } from 'react';
import { useUpdateContactMutation } from 'redux/contactsApi';
export const ModalView = ({ onClick, id, name, number }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: `${name}`,
      number: `${number}`,
    },
  });
  const [update] = useUpdateContactMutation();

  useEffect(() => {
    window.addEventListener('keyup', onKeyUp);
    return () => {
      window.removeEventListener('keyup', onKeyUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onKeyUp = event => {
    if (event.code === 'Escape') {
      onClick();
    }
  };

  const handleBackDrop = event => {
    if (event.target === event.currentTarget) {
      onClick();
    }
  };
  const handleSubmitUpdate = async data => {
    try {
      if (data) {
        await update({ body: data, id });

        onClick();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Overlay onClick={handleBackDrop}>
      <Modal>
        <form
          autoComplete="off"
          onSubmit={handleSubmit(data => {
            handleSubmitUpdate(data);
          })}
        >
          <Title>Update your contact</Title>
          <label htmlFor="name">
            <ModalInput
              type="name"
              name="name"
              {...register('name', {
                register: true,
                required: 'This is required',
              })}
              placeholder="Name..."
            />
          </label>
          <label htmlFor="number">
            <ModalInput
              type="tel"
              name="number"
              {...register('number', {
                register: true,
                required: 'This is required',
              })}
              placeholder="Number..."
            />
          </label>
          <BtnUpdate type="submit">Update contact</BtnUpdate>
          <BtnCloseModal type="button" onClick={onClick}>
            <CloseIcon />
          </BtnCloseModal>
        </form>
      </Modal>
    </Overlay>
  );
};
