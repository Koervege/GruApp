import { Input, Label } from './styles';

function StyledInput({children, type, id, name}) {
return(
    <>
        <Label htmlFor={id}>{children}</Label>
        <Input type={type} id={id} name={name}></Input>

    </>
    
)
    }

export default StyledInput;