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
  border: solid 2px #2980B9;
  border-radius: 11px;
  height: 100px;
  transition: padding 1s;
  background-color: rgba(249, 249, 249, 0.5);

  &:hover {
    padding: 15px 50px;
    border: solid 2px #BAB916;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px 50px;
    height: 300px;
    justify-content: center;
    align-items: center;
    &:hover {
      padding: 30px 50px;
      border: solid 1px #BAB916;
    }
  }
`;

export const ContainerElement = styled.div`
  display: flex;
  min-width: 10%;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 10px;
`;
