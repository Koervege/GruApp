import React from 'react'
import logo from '../../logo.png'
import NavBar from '../../components/NavBar'
import './styles.css'

class Landing extends React.Component {



    render() {
        return (
            <div>
                <NavBar></NavBar>
                <img src={logo}></img>
                <iframe 
                    className="landingMap"
                    src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d43071.609450190146!2d-75.5761599635311!3d6.260759558366631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d6.2579499!2d-75.55469169999999!4m3!3m2!1d6.2871843!2d-75.58804549999999!5e0!3m2!1sen!2sco!4v1615145272798!5m2!1sen!2sco"
                />
                
            </div>
        
        )
    }
}

export default Landing