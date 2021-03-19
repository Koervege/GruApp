import { Input, Label, Container } from './styles';

function StyledInput({
  children,
  type,
  id,
  name,
  placeholder,
  value,
  onChange,
  required,
}) {
  return (
    <Container>
      <div>
        <Label htmlFor={id}>{children}</Label>

        <Input
          type={type}
          id={id}
          onChange={onChange}
          name={name}
          placeholder={placeholder}
          value={value}
          required={required}
        ></Input>
      </div>
    </Container>
  );
}

export { StyledInput, Container };
