import styled from 'styled-components'

export const LandingMain = styled.main`

    padding-top: 100px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
      padding-top: 60px;
    }
`

export const LandingMap = styled.iframe`

    width:70%;
    height:500px;
    border: 4px solid #2980B9;
    border-radius: 11px;
    @media (max-width: 768px) {
      width: 100%;
      border: none;
      border-radius: 0;
    }
`

export const LandingImg = styled.img`

    margin-top: 50px;
    margin-bottom: 20px;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    border: solid 4px #2980B9;
    @media (max-width: 768px) {
      width: 120px;
      height: 120px;
    }
`

export const LandingH1 = styled.h1`
    
    font-size: 2em;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: #2980B9;
`

export const LandingP = styled.p`

    width:70%;
    font-size: 1.3em;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: #2980B9;
`
