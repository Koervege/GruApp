import styled from 'styled-components';

export const ContainerStar = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;

`;

export const Photo = styled.img`
  border-radius: 50%;
  border: solid 5px white;
  height: 70px;
  width: 70px;
  src: ${(props) => props.src};

`;

export const ContainerList = styled.article`
  display: flex;
  padding: 7px 50px;
  margin: 10px 20px;
  justify-content: space-between;
  border: solid 1px gray;
  border-radius: 5px;
  height: 100px;
  transition: padding 1s;

  &:hover {
    padding: 15px 50px;
    border: solid 1px goldenrod;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px 50px;
    height: 300px;
    justify-content: center;
    align-items: center;
    &:hover {
      padding: 30px 50px;
      border: solid 1px goldenrod;
    }
  }
`;

export const ContainerElement = styled.p`
  display: flex;
  min-width: 10%;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 10px;
`;
