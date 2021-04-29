import styled from 'styled-components';


const Img = styled.img`
    border-radius: ${({radius}) => `${radius}px`};
    width: ${({width}) => `${width}px` };
    height: ${({height}) => `${height}px`};
    border-color: #2980B9;
    border-style:solid;
    border-width: 3px;`


export default Img;


