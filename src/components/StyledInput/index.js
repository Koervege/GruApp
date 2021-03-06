import { Input, Label } from './styles';

function StyledInput({  children, 
                        type, 
                        id, 
                        name,
                        placeholder,
                        onChange,
                        value }) {
return(
    <>
        <Label htmlFor={id}>{children}</Label>
        <Input  type={type} 
                id={id} 
                onChange={onChange}
                name={name}
                placeholder={placeholder}
                value={value}>
        </Input>

    </>
    
)
    }

export default StyledInput;