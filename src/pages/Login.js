import React from 'react';
import { users,motorcycles, services, tows } from '../data';


class Login extends  React.Component {

    state= {
        users: users,
        motorcycles: motorcycles,
        services: services,
        tows: tows,

    }

    render() {
        const { users, motorcycles, tows, services } = this.state;
       
        return(
            <p></p>
        )
    }
}

export default Login

