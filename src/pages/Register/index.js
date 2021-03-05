import React from 'react'
import './styles.css'



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
            <fieldset className="registerText">
                <div className="aligner">
                    <label htmlFor="email" className="regFormLabel">Correo electrónico</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        onChange={this.handleChange}
                        placeholder="email@gruapp.com"
                        value={email}
                    />
                </div>
            </fieldset>
            <fieldset className="registerText">
                <div className="aligner">
                    <label htmlFor="password" className="regFormLabel">Contraseña</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={this.handleChange}
                        placeholder="Contraseña"
                        value={password}
                    />
                </div>
            </fieldset>
            <fieldset className="registerText">
                <div className="aligner">
                    <label htmlFor="passwordConfirm" className="regFormLabel">Confirma tu contraseña</label>
                    <input
                        type="password"
                        name="passwordConfirm"
                        id="passwordConfirm"
                        onChange={this.handleChange}
                        placeholder="Confírmala"
                        value={passwordConfirm}
                    />
                </div>
            </fieldset>
            
            <fieldset className="registerCheck">
                
                <label htmlFor="isBike" className="checkboxLabel">Moto</label>
                <input 
                    type="radio"
                    name="isBike" 
                    id="isBike" 
                    value="isBike"
                    onChange={this.handleChange}
                    
                />

                <label htmlFor="isTow" className="checkboxLabel">Grua</label>
                <input 
                    type="radio" 
                    name="isBike"
                    id="isTow" 
                    value="isTow"
                    onChange={this.handleChange}
                    
                />
            </fieldset>
            
            <div className="buttonAlign">
                <div className="regButtons">
                    <button className="accept" >Registrarse</button>
                    <button className="cancel" type="cancel">Cancelar</button>
                </div>
            </div>
        </form>
        )
    }
}

export default Form