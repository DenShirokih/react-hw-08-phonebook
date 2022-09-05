import { useState, useMemo } from 'react';
import { useGetContactsQuery } from 'redux/contactsApi';

export const useFilter = () => {
  const { data = [], status, refetch } = useGetContactsQuery();
  const contacts = data;
  const [filter, setFilter] = useState('');

  const filterByName = useMemo(() => {
    const normalaizedFilter = filter.toLowerCase();
    return contacts.filter(item =>
      item.name.toLowerCase().includes(normalaizedFilter)
    );
  }, [filter, contacts]);

  return { filterByName, filter, setFilter, status, refetch };
};
