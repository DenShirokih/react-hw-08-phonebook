import { useEffect } from 'react';
import { useDeleteContactByIdMutation } from 'redux/contactsApi';
import {
  ContactIcon,
  ContactWrapper,
  Wrapper,
  BtnWrapper,
  ContactName,
  BtnUpdate,
  DeleteICon,
  UpdateIcon,
  BtnDelete,
  ContactNumber,
} from './ContactsList.styled';
import { useFilter } from 'components/hook/FilterHook';
import { Filter } from 'components/Filter/Filter';

export const ContactsList = ({ toggleModal }) => {
  const [deleteContact, { isSuccess }] = useDeleteContactByIdMutation();
  const { filter, setFilter, filterByName, status, refetch } = useFilter();
  useEffect(() => {
    refetch();
  }, [refetch, isSuccess]);
  const handleDeleteContact = async id => {
    await deleteContact(id);
  };
  return (
    <>
      <Filter value={filter} onChange={setFilter} />
      <Wrapper>
        {status === 'pending' ? (
          <h2>Loading...</h2>
        ) : (
          filterByName.map(({ name, number, id }) => (
            <ContactWrapper key={id}>
              <ContactIcon width="45" />
              <ContactName>{name}</ContactName>
              <ContactNumber>{number}</ContactNumber>

              <BtnWrapper>
                <BtnUpdate
                  type="button"
                  onClick={() => {
                    toggleModal(id, name, number);
                  }}
                >
                  <UpdateIcon width="25" />
                </BtnUpdate>
                <BtnDelete
                  type="button"
                  onClick={() => handleDeleteContact(id)}
                >
                  <DeleteICon width="25" />
                </BtnDelete>
              </BtnWrapper>
            </ContactWrapper>
          ))
        )}
      </Wrapper>
    </>
  );
};
