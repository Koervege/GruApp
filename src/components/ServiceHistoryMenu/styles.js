import styled from 'styled-components';

export const Menu = styled.section` 
  position: absolute;
  margin-left: 100px;
  transform: translateX(-45%);
  background-color: #fefefe;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 10px 10px 21px 0px rgba(0,0,0,0.16);
  -moz-box-shadow: 10px 10px 21px 0px rgba(0,0,0,0.16);
  box-shadow: 10px 10px 21px 0px rgba(0,0,0,0.16);
  font-size: 16px;
  font-weight: 500;
  overflow: hidden;
`;

export const MenuItem = styled.p`
  height: 40px;
  display: flex;
  align-items: center;
  transition: background-color 0.4s;
  padding: 0.4rem 1rem;
  text-decoration: none;
  font-family: 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2980B9;
  font-weight: 500;
  border-bottom: 2px solid #2980B9;
    &:hover {
      cursor: pointer;
      background-color: #2980B9;
      color: #fefefe;
    }
    &:last-child {
      border-bottom: none;
    }
  `;

export const ContainerList = styled.article`
display: flex;
padding: 3px 12px;
margin: 4px 8px;
height: 20x;
background-color: rgba(249, 249, 249, 0.5);

@media (max-width: 768px) {
  flex-direction: column;
  padding: 2px 10px;
  height: 20px;
  justify-content: center;
  align-items: center;
  &:hover {
    border: solid 1px #BAB916;
  }
}
`;