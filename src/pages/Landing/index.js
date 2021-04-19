import React from 'react';
import logo from '../../logo.png';
import LandingNavbar from '../../components/LandingNavbar/LandingNavbar';
import {
  LandingMain,
  LandingMap,
  LandingH1,
  LandingP,
  LandingImg,
} from './styles';
import viewService from '../../components/ViewServiceModal/index'

class Landing extends React.Component {

  componentDidMount() {

    viewService()
  }

  render() {
    return (
      <section className="landingContainer">
        <LandingNavbar></LandingNavbar>
        <LandingMain>
          <LandingImg src={logo} alt="GruApp logo"></LandingImg>
          <LandingMap src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d43071.609450190146!2d-75.5761599635311!3d6.260759558366631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d6.2579499!2d-75.55469169999999!4m3!3m2!1d6.2871843!2d-75.58804549999999!5e0!3m2!1sen!2sco!4v1615145272798!5m2!1sen!2sco" />
          <LandingH1>¡Bienvenido!</LandingH1>
          <LandingP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </LandingP>
        </LandingMain>
      </section>
    );
  }
}

export default Landing;
