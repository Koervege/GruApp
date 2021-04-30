import styled from 'styled-components'

export const MapContainer = styled.div` 
  width: 70vw;
  height: 60vh;
  margin-top:70px;
  border-radius: 11px;
  @media (max-width: 576px) {
    width: 100vw;
    border-radius: 0;
  }
`
export const Sidebar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #2980B9;
  opacity: 0.8;
  color: #fefefe;
  padding: 6px 12px;
  font: 16px/24px monospace;
  z-index: 2;
  margin: 10px 12px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width:400px;
  @media (max-width: 576px) {
    font-size: 13px;
  }
`
export const StyledSpan = styled.span`
  margin-top: 5px;
  color: ${props => props.origin ? "#ff0000" : "#2980b9"};
  text-align: center;
  font-weight: bold;
`

export const ClickCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`