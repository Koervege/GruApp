import { Select, Label } from './styles';

function StyledSelect({
  id,
  name,
  value,
  onChange,
}) {
  return (
    <Select
      id={id}
      onChange={onChange}
      name={name}
      value={value}
    >
    </Select>
  );
}

export { StyledSelect, Select, Label };
