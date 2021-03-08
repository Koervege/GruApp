import React from 'react'
import './styles.css'
import Frame from '../../components/Frame/index'
import Button from '../../components/Button/index'
import StyledInput from '../../components/StyledInput/index'
import logo from '../../logo.png'




class Form extends React.Component {

    state = {
        email: "",
        password: "",
        passwordConfirm: "",
    }


    handleChange = e => {
        const { name, value } = e.target
        this.setState({[name]: value})
    }

    handleSubmit = e => {
        e.preventDefault()
    }
    
    render() {

        const {email, password, passwordConfirm } = this.state

        return (
        
        <form onSubmit={this.handleSubmit} className="regForm">

            <div className="logoContainer">
                <img src={logo} className="regLogo"></img>
            </div>

            <Frame className="regFrame">
                <fieldset className="registerText">
                    <div className="aligner">
                        <StyledInput
                            className="styledInput"
                            type="text"
                            name="email"
                            id="email"
                            onChange={this.handleChange}
                            placeholder="email@gruapp.com"
                            value={email}
                            >Correo electrónico
                        </StyledInput>
                    </div>
                </fieldset>
                <fieldset className="registerText">
                    <div className="aligner">
                        <StyledInput
                            className="styledInput"
                            htmlFor="password"
                            type="password"
                            name="password"
                            id="password"
                            onChange={this.handleChange}
                            placeholder="Contraseña"
                            value={password}
                            > Contraseña
                        </StyledInput>

                    </div>
                </fieldset>
                <fieldset className="registerText">
                    <div className="aligner">
                        <StyledInput
                            className="styledInput"
                            htmlFor="passwordConfirm"
                            type="password"
                            name="passwordConfirm"
                            id="passwordConfirm"
                            onChange={this.handleChange}
                            placeholder="Contraseña"
                            value={passwordConfirm}
                            >Confirma tu contraseña 
                        </StyledInput>
                    </div>
                </fieldset>
                
                <fieldset className="registerCheck">
                    
                    <label htmlFor="isBike" className="radioLabel">Moto</label>
                    <input 
                        type="radio"
                        name="isBike" 
                        id="isBike" 
                        value="isBike"
                        onChange={this.handleChange}
                        
                    />

                    <label htmlFor="isTow" className="radioLabel">Grua</label>
                    <input 
                        type="radio" 
                        name="isBike"
                        id="isTow" 
                        value="isTow"
                        onChange={this.handleChange}
                        
                    />
                </fieldset>
            </Frame>
            
            <div className="buttonAlign">
                <div className="regButtons">
                    <Button color="primary" type="submit" id="acceptButton" >Registrarse</Button>
                    <Button color="danger" type="cancel" id="cancelButton">Cancelar</Button>
                </div>
            </div>
        </form>
        )
    }
}

export default Form