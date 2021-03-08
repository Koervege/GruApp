import { Input, Label, Container } from './styles';

function StyledInput({ 
     children, 
     type, 
     id, 
     name,
     placeholder,
     value,
     onChange 
}) {
return(
<Container>
    <div>
        <Label htmlFor={id}>{children}</Label>

        <Input  type={type} 
                id={id} 
                onChange={onChange}
                name={name}
                placeholder={placeholder}
                value={value}>
        </Input>
     </div>

       
</Container>
         
    
    
    )}

export { StyledInput, Container };