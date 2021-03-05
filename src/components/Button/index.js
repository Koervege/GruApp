import styled from 'styled-components';

const handleColorType = color => {
    switch (color) {
      case "primary":
        return "#1982ea";
      case "danger":
        return "#ff0000";
      case "success":
        return "#218838";  
      default:
        return "#5a6268";
    }
  };

const Button = styled.button`
      
    border-radius: 5px;
    margin: 10px;
    font-size: 20px;
    height: 40px;
    min-width: 100px;
    max-width: auto;
    color: white;
    border-style: none;
    background: ${({ color }) => handleColorType(color)}; 

    &:hover {
      cursor: pointer;
      background-color: black;
      color: yellow;
    }
`
export default Button

