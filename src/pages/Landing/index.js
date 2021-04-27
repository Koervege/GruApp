import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle, faTruckPickup } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import NavBar from '../../components/NavBar';
import { Background } from '../../components/Background'
import {
  LandingMain,
  LandingMap,
  LandingP,
  LineDivider,
  ContentSection,
  FooterContainer,
  ContentContainer,
  IconFooterContainer,
  IconContentContainer,
} from './styles';

class Landing extends React.Component {

  render() {
    return (
      <section className="landingContainer">
        <NavBar />
        <Background>
          <LandingMain>
            <LandingMap src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d43071.609450190146!2d-75.5761599635311!3d6.260759558366631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d6.2579499!2d-75.55469169999999!4m3!3m2!1d6.2871843!2d-75.58804549999999!5e0!3m2!1sen!2sco!4v1615145272798!5m2!1sen!2sco" />
          </LandingMain>
          <ContentSection>
            <ContentContainer>
              <IconContentContainer>
                <FontAwesomeIcon icon={faMotorcycle} />
              </IconContentContainer>
              <LandingP>
                ¿Tienes una motocicleta y requieres llevarla de un punto a otro?
                Somos aquella plataforma mediante la cual puedes contratar grúas
                para estos casos, haz parte de nuestros usuarios y disfruta el
                acceso a conductores disponibles a brindarte el mejor servicio.
              </LandingP>
            </ContentContainer>
            <ContentContainer>
              <IconContentContainer>
                <FontAwesomeIcon icon={faTruckPickup} />
              </IconContentContainer>
              <LandingP>
                ¿Tienes una grúa y quieres prestar un excelente servicio? Haz parte
                de nuestra red de conductores que llevan las motocicletas de nuestros
                usuarios.
              </LandingP>
            </ContentContainer>
          </ContentSection>
          <LineDivider />
          <FooterContainer>
            <IconFooterContainer to="">
              <FontAwesomeIcon icon={faFacebookF} />
            </IconFooterContainer>
            <IconFooterContainer to="">
              <FontAwesomeIcon icon={faTwitter} />
            </IconFooterContainer>
            <IconFooterContainer to="">
              <FontAwesomeIcon icon={faInstagram} />
            </IconFooterContainer>
          </FooterContainer>
        </Background>
      </section>
    );
  }
}

export default Landing;
