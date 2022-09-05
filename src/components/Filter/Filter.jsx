import { Input, FilterWrapper } from './Filter.styled';
export const Filter = ({ value, onChange }) => {
  return (
    <FilterWrapper>
      <Input
        autoComplete="off"
        type="text"
        name="search"
        value={value}
        placeholder="find contact..."
        onChange={e => onChange(e.target.value)}
      />
    </FilterWrapper>
  );
};
