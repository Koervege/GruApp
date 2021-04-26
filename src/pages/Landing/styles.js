import styled from 'styled-components'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


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
