import styled from 'styled-components'

export const MapContainer = styled.div` 
  width: 70vw;
  height: 60vh;
  margin-top:30px;
  border-radius: 11px;
  @media (max-width: 576px) {
    width: 100vw;
  }
`
export const Sidebar = styled.div`
  background-color: #2980B9;
  opacity: 0.8;
  color: #fefefe;
  padding: 6px 12px;
  font: 16px/24px monospace;
  z-index: 1;
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
export const StyledP = styled.p`
  text-align: center;
  margin: 0 auto;
  font-weight: bold;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`
