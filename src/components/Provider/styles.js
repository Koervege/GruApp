import styled from 'styled-components';

export const Photo = styled.img`
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
  border: solid 1px gray;
  border-radius: 5px;
  height: 100px;
  transition: height 1s;

  &:hover {
    height: 125px;
    border: solid 1px goldenrod;
  }
`;

export const ContainerElement = styled.p`
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

export const SectionList = styled.section`
  padding: 25px 0;
  width: 100%;
`;
