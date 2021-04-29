import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle, faTruckPickup } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import NavBar from '../../components/NavBar';
import { Background } from '../../components/Background'
import {
  StyledH2,
  LandingMap,
  LandingP,
  LineDivider,
  ContentSection,
  FooterContainer,
  ContentContainer,
  IconFooterContainer,
  IconContentContainer,
} from './styles';

import Map from "../../components/Map";
class Landing extends React.Component {

  render() {
    return (
      <section className="landingContainer">
        <NavBar />
        <Background>
          <Map/>
          <StyledH2>Conoce más de los servicios que tenemos para ofrecerte</StyledH2>
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
