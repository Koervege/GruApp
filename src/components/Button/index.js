import styled from 'styled-components';

const handleColorType = color => {
    switch (color) {
      case "primary":
        return "#0069d9";
      case "danger":
        return "#ff0000";
      case "success":
        return "#218838";  
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
    height: 36px;
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
    &:hover {
      cursor: pointer;
      background-color: #F8CE0B;
      color: black;
    }
`
export default Button

