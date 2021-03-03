import React from 'react';
import { user,motorcycle } from '../data';


class Login extends  React.Component {

    state= {
        users: user,
        motorcycles: motorcycle,
    }

    render() {
        const { users, motorcycles } = this.state;
        console.log( users );
        console.log( motorcycles )
        return(
            <p></p>
        )
    }
}

export default Login

