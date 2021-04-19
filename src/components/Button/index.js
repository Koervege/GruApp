import styled from 'styled-components';

const handleColorType = color => {
    switch (color) {
      case "primary":
        return "#2980B9";
      case "danger":
        return "#BA3D3C";
      case "success":
        return "#6E6D13";  
      default:
        return "#5a6268";
    }
  };

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing:border-box;
    border-radius: 11px;
    margin: 10px;
    outline: none;
    font-size: 16px;
    height: 40px;
    min-width: 90px;
    max-width: 120px;
    color: #fefefe;
    font-family: 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 500;
    border: none;
    background: ${({ color }) => handleColorType(color)};
    opacity: 0.8;
    transition: all 0.4s;
    &:hover {
      cursor: pointer;
      opacity: 1;
      color: #111;
    }
`
export default Button

