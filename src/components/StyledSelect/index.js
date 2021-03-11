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
      <div>
        <Label htmlFor={id}>{labelChildren}</Label>

        <Select
          id={id}
          onChange={onChange}
          name={name}
          value={value}
        >
        </Select>
      </div>
    </Container>
  );
}

export { StyledSelect, Select };
