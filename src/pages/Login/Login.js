import React from 'react';
import logo from '../../images/logo.png'
import Frame  from '../../components/Frame';
import Button  from '../../components/Button';
import Img from '../../components/Img';
import { StyledInput, Container }  from '../../components/StyledInput/index';
import { users, suppliers } from '../../data';


class Login extends  React.Component {

    state= {
        email: '',
        password: '',
             
    }

    handleChange = ( event ) => {
        
        const { name, value } = event.target;
        this.setState({
            [name]: value 
        });
    }

    searchUser=( event ) => {

        event.preventDefault();

        const [moto] = users.filter( (user) => user.email === this.state.email );
        const [tow] = suppliers.filter( (supplier) => supplier.email === this.state.email );
        
        if( !moto && !tow ){
            alert('Usuario no existe');
            return
        }
                                  
        const {password} = this.state;
        if( moto != undefined && password === moto.password ) {
            alert(`Usuario Autenticado:\n${moto.name}\nMotocicleta`);
            return
        }
        if( tow != undefined && password === tow.password ) {
            alert(`Usuario Autenticado:\n${tow.name}\nGrua`);
            return
        }
        
        alert('Contraseña Invalida')
    }

    render() {
        const { email, password } = this.state;
       
        return(
                     
            <Frame>
                <Container>
                    <Img 
                        src={ logo } 
                        radius="100" 
                        width="100" height="100" alt="logo"/>
                </Container>
                <form onSubmit={this.searchUser}>
                    <StyledInput 
                        value={email}
                        name="email"
                        onChange={this.handleChange} 
                        children="Email" 
                        type="email" />
                    <StyledInput 
                        name="password" 
                        children="Pass"
                        value={password} 
                        onChange={this.handleChange} 
                        type="password" />
                    <Container>
                        <Button type="submit" color="primary">Login</Button>
                        <Button color="danger">Cancel</Button>
                    </Container>
                </form>
                
                <Container>
                    <small>Aun no estás registrado? <a href="#">Registrarse</a></small>
                </Container>
            </Frame>
           
        )
    }
}

export default Login

