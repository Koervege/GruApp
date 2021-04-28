import styled from 'styled-components';

export const Photo = styled.img`
  display: flex;
  border-radius: 50%;
  border: solid 5px white;
  height: 70px;
  width: 70px;
  src: ${(props) => props.src};

`;

export const ContainerList = styled.article`
  display: flex;
  padding: 0 100px;
  margin: 10px 20px;
  justify-content: space-between;
  border: solid 2px #2980b9;
  border-radius: 11px;
  height: 100px;
  transition: padding 1s;
  background-color: rgba(249, 249, 249, 0.5);
  &:hover {
    padding-top: 15px;
    padding-bottom: 15px;
    border: solid 2px whitesmoke;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px 50px;
    height: 300px;
    justify-content: center;
    align-items: center;
    &:hover {
      padding-top: 30px;
      padding-bottom: 30px;
      border: solid 2px whitesmoke;
    }
  }
`;

export const ContainerElement = styled.p`
  display: flex;
  flex: 6;
  align-items: center;
  padding: 0 10px;
  text-align: center;
  justify-content: center;
`;

export const ContainerOthers = styled.p`
  display: flex;
  flex: 1;
  padding: 0 10px;
  align-items: center;
  justify-content: center;
`;

export const SectionList = styled.section`
  padding: 25px 0;
  width: 100%;
`;
