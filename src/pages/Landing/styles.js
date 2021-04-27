import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const LandingMain = styled.main`
  display: flex;
  width: 90%;
  padding-top: 100px;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    padding-top: 60px;
  }
`

export const LandingMap = styled.iframe`
  margin: 0 auto;
  width: 100%;
  height: 500px;
  border: 3px solid #c9f1ff;
  border-radius: 11px;
  @media (max-width: 768px) {
    width: 100%;
    height: 250px;
    border: none;
    border-radius: 0;
  }
`;

export const ContentSection = styled.div`
  display: flex;
  flex-direction: row;
  margin: 50px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 100px;
  flex: 1;
  margin: 50px;
  width: 600px;
  height: 600px;
  font-size: 20px;
  border-radius: 15px;
  border: 5px solid white;

  @media (max-width: 576px) {
    font-size: 10px;
    width: 250px;
    height: 250px;
    padding-top: 10px;
    padding-bottom: 10px;
    border: 2px solid white;
  }

  @media (max-width: 768px) {
    font-size: 10px;
    margin: 50px;
    width: 250px;
    height: 250px;
    padding-top: 10px;
    padding-bottom: 10px;
    border: 2px solid white;
  }
`;

export const IconContentContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
  align-items: center;
  background-color: white;
  border-radius: 50%;
  color: #c9f1ff;
  font-size: 80px;
  font-weight: bold;
  height: 200px;
  width: 200px;
  margin: 15px;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    font-size: 25px;
    font-weight: bold;
    height: 50px;
    width: 50px;
    margin-bottom: 10px;
  }
`;

export const LandingP = styled.p`

    width:70%;
    font-size: 1.3em;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: #2980B9;
`
export const LineDivider = styled.div`
  width: 90%;
  border: 1px solid #1092e3;
  background-color: #1092e3;
  margin: 0 auto;
  margin: 15px 0;
`;

export const FooterContainer = styled.section`
  display: flex;
  flex-direction: row;
  padding: 20px;
  justify-content: space-between;
  width: 300px;
  @media (max-width: 576px) {
    padding: 10px;
    width: 200px;
  }
`;

export const IconFooterContainer = styled(Link)`
  display: flex;
  justify-content: center;
  padding: 5px;
  align-items: center;
  background-color: white;
  border-radius: 50%;
  color: #2980b9;
  font-size: 24px;
  font-weight: bold;
  height: 50px;
  width: 50px;
  margin: 15px;
  margin-bottom: 50px;
  transition: all 0.9s;
  &:hover {
    background-color: #2980b9;
    color: white;
  }
  @media (max-width: 576px) {
    font-size: 10px;
    font-weight: bold;
    height: 25px;
    width: 25px;
  }
`;
