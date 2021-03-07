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
    </div>
        
        <Input  
            type={type}
            onChange={onChange} 
            id={id} 
            name={name}
            placeholder={placeholder}
            value={value}>
        </Input>
</Container>
         
    
    
    )}

export { StyledInput, Container };