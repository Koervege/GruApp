import { Select, Label, Container } from './styles';

function StyledSelect({
  labelChildren,
  id,
  name,
  value,
  onChange,
}) {
  return (
    <Container>

        <Select
          id={id}
          onChange={onChange}
          name={name}
          value={value}
        >
        </Select>
    </Container>
  );
}

export { StyledSelect, Select, Label };
